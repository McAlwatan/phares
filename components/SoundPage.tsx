// import React, { useState, useRef, useEffect } from 'react';
// import svgPaths from "../imports/svg-qfblbybskz";

// // Placeholder album covers - replace with your actual images in /public/images/
// const imgImage2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23666' font-size='14' font-family='monospace'%3EALBUM 1%3C/text%3E%3C/svg%3E";
// const imgImage12 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23666' font-size='14' font-family='monospace'%3EALBUM 2%3C/text%3E%3C/svg%3E";
// const imgImage11 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23666' font-size='14' font-family='monospace'%3EALBUM 3%3C/text%3E%3C/svg%3E";

// import MainNavigation from './MainNavigation';
// import { img1s, portfolioHeroes } from 'lib/imageHelper';
// import Image from 'next/image';
// import Link from 'next/link';

// interface AudioPlayerProps {
//   title: string;
//   artist: string;
//   albumArt: string;
//   audioUrl: string;
//   credits: string;
// }

// function SpotifyStyleAudioPlayer({ title, artist, albumArt, audioUrl, credits }: AudioPlayerProps) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(240); // Mock duration in seconds
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const audioRef = useRef<HTMLAudioElement>(null);

//   const togglePlay = () => {
//     if (isPlaying) {
//       // Pause
//       setIsPlaying(false);
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//       }
//       if (audioRef.current) {
//         audioRef.current.pause();
//       }
//     } else {
//       // Play
//       setIsPlaying(true);
//       if (audioRef.current) {
//         audioRef.current.play();
//       }
//       intervalRef.current = setInterval(() => {
//         setCurrentTime(prev => {
//           if (prev >= duration) {
//             setIsPlaying(false);
//             if (intervalRef.current) {
//               clearInterval(intervalRef.current);
//               intervalRef.current = null;
//             }
//             return 0;
//           }
//           return prev + 1;
//         });
//       }, 1000);
//     }
//   };

//   const skipBackward = () => {
//     const newTime = Math.max(currentTime - 15, 0);
//     setCurrentTime(newTime);
//     if (audioRef.current) {
//       audioRef.current.currentTime = newTime;
//     }
//   };

//   const skipForward = () => {
//     const newTime = Math.min(currentTime + 15, duration);
//     setCurrentTime(newTime);
//     if (audioRef.current) {
//       audioRef.current.currentTime = newTime;
//     }
//   };

//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };

//   useEffect(() => {
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="relative">
//       {/* Hidden audio element for real audio playback */}
//       <audio
//         ref={audioRef}
//         src={audioUrl}
//         onLoadedMetadata={() => {
//           if (audioRef.current) {
//             setDuration(audioRef.current.duration);
//           }
//         }}
//         onTimeUpdate={() => {
//           if (audioRef.current) {
//             setCurrentTime(audioRef.current.currentTime);
//           }
//         }}
//         onEnded={() => {
//           setIsPlaying(false);
//           setCurrentTime(0);
//           if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//             intervalRef.current = null;
//           }
//         }}
//       />

//       {/* Album Art Container - Exact Figma positioning */}
//       <div className="h-[255px] sm:h-[225px] lg:h-[225px] rounded-[15px] overflow-hidden relative group">
//         <Image 
//           alt={title} 
//           className="absolute h-[152.9%] sm:h-[132.9%] lg:h-[132.9%] left-[-0.84%] max-w-none top-[-21.13%] w-[101.69%] object-cover" 
//           src={img1s.sound}
//           layout="fill"
//           height={0}
//           width={0}
//         />
        
//         {/* Progress bar background */}
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
//           <div 
//             className="h-full bg-white/80 transition-all duration-100"
//             style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
//           />
          
//           {/* Skip backward button (left side of progress bar) */}
//           <button
//             onClick={skipBackward}
//             className="absolute left-2 top-[-8px] w-4 h-4 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
//           >
//             <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"/>
//             </svg>
//           </button>
          
//           {/* Skip forward button (right side of progress bar) */}
//           <button
//             onClick={skipForward}
//             className="absolute right-2 top-[-8px] w-4 h-4 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
//           >
//             <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"/>
//             </svg>
//           </button>
//         </div>
        
