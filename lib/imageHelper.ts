/**
 * Image Helper for Portfolio
 * Handles image paths with fallbacks to placeholders
 */

import SoundPage from "components/SoundPage";
import { randomBytes } from "crypto";

// Check if image exists in public folder, otherwise return placeholder
export function getImagePath(imageName: string, projectFolder?: string): string {
  // If projectFolder is provided, look in /images/{projectFolder}/
  // Otherwise look in /images/
  const basePath = projectFolder ? `/images/${projectFolder}` : '/images';
  const fullPath = `${basePath}/${imageName}`;
  
  // For now, we'll return the path and let the browser handle 404s
  // You can add more sophisticated checks if needed
  return fullPath;
}

// Placeholder generator for different project types
export function getPlaceholder(projectName: string, width: number = 800, height: number = 600): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect fill='%23222' width='${width}' height='${height}'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23666' font-size='18' font-family='monospace'%3E${projectName.toUpperCase()}%3C/text%3E%3C/svg%3E`;
}

// Project-specific image paths
export const projectImages = {
  rifaly: {
    hero: '/images/rifaly/hero.png',
    thumbnail: '/images/rifaly/thumbnail.png',
    img1: '/images/rifaly/img1.png',
    img2: '/images/rifaly/img2.png',
    img3: '/images/rifaly/img3.png',
    img4: '/images/rifaly/img4.png',
    img5: '/images/rifaly/img5.png',
    img6: '/images/rifaly/img6.png',
    img7: '/images/rifaly/img7.png',
    img8: '/images/rifaly/img8.png',
    img9: '/images/rifaly/img9.png',
    img10: '/images/rifaly/img10.png',
    // Add more as needed
  },
  sag: {
    hero: '/images/sag/hero.png',
    thumbnail: '/images/sag/thumbnail.png',
    gif: '/images/sag/sagGif.gif',
    img1: '/images/sag/img1.png',
    img2: '/images/sag/img2.png',
    img3: '/images/sag/img3.png',
    img4: '/images/sag/img4.png',
    img5: '/images/sag/img5.png',
    img6: '/images/sag/img6.png',
    img7: '/images/sag/img7.png',
    img8: '/images/sag/img8.png',
    img9: '/images/sag/img9.png',
    img10: '/images/sag/img10.png',
    img11: '/images/sag/img11.png',
    img12: '/images/sag/img12.png',
    img13: '/images/sag/img13.png',
    img14: '/images/sag/img14.png',
    img15: '/images/sag/img15.png',
    img16: '/images/sag/img16.png',
    img17: '/images/sag/img17.png',
    img18: '/images/sag/img18.png',
    img19: '/images/sag/img19.png',
  },
  nmb: {
    hero: '/images/nmb/hero.png',
    thumbnail: '/images/nmb/thumbnail.png',
    padlock: '/images/nmb/padlock-motion.gif',
    img1: '/images/nmb/img1.png',
    img2: '/images/nmb/img2.png',
    img3: '/images/nmb/img3.png',
    img4: '/images/nmb/img4.png',
    img5: '/images/nmb/img5.png',
    img6: '/images/nmb/img6.png',
    img7: '/images/nmb/img7.png',
  },
  tequila: {
    hero: '/images/tequila/hero.png',
    thumbnail: '/images/tequila/thumbnail.png',
    gif: '/images/tequila/tequilaGif.gif',
    img1: '/images/tequila/img1.png',
    img2: '/images/tequila/img2.png',
    img3: '/images/tequila/img3.png',
    img4: '/images/tequila/img4.png',
    img5: '/images/tequila/img5.png',
    img6: '/images/tequila/img6.png',
    img7: '/images/tequila/img7.png',
    img8: '/images/tequila/img8.png',
    img9: '/images/tequila/img9.png',
    img10: '/images/tequila/img10.png',
    img11: '/images/tequila/img11.png',
    img12: '/images/tequila/img12.png',
    img13: '/images/tequila/img13.png',
    img14: '/images/tequila/img14.png',
    img15: '/images/tequila/img15.png',
    img16: '/images/tequila/img16.png',
    img17: '/images/tequila/img17.png',
  },
  nendiwe: {
    hero: '/images/nendiwe/hero.png',
    thumbnail: '/images/nendiwe/thumbnail.png',
    animation: '/images/nendiwe/animation.gif',
    img1: '/images/nendiwe/img1.png',
    img2: '/images/nendiwe/img2.png',
    img3: '/images/nendiwe/img3.png',
    img4: '/images/nendiwe/img4.png',
    img5: '/images/nendiwe/img5.png',
    img6: '/images/nendiwe/img6.png',
    img7: '/images/nendiwe/img7.png',
    img8: '/images/nendiwe/img8.png',
    img9: '/images/nendiwe/img9.png',
    img10: '/images/nendiwe/img10.png',
    img11: '/images/nendiwe/img11.png',
    img12: '/images/nendiwe/img12.png',
    img13: '/images/nendiwe/img13.png',
    img14: '/images/nendiwe/img14.png',
    img15: '/images/nendiwe/img15.png',
    img16: '/images/nendiwe/img16.png',
    img17: '/images/nendiwe/img17.png',
    img18: '/images/nendiwe/img18.png',
    img19: '/images/nendiwe/img19.png',
  },
  nikonekt: {
    hero: '/images/nikonekt/hero.png',
    thumbnail: '/images/nikonekt/thumbnail.png',
    logo: '/images/nikonekt/logo.png',
    gif: '/images/nikonekt/nikonektGif.gif',
    img1: '/images/nikonekt/img1.png',
    img2: '/images/nikonekt/img2.png',
    img3: '/images/nikonekt/img3.png',
    img4: '/images/nikonekt/img4.png',
    img5: '/images/nikonekt/img5.png',
    img6: '/images/nikonekt/img6.png',
    img7: '/images/nikonekt/img7.png',
    img8: '/images/nikonekt/img8.png',
    img9: '/images/nikonekt/img9.png',
    img10: '/images/nikonekt/img10.png',
    img11: '/images/nikonekt/img11.png',
  },
  sites: {
    hero: '/images/sites/hero.png',
    thumbnail: '/images/sites/thumbnail.png',
  },
  random: {
    thumbnail: '/images/random/thumbnail.png',
    gif: '/images/random/randomGif.gif',
  },
  bolt: {
    thumbnail: '/images/bolt/thumbnail.png',
  },
  sound: {
    thumbnail: '/images/sound/thumbnail.png',
    hero: '/images/sound/hero.png',
    img1: '/images/sound/img1.png',
    img2: '/images/sound/img2.png',
  }
};

