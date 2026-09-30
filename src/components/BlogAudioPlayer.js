"use client";

import { useEffect, useRef, useState } from "react";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

export default function BlogAudioPlayer({ manifest }) {
  const audioRef = useRef(null);
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    audioRef.current = audio;

    const onTimeUpdate = () => setProgress(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      const nextIndex = currentIndexRef.current + 1;
      if (nextIndex >= manifest.chunks.length) {
        setIsPlaying(false);
        setCurrentIndex(0);
        setProgress(0);
        return;
      }
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
      audio.src = manifest.chunks[nextIndex].url;
      audio.play().catch(() => setError(true));
    };
    const onError = () => setError(true);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    return () => {
      audio.pause();
      audio.src = "";
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [manifest.chunks]);

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

    if (!audio.src || audio.src !== new URL(manifest.chunks[currentIndex].url, window.location.origin).href) {
      audio.src = manifest.chunks[currentIndex].url;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setError(true);
    }
  };

  const reset = () => {
    const audio = audioRef.current;
    audio?.pause();
    if (audio) audio.currentTime = 0;
    setCurrentIndex(0);
    currentIndexRef.current = 0;
    setProgress(0);
    setIsPlaying(false);
  };

  return (
    <section className="mx-auto mb-10 max-w-5xl rounded-xl border border-gray-800 bg-zg-dark-0 p-4" aria-label="Listen to this article">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={togglePlayback}
          className="inline-flex items-center gap-2 rounded-full bg-zg-teal px-4 py-2 text-sm font-semibold text-zg-dark-1 transition-colors hover:bg-zg-teal-light"
          aria-label={isPlaying ? "Pause article" : "Play article"}
        >
          <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
          {isPlaying ? "Pause" : "Listen"}
        </button>
        <button type="button" onClick={reset} className="text-sm text-gray-400 hover:text-white">Restart</button>
        <span className="text-sm text-gray-500">
          {formatTime(progress)} · Part {currentIndex + 1} of {manifest.chunks.length}
        </span>
      </div>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-gray-800" aria-hidden="true">
        <div className="h-full bg-zg-teal transition-[width]" style={{ width: duration ? `${(progress / duration) * 100}%` : "0%" }} />
      </div>
      {error ? <p className="mt-2 text-sm text-zg-coral">Audio could not be played right now.</p> : null}
    </section>
  );
}