//         {/* Main play button - bottom right corner */}
//         <button
//           onClick={togglePlay}
//           className="absolute bottom-3 right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg opacity-0 group-hover:opacity-100"
//         >
//           {isPlaying ? (
//             <svg className="w-8 h-8 md:w-5 md:h-5 lg:w-5 lg:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
//             </svg>
//           ) : (
//             <svg className="w-8 h-8 md:w-5 md:h-5 lg:w-5 lg:h-5 ml-0.5 text-black" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M8 5v14l11-7z"/>
//             </svg>
//           )}
//         </button>

//         {/* Time display - bottom left corner */}
//         <div className="absolute bottom-3 left-3 text-white text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded">
//           {formatTime(currentTime)} / {formatTime(duration)}
//         </div>
//       </div>

//       {/* Credits */}
//       {credits && (
//         <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] text-[#7f7f7f] text-[20px] mt-6">
//           {credits}
//         </p>
//       )}
//     </div>
//   );
// }

// function SpotifyPlaylist() {
//   const tracks = [
//     { id: 1, title: "Midnight Vibes", artist: "Big Phares", duration: "3:24", isPlaying: false },
//     { id: 2, title: "City Lights", artist: "Big Phares ft. Lucky Junior", duration: "4:12", isPlaying: false },
//     { id: 3, title: "Dream State", artist: "Young Future", duration: "3:48", isPlaying: false },
//     { id: 4, title: "Flow Like Water", artist: "Big Phares", duration: "3:56", isPlaying: false },
//     { id: 5, title: "Underground", artist: "Big Phares ft. Magrecious", duration: "4:03", isPlaying: false },
//     { id: 6, title: "Lost in Rhythm", artist: "Young Future", duration: "3:31", isPlaying: false },
//   ];

//   const [currentTrack, setCurrentTrack] = useState<number | null>(null);

//   const openSpotify = () => {
//     // Replace with actual Spotify profile URL
//     window.open('https://open.spotify.com/artist/YOUR_SPOTIFY_ARTIST_ID', '_blank');
//   };

//   return (
//     <div className="bg-gradient-to-b from-purple-700 to-[#111111]/90 rounded-[10px] p-6 border border-[#2a2a2a] [#1a1a1a]">
//       {/* Playlist Header */}
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center gap-4">
//           <div className="w-16 h-16 bg-gradient-to-br from-[#008cff] to-[#0066cc] rounded-lg flex items-center justify-center">
//             <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
//               <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
//             </svg>
//           </div>
//           <div>
//             <h3 className="font-['IBM_Plex_Mono:Medium',_sans-serif] text-[#ffffff] text-[30px] sm:text-[24px] lg:text-[24px] mb-1">
//               Big Phares Collection
//             </h3>
//             <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] text-[#7f7f7f] text-[30px] sm:text-16px] lg:text-[16px]">
//               6 songs • Personal Playlist
//             </p>
//           </div>
//         </div>
        
//         {/* Follow Button */}
//         <Link href={'https://spotify.com'}>
//           <button
//             onClick={openSpotify}
//             className="px-6 py-2 bg-[#1db954] text-white rounded-full font-['IBM_Plex_Mono:Medium',_sans-serif] text-[30px] sm:text-[14px] lg:text-[14px] hover:bg-[#1ed760] transition-colors cursor-pointer"
//           >
            
            
//             Follow on Spotify
//           </button>
//         </Link>
//       </div>
      
//       {/* Track List */}
//       <div className="space-y-2">
//         {tracks.map((track, index) => (
//           <div
//             key={track.id}
//             className={`flex items-center gap-4 p-3 rounded-lg transition-colors cursor-pointer group ${
//               currentTrack === track.id ? 'bg-[#008cff]/10' : 'hover:bg-[#2a2a2a]'
//             }`}
//             onClick={() => setCurrentTrack(currentTrack === track.id ? null : track.id)}
//           >
//             {/* Track Number / Play Button */}
//             <div className="w-6 text-center">
//               {currentTrack === track.id ? (
//                 <div className="w-4 h-4 mx-auto">
//                   <div className="flex gap-1 items-end justify-center h-full">
//                     <div className="w-1 bg-[#008cff] music-bar-1" style={{ height: '60%' }}></div>
//                     <div className="w-1 bg-[#008cff] music-bar-2" style={{ height: '100%' }}></div>
//                     <div className="w-1 bg-[#008cff] music-bar-3" style={{ height: '80%' }}></div>
//                   </div>
//                 </div>
//               ) : (
//                 <span className="font-['IBM_Plex_Mono:Regular',_sans-serif] text-[#7f7f7f] text-[30px] sm:text-[14px] lg:text-[14px] group-hover:hidden">
//                   {index + 1}
//                 </span>
//               )}
//               <svg className="w-4 h-4 hidden group-hover:block text-[#bfbfbf]" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8 5v14l11-7z"/>
//               </svg>
//             </div>
            
