"use client";

import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useEffect, useMemo, useRef, useState } from "react";
import { trackAudioCompleted, trackAudioSpeedChanged, trackAudioStarted } from "@/lib/rybbit";

const PLAYBACK_SPEED_STORAGE_KEY = "zg-blog-audio-playback-speed";
const PLAYBACK_SPEEDS = [0.75, 1, 1.25, 1.5, 2];

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

export default function BlogAudioPlayer({
  contentSlug,
  contentType = "blog",
  manifest,
  title = "article",
}) {
  const audioRef = useRef(null);
  const currentIndexRef = useRef(0);
  const playbackRateRef = useRef(1.25);
  const hasTrackedStartRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.25);
  const [error, setError] = useState(false);

  const durations = useMemo(
    () => manifest.chunks.map((chunk) => Number(chunk.duration) || 0),
    [manifest.chunks],
  );
  const totalDuration = manifest.totalDuration || durations.reduce((total, duration) => total + duration, 0);
  const displayDuration = totalDuration / playbackRate;
  const displayTime = currentTime / playbackRate;
  const offsets = useMemo(() => durations.reduce((result, duration, index) => {
    result.push((result[index - 1] || 0) + duration);
    return result;
  }, []), [durations]);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    audioRef.current = audio;

    const onTimeUpdate = () => {
      const start = currentIndexRef.current === 0 ? 0 : offsets[currentIndexRef.current - 1];
      setCurrentTime(start + audio.currentTime);
    };
    const onEnded = () => {
      const nextIndex = currentIndexRef.current + 1;
      if (nextIndex >= manifest.chunks.length) {
        setIsPlaying(false);
        setCurrentTime(totalDuration);
        trackAudioCompleted(contentType, contentSlug, playbackRateRef.current);
        return;
      }

      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
      audio.src = manifest.chunks[nextIndex].url;
      audio.playbackRate = playbackRateRef.current;
      audio.play().catch(() => setError(true));
    };
    const onError = () => setError(true);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    return () => {
      audio.pause();
      audio.src = "";
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [contentSlug, contentType, manifest.chunks, offsets, totalDuration]);

  useEffect(() => {
    try {
      const storedSpeed = Number(window.localStorage.getItem(PLAYBACK_SPEED_STORAGE_KEY));
      if (PLAYBACK_SPEEDS.includes(storedSpeed)) setPlaybackRate(storedSpeed);
    } catch {
      // localStorage may be unavailable in privacy-restricted browsers.
    }
  }, []);

  useEffect(() => {
    playbackRateRef.current = playbackRate;
    try {
      window.localStorage.setItem(PLAYBACK_SPEED_STORAGE_KEY, String(playbackRate));
    } catch {
      // localStorage may be unavailable in privacy-restricted browsers.
    }
    if (audioRef.current) audioRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    if (!isPlaying) return undefined;
    const nextChunk = manifest.chunks[currentIndex + 1];
    if (!nextChunk) return undefined;

    const preload = new Audio();
    preload.preload = "auto";
    preload.src = nextChunk.url;
    return () => {
      preload.src = "";
    };
  }, [currentIndex, isPlaying, manifest.chunks]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    setError(false);

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    const source = new URL(manifest.chunks[currentIndexRef.current].url, window.location.origin).href;
    if (audio.src !== source) audio.src = source;
    audio.playbackRate = playbackRate;

    try {
      await audio.play();
      setIsPlaying(true);
      if (!hasTrackedStartRef.current) {
        hasTrackedStartRef.current = true;
        trackAudioStarted(contentType, contentSlug, playbackRate);
      }
    } catch {
      setError(true);
    }
  };

  const seek = (value) => {
    const nextDisplayTime = Number(value);
    const nextTime = nextDisplayTime * playbackRate;
    const matchingIndex = offsets.findIndex((offset) => nextTime < offset);
    const nextIndex = matchingIndex === -1 ? manifest.chunks.length - 1 : matchingIndex;
    const chunkStart = nextIndex === 0 ? 0 : offsets[nextIndex - 1];
    const audio = audioRef.current;
    if (!audio) return;

    currentIndexRef.current = nextIndex;
    setCurrentIndex(nextIndex);
    setCurrentTime(nextTime);
    audio.src = manifest.chunks[nextIndex].url;
    audio.playbackRate = playbackRate;

    const setAudioPosition = () => {
      audio.currentTime = Math.max(0, nextTime - chunkStart);
      audio.removeEventListener("loadedmetadata", setAudioPosition);
    };
    audio.addEventListener("loadedmetadata", setAudioPosition);
    audio.load();

    if (isPlaying) audio.play().catch(() => setError(true));
  };

  return (
      <section className="mx-auto mb-10 max-w-5xl rounded-2xl border border-gray-800 bg-zg-dark-0 px-4 py-3 sm:px-5" aria-label={`Listen to this ${title}`}>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={togglePlayback}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zg-teal text-zg-dark-1 transition-colors hover:bg-zg-teal-light"
          aria-label={isPlaying ? "Pause article" : "Play article"}
        >
          {isPlaying ? <PauseIcon className="h-4 w-4" aria-hidden="true" /> : <PlayIcon className="h-4 w-4" aria-hidden="true" />}
        </button>

        <div className="min-w-0 flex-1">
          <input
            type="range"
            min="0"
            max={displayDuration || 0}
            step="0.1"
            value={Math.min(displayTime, displayDuration || 0)}
            onChange={(event) => seek(event.target.value)}
            className="h-1.5 w-full cursor-pointer accent-zg-teal"
            aria-label="Seek through article"
          />
          <div className="mt-1 flex justify-between text-xs tabular-nums text-gray-500">
            <span>{formatTime(displayTime)}</span>
            <span>{formatTime(displayDuration)}</span>
          </div>
        </div>

        <label className="shrink-0 text-xs text-gray-500">
          <span className="sr-only">Playback speed</span>
          <select
            value={playbackRate}
            onChange={(event) => {
              const nextRate = Number(event.target.value);
              setPlaybackRate(nextRate);
              trackAudioSpeedChanged(contentType, contentSlug, nextRate);
            }}
            className="rounded border border-gray-700 bg-transparent px-1.5 py-1 text-xs text-gray-400 outline-none focus:border-zg-teal"
            aria-label="Playback speed"
          >
            {PLAYBACK_SPEEDS.map((rate) => <option key={rate} value={rate}>{rate}×</option>)}
          </select>
        </label>
      </div>
      {error ? <p className="mt-2 text-sm text-zg-coral">Audio could not be played right now.</p> : null}
    </section>
  );
}
