import { ImageResponse } from '@vercel/og';
import { getWorkBySlug } from '@/lib/content';

export const runtime = 'nodejs';

export const alt = 'Project Case Study';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f0f0f',
          }}
        >
          <div style={{ fontSize: 48, color: '#ffffff' }}>Project Not Found</div>
        </div>
      ),
      { ...size }
    );
  }

  const { meta } = work;

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
          {/* Category and Year */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontSize: 18,
                color: '#54ccbe',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {meta.category}
            </div>
            <div style={{ fontSize: 18, color: '#4b5563' }}>•</div>
            <div style={{ fontSize: 18, color: '#9ca3af' }}>{meta.year}</div>
          </div>

          {/* Project Title */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: 24,
              maxWidth: '900px',
            }}
          >
            {meta.title}
          </div>

          {/* Excerpt */}
          <div
            style={{
              fontSize: 24,
              color: '#9ca3af',
              maxWidth: '900px',
              lineHeight: 1.4,
              marginBottom: 32,
            }}
          >
            {meta.excerpt}
          </div>

          {/* Client */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: 14,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Client
            </div>
            <div
              style={{
                fontSize: 20,
                color: '#ffffff',
                fontWeight: 600,
              }}
            >
              {meta.client}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
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
            Zachary Guerrero
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#9ca3af',
            }}
          >
            zkg.io
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