//             {/* Track Info */}
//             <div className="flex-1">
//               <h4 className={`font-['IBM_Plex_Mono:Medium',_sans-serif] text-[29px] sm:text-[16px] md:text-[16px] lg:text-[16px] mb-1 ${
//                 currentTrack === track.id ? 'text-[#008cff]' : 'text-[#ffffff]'
//               }`}>
//                 {track.title}
//               </h4>
//               <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] text-[#7f7f7f] text-[25px] sm:text-[14px] md:text-[14px] lg:text-[14px]">
//                 {track.artist}
//               </p>
//             </div>
            
//             {/* Duration */}
//             <span className="font-['IBM_Plex_Mono:Regular',_sans-serif] text-[#7f7f7f] text-[25px] sm:text-[14px] md:text-[14px] lg:text-[14px]">
//               {track.duration}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// interface SoundPageProps {
//   onBack: () => void;
// }

// export default function SoundPage({ onBack }: SoundPageProps) {
//   return (
//     <div className="bg-[#111111] min-h-screen w-full" data-name="SOUND PAGE">
//       <MainNavigation defaultActive="sound" onSectionChange={(section) => {
//         if (section === 'design') {
//           onBack();
//         }
//       }} />
      
//       <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 max-w-[1440px] mx-auto pt-[50px] pt-[56px] sm:pt-[30px] md:pt-[50px]">
//        <div className="absolute font-['Neue_Brucke',_sans-serif] leading-[0] sm:left-1/2 lg:left-1/2 not-italic text-[#7f7f7f] text-center top-[185px] sm:translate-x-[-50%] lg:translate-x-[-50%] w-[1154px] mb-20px">
//           <p className="leading-[110px] sm:leading-[130px] lg:leading-[130px] mb-0 sm:mb-0 lg:mb-0 text-[110px] sm:text-[120px] lg:text-[120px]">WHEN I AM NOT</p>
//           <p className="leading-[110px] sm:leading-[130px] lg:leading-[130px] mb-0 sm:mb-0 lg:mb-0 text-[110px] sm:text-[120px] lg:text-[120px]">DESIGNING,</p>
//           <p className="leading-[110px] sm:leading-[130px] lg:leading-[130px] mb-0 sm:mb-0 lg:mb-0 text-[110px] sm:text-[120px] lg:text-[120px]">I LOVE TO MAKE</p>
//           <p className="leading-[110px] sm:leading-[130px] lg:leading-[130px] mb-0 sm:mb-0 lg:mb-0">
//             <span className="text-[#d9d9d9] text-[110px] sm:text-[120px] lg:text-[120px]">BEATS</span>
//             <span className="text-[100px] sm:text-[120px] lg:text-[120px]"> </span>
//             <span className="text-[100px] sm:text-[120px] lg:text-[120px]">🎹</span>
//           </p>
//           <p>
//             <span className="leading-[110px] sm:leading-[130px] lg:leading-[130px] text-[110px] sm:text-[120px] lg:text-[120px]">AND</span>
//             <span className="leading-[110px] sm:leading-[130px] lg:leading-[130px] text-[#d9d9d9] text-[110px] sm:text-[120px] lg:text-[120px]">{` FREESTYLE `}</span>
//             <span className="leading-[110px] sm:leading-[130px] lg:leading-[130px] text-[110px] sm:text-[120px] lg:text-[120px]">🎤</span>
//             <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[90px] sm:leading-[120px] lg:leading-[120px] line-through text-[65px] whitespace-nowrap sm:text-[80px] lg:text-[80px]">
//               <br aria-hidden="true" />
//               JUST AS A HOBBY, ATLEAST
//             </span>
//           </p>
//         </div>

//         <div className="absolute h-[595px] sm:h-[855px] lg:h-[855px] left-[100px] sm:left-1/2 rounded-[10px] top-[860px] sm:top-[1000px] lg:top-[1000px] sm:translate-x-[-50%] w-[990px] sm:w-[1310px] lg:w-[1310px]" data-name="image 2">
//           <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
//             <Image alt="" className="absolute h-[114.91%] left-0 max-w-none top-[-1.26%] w-full" src={portfolioHeroes.sound} fill/>
//           </div>
//         </div>

