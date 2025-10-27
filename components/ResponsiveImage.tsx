'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getPlaceholder } from '../lib/imageHelper';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

/**
 * Responsive Image component with automatic fallback
 * If the image fails to load, shows a styled placeholder
 */
export default function ResponsiveImage({
  src,
  alt,
  className = '',
  fallbackText,
  width,
  height,
  priority = false,
  fill = false,
  sizes,
  objectFit = 'cover',
}: ResponsiveImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // If image failed to load, show placeholder
  if (error) {
    const placeholderSrc = getPlaceholder(
      fallbackText || alt || 'IMAGE',
      width || 800,
      height || 600
    );
    
    return (
      <Image fill 
        src={placeholderSrc}
        alt={alt}
        className={className}
        style={{ objectFit }}
        layout="fill"
        objectFit="cover"
      />
    );
  }

  // Use Next.js Image for optimization
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        priority={priority}
        sizes={sizes || '100vw'}
        style={{ objectFit }}
        layout="fill" 
        objectFit="cover"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      onError={() => setError(true)}
      onLoad={() => setLoading(false)}
      priority={priority}
      sizes={sizes}
      style={{ objectFit, width: '100%', height: 'auto' }}
      layout="fill" 
      objectFit="cover"
    />
  );
}