export const vid1s = {
  sag: '/images/sag/vid1.mp4',
  nmb: '/images/nmb/vid1.mp4',
  tequila: '/images/tequila/vid1.mp4',
  nendiwe: '/images/nendiwe/vid1.mp4',
  nikonekt: '/images/nikonekt/vid1.mp4',
  rifal: '/images/rifaly/vid1.mp4',
};
export const vid2s = {
  sag: '/images/sag/vid2.mp4',
  nmb: '/images/nmb/vid2.mp4',
  tequila: '/images/tequila/vid2.mp4',
  nendiwe: '/images/nendiwe/vid2.mp4',
  nikonekt: '/images/nikonekt/vid2.mp4',
};
export const vid3s = {
  sag: '/images/sag/vid3.mp4',
  nmb: '/images/nmb/vid3.mp4',
  tequila: '/images/tequila/vid3.mp4',
  nendiwe: '/images/nendiwe/vid3.mp4',
  nikonekt: '/images/nikonekt/vid3.mp4',
};

export const vid4s = {
  sag: '/images/sag/vid4.mp4',
  nmb: '/images/nmb/vid4.mp4',
  tequila: '/images/tequila/vid4.mp4',
  nendiwe: '/images/nendiwe/vid4.mp4',
  nikonekt: '/images/nikonekt/vid4.mp4',
};

export const vid5s = {
  sag: '/images/sag/vid5.mp4',
  nmb: '/images/nmb/vid5.mp4',
  tequila: '/images/tequila/vid5.mp4',
  nendiwe: '/images/nendiwe/vid5.mp4',
  nikonekt: '/images/nikonekt/vid5.mp4',
};

export const vid6s = {
  sag: '/images/sag/vid6.mp4',
  nmb: '/images/nmb/vid6.mp4',
  tequila: '/images/tequila/vid6.mp4',
  nendiwe: '/images/nendiwe/vid6.mp4',
  nikonekt: '/images/nikonekt/vid6.mp4',
};

export const vid7s = {
  sag: '/images/sag/vid7.mp4',
  nmb: '/images/nmb/vid7.mp4',
  tequila: '/images/tequila/vid7.mp4',
  nendiwe: '/images/nendiwe/vid7.mp4',
  nikonekt: '/images/nikonekt/vid7.mp4',
};

// Portfolio grid thumbnails with fallbacks
export const portfolioThumbnails = {
  rifaly: projectImages.rifaly.thumbnail,
  bolt: projectImages.bolt.thumbnail,
  sag: projectImages.sag.thumbnail,
  nendiwe: projectImages.nendiwe.thumbnail,
  tequila: projectImages.tequila.thumbnail,
  nmb: projectImages.nmb.thumbnail,
  nikonekt: projectImages.nikonekt.thumbnail,
  sites: projectImages.sites.thumbnail,
  sound: projectImages.sound.thumbnail,
};

export const portfolioGifs = { // Placeholder, replace with actual gif if available
  sag: projectImages.sag.gif,
  nmb: projectImages.nmb.padlock,
  tequila: projectImages.tequila.gif,
  nikonekt: projectImages.nikonekt.gif,
  random: projectImages.random.gif,
}

export const portfolioHeroes = {
  rifaly: projectImages.rifaly.hero,
  nendiwe: projectImages.nendiwe.hero,
  sag: projectImages.sag.hero,
  nmb: projectImages.nmb.hero,
  tequila: projectImages.tequila.hero,
  nikonekt: projectImages.nikonekt.hero,
  sound: projectImages.sound.hero, 
};