//         <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] left-[120px] sm:left-[calc(50%-411px)] lg:left-[calc(50%-411px)] not-italic text-[#7f7f7f] text-[30px] sm:text-[26px] lg:text-[26px] text-nowrap top-[1478px] sm:top-[1878px] lg:top-[1878px] uppercase whitespace-pre">HOME SETUP. SOMETIMES workspace ⚡️ SOMETIMES jam cave</p>
        
//         <p className="absolute font-['Neue_Brucke:Regular',_sans-serif] leading-[50px] left-[370px] sm:left-[calc(50%+0.5px)] lg:left-[calc(50%+0.5px)] not-italic text-[#bfbfbf] text-[70px] sm:text-[48px] lg:text-[48px] text-center text-nowrap top-[1656px] sm:top-[1956px] lg:top-[1956px] tracking-[0.96px] sm:translate-x-[-50%] lg:translate-x-[-50%] uppercase whitespace-pre">background</p>
        
//         <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] left-[40px] sm:left-1/2 lg:left-1/2 not-italic text-[#7f7f7f] text-[38px] sm:text-[26px] lg:text-[26px] text-start top-[1730px] sm:top-[2030px] lg;top-[2030px] sm:translate-x-[-50%] lg:translate-x-[-50%] w-[1054px]">I started writing lyrics at 12 and released my first track at 15. While I'm not as deep into music as before, I still create for fun, and it continues to shape my video and motion work.</p>

//         <p className="absolute font-['Neue_Brucke:Regular',_sans-serif] leading-[50px] left-[570px] sm:left-1/2 lg:left-1/2 not-italic text-[#bfbfbf] text-[0px] text-center text-nowrap top-[2060px] sm:top-[2196px] lg:top-[2196px] tracking-[0.96px] translate-x-[-50%] uppercase whitespace-pre">
//           <span className="text-[70px] sm:text-[48px] lg:text-[48px]">{`GRAB YOUR EARPIECE `}</span>
//           <span className="text-[70px] sm:text-[48px] lg:text-[48px]">🎧</span>
//         </p>

//         <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] left-[40px] sm:left-1/2 lg:left-1/2 not-italic text-[#7f7f7f] text-[38px] sm:text-[26px] lg:text-[26px] text-start top-[2130px] sm:top-[2270px] lg:top-[2270px] sm:translate-x-[-50%] lg:translate-x-[-50%] w-[1054px]">
//           <span>{`Most of the tracks below were recorded 10-6 years ago, with the first two being the most recent I had in stock. Just released them here along with this portfolio, `}</span>
//           <span className="text-[#008cff]">consider them unofficial gems</span>.
//         </p>

//         <div className="absolute left-[30px] sm:left-1/2 lg:left-1/2 top-[2436px] sm:top-[2436px] lgtop-[2436px] w-[1100px] sm:w-[983px] lg:w-[983px] sm:translate-x-[-50%] lg:translate-x-[-50%]">
//           <SpotifyStyleAudioPlayer
//             title="Late Night Sessions"
//             artist="Big Phares"
//             albumArt={imgImage12}
//             audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
//             credits=""
//           />
//         </div>

//         <div className="absolute left-[30px] sm:left-1/2 lg:left-1/2 top-[2825px] sm:top-[2745px] lg:top-[2745px] w-[1100px] sm:w-[983px] lg:w-[983px] sm:translate-x-[-50%] lg:translate-x-[-50%]">
//           <SpotifyStyleAudioPlayer
//             title="Dreams & Ambitions"
//             artist="Big Phares"
//             albumArt={imgImage12}
//             audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
//             credits=""
//           />
//         </div>

//         <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] left-[50px] sm:left-[calc(50%-390px)] lg:left-[calc(50%-390px)] not-italic text-[#7f7f7f] text-[27px] sm:text-[20px] lg:text-[20px] text-nowrap top-[2710px] sm:top-[2691px] lg:top-[2691px] whitespace-pre">
//           <span className="text-[#008cff]">{`Produced & Mixed`}</span>
//           <span>{` by Big Phares. `}</span>
//           <span className="text-[#008cff]">{`Written & Performed `}</span>by Big Phares
//         </p>

