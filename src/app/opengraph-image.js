import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export const alt = 'Zachary Guerrero - Senior Product Designer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0f0f0f',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Gradient background accent */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '50%',
            height: '50%',
            background: 'radial-gradient(circle, rgba(84, 204, 190, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-10%',
            width: '50%',
            height: '50%',
            background: 'radial-gradient(circle, rgba(255, 108, 100, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 1 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Zachary Guerrero
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#54ccbe',
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Senior Product Designer
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#9ca3af',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            I help B2B SaaS companies turn complex problems into simple experiences.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: '#54ccbe',
              fontWeight: 600,
            }}
          >
            zacharyguerrero.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
