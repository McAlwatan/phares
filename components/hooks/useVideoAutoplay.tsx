import { useRef, useEffect } from 'react';

export function useVideoAutoplay() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in viewport, try to play
            video.play().catch(() => {
              // If autoplay fails, continue silently
              console.log('Autoplay prevented for video');
            });
          } else {
            // Video is out of viewport, pause
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return videoRef;
}

interface AutoplayVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  className?: string;
}

export function AutoplayVideo({ src, className, ...props }: AutoplayVideoProps) {
  const videoRef = useVideoAutoplay();

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className={className}
      {...props}
    />
  );
}