//         <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] left-[50px] sm:left-[calc(50%-390px)] lg:left-[calc(50%-390px)] not-italic text-[#7f7f7f] text-[27px] sm:text-[20px] lg:text-[20px] text-nowrap top-[3100px] sm:top-[3000px] lg:top-[3000px] whitespace-pre">
//           <span className="text-[#008cff]">{`Produced & Mixed`}</span>
//           <span>{` by Big Phares. `}</span>
//           <span className="text-[#008cff]">{`Written & Performed `}</span> by Big Phares
//         </p>

//         <p className="absolute font-['Neue_Brucke:Regular',_sans-serif] leading-[50px] left-[130px] sm:left-[calc(50%+0.5px)] lg:left-[calc(50%+0.5px)] not-italic text-[#bfbfbf] text-[70px] sm:text-[48px] lg:text-[48px] text-center text-nowrap top-[3284px] sm:top-[3114px] lg:top-[3114px] tracking-[0.96px] sm:translate-x-[-50%] lg:translate-x-[-50%] uppercase whitespace-pre">old releases. 2015 - 2019</p>

//         <div className="absolute left-[24px] sm:left-1/2 lg:left-1/2 top-[3398px] sm:top-[3198px] lg:top-[3198px] w-[1119px] sm:w-[983px] lg:w-[983px] sm:translate-x-[-50%] lg:translate-x-[-50%]">
//           <SpotifyPlaylist />
//         </div>

//         <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] left-[50px] sm:left-1/2 lg:left-1/2 not-italic text-[#7f7f7f] text-[20px] sm:text-[20px] lg:text-[20px] text-center text-nowrap top-[4290px] sm:top-[3810px] md:top-[3910px] lg:top-[3910px] sm:translate-x-[-50%] lg:translate-x-[-50%] whitespace-pre">
//           <p className="mb-0 text-[30px] sm:text-[20px] md:text-[20px] lg:text-[20px]">
//             <span className="text-[#008cff] text-[35px] sm:text-[20px] md:text-[20px] lg:text-[20px]">{`Disclaimer: `}</span>Young Future was my old name
//           </p>
//           <p className="mb-0">&nbsp;</p>
//           <p className="mb-0 text-[30px] sm:text-[20px] md:text-[20px] lg:text-[20px]">
//             <span className="text-[#008cff]">Producers:</span>
//             <span>{` Lucky Junior, Big Phares(Young Future), H boy`}</span>
//           </p>
//           <p className="mb-0">&nbsp;</p>
//           <p className="mb-4 text-[30px] sm:text-[20px] md:text-[20px] lg:text-[20px]">
//             <span className="text-[#008cff]">{`Writers & Performers:`}</span>
//             <span>{` Big Phares, Lucky Junior, Magrecious,`}</span>
//           </p>
//           <p className='text-[30px] sm:text-[20px] md:text-[20px] lg:text-[20px] mb-4'>Steve Mamelody, Mchome, Man Z Classic,<br className='md:hidden lg:hidden' /> Marcoza, Wikey, Vanny Manase</p>
//         </div>
//             {/* <footer className="absolute w-full border-t border-[#262626] px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-5 md:py-6 top-[4300px]">
//               <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1440px] mx-auto gap-3 sm:gap-0 top-[4300px]">
//                 <Link href={'/'}>
//                 <button
//                   className="text-[#bfbfbf] hover:text-[#008cff] transition-colors p-2 rounded-md hover:bg-[#202020] cursor-pointer focus:outline-none top-[4300px] focus:ring-2 focus:ring-[#008cff]"
//                   aria-label="Scroll to top"
//                 >
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 26 22">
//                     <path d={svgPaths.p3672900} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
//                   </svg>
//                 </button>
//                 </Link>
                
//                 <span className="font-['IBM_Plex_Mono',_monospace] text-[#bfbfbf] text-sm sm:text-base md:text-lg top-[4300px]">
//                   © 2025. V 2.0
//                 </span>
//               </div>
//             </footer> */}

//         <div className="absolute bottom-[-4000px] contents left-1/2 translate-x-[-50%]">
//           <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] left-[calc(50%+499px)] not-italic text-[#bfbfbf] text-[20px] text-nowrap top-[4700px] sm:top-[4300px] md:top-[4300px] lg:top-[4300px] whitespace-pre">© 2025. V 2.0</p>
//           <div className="absolute h-0 left-1/2 top-[4270px] translate-x-[-50%] w-[1310px]">
//             <div className="absolute left-0 right-0 top-[-1px]">
//               <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1310 1">
//                 <line id="Line 3" stroke="var(--stroke-0, #262626)" x2="1310" y1="0.5" y2="0.5" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