export const img1s = {
  rifaly: projectImages.rifaly.img1,
  sag: projectImages.sag.img1,
  nmb: projectImages.nmb.img1,
  tequila: projectImages.tequila.img1,
  nendiwe: projectImages.nendiwe.img1,
  nikonekt: projectImages.nikonekt.img1,
  sound: projectImages.sound.img1,
}

export const img2s = {
  rifaly: projectImages.rifaly.img2,
  sag: projectImages.sag.img2,
  nmb: projectImages.nmb.img2,
  tequila: projectImages.tequila.img2,
  nendiwe: projectImages.nendiwe.img2,
  nikonekt: projectImages.nikonekt.img2,
  sound: projectImages.sound.img2,
}

export const img3s = {
  rifaly: projectImages.rifaly.img3,
  sag: projectImages.sag.img3,
  nmb: projectImages.nmb.img3,
  tequila: projectImages.tequila.img3,
  nendiwe: projectImages.nendiwe.img3,
  nikonekt: projectImages.nikonekt.img3,
}

export const img4s = {
  rifaly: projectImages.rifaly.img4,
  sag: projectImages.sag.img4,
  nmb: projectImages.nmb.img4,
  tequila: projectImages.tequila.img4,
  nendiwe: projectImages.nendiwe.img4,
  nikonekt: projectImages.nikonekt.img4,
}

export const img5s = {
  rifaly: projectImages.rifaly.img5,
  sag: projectImages.sag.img5,
  nmb: projectImages.nmb.img5,
  tequila: projectImages.tequila.img5,
  nendiwe: projectImages.nendiwe.img5,
  nikonekt: projectImages.nikonekt.img5,
}

export const img6s = {
  rifaly: projectImages.rifaly.img6,
  sag: projectImages.sag.img6,
  nmb: projectImages.nmb.img6,
  tequila: projectImages.tequila.img6,
  nendiwe: projectImages.nendiwe.img6,
  nikonekt: projectImages.nikonekt.img6,
}

export const img7s = {
  rifaly: projectImages.rifaly.img7,
  sag: projectImages.sag.img7,
  tequila: projectImages.tequila.img7,
  nendiwe: projectImages.nendiwe.img7,
  nikonekt: projectImages.nikonekt.img7,
  nmb: projectImages.nmb.img7,
}

export const img8s = {
  tequila: projectImages.tequila.img8,
  nendiwe: projectImages.nendiwe.img8,
  nikonekt: projectImages.nikonekt.img8,
  sag: projectImages.sag.img8,
  rifaly: projectImages.rifaly.img8,
}

export const img9s = {
  tequila: projectImages.tequila.img9,
  nendiwe: projectImages.nendiwe.img9,
  nikonekt: projectImages.nikonekt.img9,
  sag: projectImages.sag.img9,
  rifaly: projectImages.rifaly.img9,
}

export const img10s = {
  tequila: projectImages.tequila.img10,
  nendiwe: projectImages.nendiwe.img10,
  nikonekt: projectImages.nikonekt.img10,
  sag: projectImages.sag.img10,
  rifaly: projectImages.rifaly.img10,
}

export const img11s = {
  tequila: projectImages.tequila.img11,
  nendiwe: projectImages.nendiwe.img11,
  nikonekt: projectImages.nikonekt.img11,
  sag: projectImages.sag.img11,
}

export const img12s = {
  tequila: projectImages.tequila.img12,
  nendiwe: projectImages.nendiwe.img12,
  sag: projectImages.sag.img12,
}

export const img13s = {
  tequila: projectImages.tequila.img13,
  nendiwe: projectImages.nendiwe.img13,
  sag: projectImages.sag.img13,
}

export const img14s = {
  tequila: projectImages.tequila.img14,
  nendiwe: projectImages.nendiwe.img14,
  sag: projectImages.sag.img14,
}

export const img15s = {
  tequila: projectImages.tequila.img15,
  nendiwe: projectImages.nendiwe.img15,
  sag: projectImages.sag.img15,
}

export const img16s = {
  nendiwe: projectImages.nendiwe.img16,
  sag: projectImages.sag.img16,
  tequila: projectImages.tequila.img16,
}

export const img17s = {
  nendiwe: projectImages.nendiwe.img17,
  sag: projectImages.sag.img17,
  tequila: projectImages.tequila.img17,
}

export const img18s = {
  nendiwe: projectImages.nendiwe.img18,
  sag: projectImages.sag.img18,
}

export const img19s = {
  nendiwe: projectImages.nendiwe.img19,
  sag: projectImages.sag.img19,
}

export const footerLogos = {
  rifaly: '/images/rifaly/footer.png',
  sag: '/images/sag/footer.png',
  nmb: '/images/nmb/footer.png',
  tequila: '/images/tequila/footer.png',
  nendiwe: '/images/nendiwe/footer.png',
  nikonekt: '/images/nikonekt/footer.png',
}