import React, { useState, useRef, useEffect } from 'react';
import svgPaths from "../imports/svg-qfblbybskz";
import MainNavigation from './MainNavigation';
import { img1s, portfolioHeroes } from 'lib/imageHelper';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder album covers
const imgImage2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23666' font-size='14' font-family='monospace'%3EALBUM 1%3C/text%3E%3C/svg%3E";
const imgImage12 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23666' font-size='14' font-family='monospace'%3EALBUM 2%3C/text%3E%3C/svg%3E";
const imgImage11 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23666' font-size='14' font-family='monospace'%3EALBUM 3%3C/text%3E%3C/svg%3E";

interface AudioPlayerProps {
  title: string;
  artist: string;
  albumArt: string;
  audioUrl: string;
  credits: string;
}

function SpotifyStyleAudioPlayer({ title, artist, albumArt, audioUrl, credits }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(240);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const skipBackward = () => {
    const newTime = Math.max(currentTime - 15, 0);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const skipForward = () => {
    const newTime = Math.min(currentTime + 15, duration);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <audio
        ref={audioRef}
        src={audioUrl}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }}
      />

      <div className="h-[255px] sm:h-[225px] rounded-[15px] overflow-hidden relative group">
        <Image 
          alt={title} 
          className="object-cover" 
          src={img1s.sound}
          fill
        />
        
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <div 
            className="h-full bg-white/80 transition-all duration-100"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
          
          <button
            onClick={skipBackward}
            className="absolute left-2 top-[-8px] w-4 h-4 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"/>
            </svg>
          </button>
          
          <button
            onClick={skipForward}
            className="absolute right-2 top-[-8px] w-4 h-4 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"/>
            </svg>
          </button>
        </div>
        
        <button
          onClick={togglePlay}
          className="absolute bottom-3 right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg opacity-0 group-hover:opacity-100"
        >
          {isPlaying ? (
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 ml-0.5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        <div className="absolute bottom-3 left-3 text-white text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      {credits && (
        <p className="font-['IBM_Plex_Mono',_sans-serif] text-[#7f7f7f] text-base sm:text-lg md:text-[20px] mt-6 leading-normal">
          {credits}
        </p>
      )}
    </div>
  );
}

function SpotifyPlaylist() {
  const tracks = [
    { id: 1, title: "Midnight Vibes", artist: "Big Phares", duration: "3:24", isPlaying: false },
    { id: 2, title: "City Lights", artist: "Big Phares ft. Lucky Junior", duration: "4:12", isPlaying: false },
    { id: 3, title: "Dream State", artist: "Young Future", duration: "3:48", isPlaying: false },
    { id: 4, title: "Flow Like Water", artist: "Big Phares", duration: "3:56", isPlaying: false },
    { id: 5, title: "Underground", artist: "Big Phares ft. Magrecious", duration: "4:03", isPlaying: false },
    { id: 6, title: "Lost in Rhythm", artist: "Young Future", duration: "3:31", isPlaying: false },
  ];

  const [currentTrack, setCurrentTrack] = useState<number | null>(null);

  const openSpotify = () => {
    window.open('https://open.spotify.com/artist/YOUR_SPOTIFY_ARTIST_ID', '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-purple-700 to-[#111111]/90 rounded-[10px] p-4 sm:p-6 border border-[#2a2a2a]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#008cff] to-[#0066cc] rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="white" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-['IBM_Plex_Mono',_sans-serif] font-medium text-[#ffffff] text-lg sm:text-xl md:text-[24px] mb-1">
              Big Phares Collection
            </h3>
            <p className="font-['IBM_Plex_Mono',_sans-serif] text-[#7f7f7f] text-sm sm:text-base">
              6 songs • Personal Playlist
            </p>
          </div>
        </div>
        
        <Link href={'https://spotify.com'}>
          <button
            onClick={openSpotify}
            className="px-4 sm:px-6 py-2 bg-[#1db954] text-white rounded-full font-['IBM_Plex_Mono',_sans-serif] text-xs sm:text-sm hover:bg-[#1ed760] transition-colors cursor-pointer whitespace-nowrap"
          >
            Follow on Spotify
          </button>
        </Link>
      </div>
      
      <div className="space-y-2">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg transition-colors cursor-pointer group ${
              currentTrack === track.id ? 'bg-[#008cff]/10' : 'hover:bg-[#2a2a2a]'
            }`}
            onClick={() => setCurrentTrack(currentTrack === track.id ? null : track.id)}
          >
            <div className="w-6 text-center flex-shrink-0">
              {currentTrack === track.id ? (
                <div className="w-4 h-4 mx-auto">
                  <div className="flex gap-1 items-end justify-center h-full">
                    <div className="w-1 bg-[#008cff] music-bar-1" style={{ height: '60%' }}></div>
                    <div className="w-1 bg-[#008cff] music-bar-2" style={{ height: '100%' }}></div>
                    <div className="w-1 bg-[#008cff] music-bar-3" style={{ height: '80%' }}></div>
                  </div>
                </div>
              ) : (
                <span className="font-['IBM_Plex_Mono',_sans-serif] text-[#7f7f7f] text-sm group-hover:hidden">
                  {index + 1}
                </span>
              )}
              <svg className="w-4 h-4 hidden group-hover:block text-[#bfbfbf]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className={`font-['IBM_Plex_Mono',_sans-serif] font-medium text-sm sm:text-base mb-0.5 truncate ${
                currentTrack === track.id ? 'text-[#008cff]' : 'text-[#ffffff]'
              }`}>
                {track.title}
              </h4>
              <p className="font-['IBM_Plex_Mono',_sans-serif] text-[#7f7f7f] text-xs sm:text-sm truncate">
                {track.artist}
              </p>
            </div>
            
            <span className="font-['IBM_Plex_Mono',_sans-serif] text-[#7f7f7f] text-xs sm:text-sm flex-shrink-0">
              {track.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SoundPageProps {
  onBack: () => void;
}

export default function SoundPage({ onBack }: SoundPageProps) {
  return (
    <div className="bg-[#111111] min-h-screen w-full overflow-x-hidden" data-name="SOUND PAGE">
      <MainNavigation defaultActive="sound" onSectionChange={(section) => {
        if (section === 'design') {
          onBack();
        }
      }} />
      
      <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1440px] mx-auto">
        <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 text-center">
          <div className="font-['Neue_Brucke',_sans-serif] text-[#7f7f7f] space-y-1 sm:space-y-2">
            <p className="text-4xl sm:text-6xl md:text-7xl lg:text-[120px] leading-tight mb-0">WHEN I AM NOT</p>
            <p className="text-4xl sm:text-6xl md:text-7xl lg:text-[120px] leading-tight mb-0">DESIGNING,</p>
            <p className="text-4xl sm:text-6xl md:text-7xl lg:text-[120px] leading-tight mb-0">I LOVE TO MAKE</p>
            <p className="text-4xl sm:text-6xl md:text-7xl lg:text-[120px] leading-tight mb-0">
              <span className="text-[#d9d9d9]">BEATS</span>
              <span> 🎹</span>
            </p>
            <p className="text-4xl sm:text-6xl md:text-7xl lg:text-[120px] leading-tight">
              <span>AND</span>
              <span className="text-[#d9d9d9]"> FREESTYLE </span>
              <span>🎤</span>
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[80px] line-through leading-tight">
              JUST AS A HOBBY, ATLEAST
            </p>
          </div>
        </div>

        <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[855px] rounded-[10px] overflow-hidden mb-8 sm:mb-12 max-w-[1310px] mx-auto">
          <Image alt="Studio setup" className="object-cover" src={portfolioHeroes.sound} fill priority />
        </div>

        <p className="font-['IBM_Plex_Mono',_sans-serif] text-[#7f7f7f] text-sm sm:text-base md:text-lg lg:text-[26px] text-center uppercase mb-8 sm:mb-12">
          HOME SETUP. SOMETIMES workspace ⚡️ SOMETIMES jam cave
        </p>

        <div className="max-w-[1054px] mx-auto mb-12 sm:mb-16">
          <h2 className="font-['Neue_Brucke',_sans-serif] text-[#bfbfbf] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-center uppercase tracking-wider mb-6 sm:mb-8">
            background
          </h2>
          <p className="font-['IBM_Plex_Mono',_sans-serif] text-[#7f7f7f] text-base sm:text-lg md:text-xl lg:text-[26px] leading-normal text-center">
            I started writing lyrics at 12 and released my first track at 15. While I'm not as deep into music as before, I still create for fun, and it continues to shape my video and motion work.
          </p>
        </div>

        <div className="max-w-[1054px] mx-auto mb-12 sm:mb-16">
          <h2 className="font-['Neue_Brucke',_sans-serif] text-[#bfbfbf] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-center uppercase tracking-wider mb-6 sm:mb-8">
            GRAB YOUR EARPIECE 🎧
          </h2>
          <p className="font-['IBM_Plex_Mono',_sans-serif] text-[#7f7f7f] text-base sm:text-lg md:text-xl lg:text-[26px] leading-normal text-center">
            <span>Most of the tracks below were recorded 10-6 years ago, with the first two being the most recent I had in stock. Just released them here along with this portfolio, </span>
            <span className="text-[#008cff]">consider them unofficial gems</span>.
          </p>
        </div>

        <div className="max-w-[983px] mx-auto space-y-8 sm:space-y-12 mb-12 sm:mb-16">
          <div>
            <SpotifyStyleAudioPlayer
              title="Late Night Sessions"
              artist="Big Phares"
              albumArt={imgImage12}
              audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              credits=""
            />
            <p className="font-['IBM_Plex_Mono',_sans-serif] text-[#7f7f7f] text-sm sm:text-base md:text-lg lg:text-[20px] mt-4">
              <span className="text-[#008cff]">Produced & Mixed</span>
              <span> by Big Phares. </span>
              <span className="text-[#008cff]">Written & Performed </span>
              <span>by Big Phares</span>
            </p>
          </div>

          <div>
            <SpotifyStyleAudioPlayer
              title="Dreams & Ambitions"
              artist="Big Phares"
              albumArt={imgImage12}
              audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
              credits=""
            />
            <p className="font-['IBM_Plex_Mono',_sans-serif] text-[#7f7f7f] text-sm sm:text-base md:text-lg lg:text-[20px] mt-4">
              <span className="text-[#008cff]">Produced & Mixed</span>
              <span> by Big Phares. </span>
              <span className="text-[#008cff]">Written & Performed </span>
              <span>by Big Phares</span>
            </p>
          </div>
        </div>

        <div className="max-w-[983px] mx-auto mb-12 sm:mb-16">
          <h2 className="font-['Neue_Brucke',_sans-serif] text-[#bfbfbf] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-center uppercase tracking-wider mb-8 sm:mb-12">
            old releases. 2015 - 2019
          </h2>
          <SpotifyPlaylist />
        </div>

        <div className="max-w-[1054px] mx-auto mb-12 sm:mb-16 text-center">
          <div className="font-['IBM_Plex_Mono',_sans-serif] text-[#7f7f7f] text-sm sm:text-base md:text-lg lg:text-[20px] leading-normal space-y-2">
            <p className="mb-0">
              <span className="text-[#008cff]">Disclaimer: </span>
              <span>Young Future was my old name</span>
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              <span className="text-[#008cff]">Producers:</span>
              <span> Lucky Junior, Big Phares(Young Future), H boy</span>
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              <span className="text-[#008cff]">Writers & Performers:</span>
              <span> Big Phares, Lucky Junior, Magrecious,</span>
            </p>
            <p>Steve Mamelody, Mchome, Man Z Classic, Marcoza, Wikey, Vanny Manase</p>
          </div>
        </div>

        <footer className="border-t border-[#262626] py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href={'/'}>
              <button
                className="text-[#bfbfbf] hover:text-[#008cff] transition-colors p-2 rounded-md hover:bg-[#202020] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#008cff]"
                aria-label="Go to home"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 26 22">
                  <path d={svgPaths.p3672900} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </Link>
            
            <span className="font-['IBM_Plex_Mono',_monospace] text-[#bfbfbf] text-sm sm:text-base md:text-lg">
              © 2025. V 2.0
            </span>
          </div>
        </footer>
      </main>

      <style jsx>{`
        @keyframes music-bar {
          0%, 100% { height: 60%; }
          50% { height: 100%; }
        }
        
        .music-bar-1 {
          animation: music-bar 0.8s ease-in-out infinite;
        }
        
        .music-bar-2 {
          animation: music-bar 0.8s ease-in-out 0.2s infinite;
        }
        
        .music-bar-3 {
          animation: music-bar 0.8s ease-in-out 0.4s infinite;
        }
      `}</style>
    </div>
  );
}