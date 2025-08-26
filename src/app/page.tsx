'use client'

import { useEffect, useState, useRef } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<any>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Try to start music immediately when page loads
  useEffect(() => {
    if (!isLoading && audioRef.current) {
      // Try to play immediately
      audioRef.current.audio.current.play()
        .then(() => {
          setIsPlaying(true)
          setHasInteracted(true)
          console.log('🎵 Audio started immediately!')
        })
        .catch((e: any) => {
          console.log('❌ Auto-play blocked, waiting for user interaction')
        })
    }
  }, [isLoading])

  // Handle user interaction to enable audio
  const handleUserInteraction = () => {
    if (!hasInteracted && audioRef.current) {
      setHasInteracted(true)
      // Try to play the audio
      audioRef.current.audio.current.play()
        .then(() => {
          setIsPlaying(true)
          console.log('🎵 Audio started playing automatically!')
        })
        .catch((e: any) => {
          console.log('❌ Auto-play prevented:', e)
        })
    }
  }

  // Add click listener to the entire page
  useEffect(() => {
    if (!isLoading) {
      const handleClick = () => handleUserInteraction()
      document.addEventListener('click', handleClick, { once: true })
      return () => document.removeEventListener('click', handleClick)
    }
  }, [isLoading, hasInteracted])

  // Handle play/pause button click
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.audio.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.audio.current.play()
        setIsPlaying(true)
      }
    }
  }

  if (isLoading) {
    return (
      <main style={{
        fontFamily: 'Array',
        '--theme-color': '#ffffff',
        '--icon-color': '#F97316',
        '--primary-text-color': '#FFFFFF',
        '--secondary-text-color': '#A8A29E',
        '--background-color': '#090909',
        '--box-color': '#00000000',
        '--box-width': '669px',
        '--box-spacing': '35px',
        '--box-spacing-reverse': '-35px',
        '--box-blur': '0px',
        '--box-radius': '10px',
        '--box-shadow-color': '#fffafa50',
        '--border-width': '3px',
        '--border-color': '#78726D20',
        '--border-style': 'Double',
        '--page-enter-animation': 'None',
        '--avatar-radius': '50px',
        '--reveal-screen-blur': '16px'
      } as React.CSSProperties}>
        <button className="reveal-screen-blur fixed z-50 flex size-full select-none items-center justify-center bg-black/50" type="button">
          <div className="primary-text-color page-enter-animation whitespace-pre-wrap break-all px-4 text-lg">
            <em>
              <div className="inline text-theme drop-shadow-theme">  </div>
            </em>
            <img src="https://cdn.discordapp.com/emojis/885283538310676500.webp?animated=true" alt="Discord Emoji" className="h-8 inline" draggable="false" />
          </div>
        </button>
      </main>
    )
  }

  return (
    <main 
      onClick={handleUserInteraction}
      style={{
        fontFamily: 'Array',
        '--theme-color': '#ffffff',
        '--icon-color': '#F97316',
        '--primary-text-color': '#FFFFFF',
        '--secondary-text-color': '#A8A29E',
        '--background-color': '#090909',
        '--box-color': '#00000000',
        '--box-width': '669px',
        '--box-spacing': '35px',
        '--box-spacing-reverse': '-35px',
        '--box-blur': '0px',
        '--box-radius': '10px',
        '--box-shadow-color': '#fffafa50',
        '--border-width': '3px',
        '--border-color': '#78726D20',
        '--border-style': 'Double',
        '--page-enter-animation': 'None',
        '--avatar-radius': '50px',
        '--reveal-screen-blur': '16px'
      } as React.CSSProperties}>
      <video 
        loop 
        muted 
        playsInline 
        controlsList="nofullscreen" 
        className="pointer-events-none fixed size-full" 
        disablePictureInPicture 
        style={{opacity: '58%', filter: 'blur(0px)', transform: 'scale(1.05)'}}
        src="https://r2.fakecrime.bio/backgrounds/3f4c573a-a454-40f7-bdfd-c4d708b898ba.mp4" 
        preload="none"
        autoPlay
      />
      
      {/* Prominent Auto-play notification */}
      {!hasInteracted && !isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 rounded-2xl border-2 border-white/20 shadow-2xl animate-pulse">
            <div className="flex items-center gap-4 text-center">
              <div className="text-4xl">🎵</div>
              <div>
                <div className="text-xl font-bold mb-2">MUSIC READY!</div>
                <div className="text-lg">Click anywhere to start the music!</div>
                <div className="text-sm opacity-80 mt-2">Music will start immediately</div>
              </div>
              <div className="text-4xl">🎵</div>
            </div>
          </div>
        </div>
      )}
      
      <div className="relative size-full">
        <div className="table-cell px-4 py-20 align-middle">
          <div className="box-width page-enter-animation relative mx-auto">
            <div className="bg-style box-padding-x box-padding-b space-y-8">
              <div className="box-margin-x-reverse">
                <div className="space-y-8 box-padding-t box-padding-x false">
                  <div className="flex items-center justify-center flex-col gap-8">
                    <div className="flex justify-center items-center z-10 flex-col gap-2">
                      <h1 className="primary-text-color break-all text-2xl font-semibold" style={{backgroundImage: 'url(https://r2.fakecrime.bio/assets/sparkles/white.gif)', width: 'fit-content'}}>
                        TeLLiiX
                      </h1>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="line-clamp-1 select-none rounded-full border border-theme px-3 py-1 text-sm text-theme">💜</span>
                    <span className="line-clamp-1 select-none rounded-full border border-theme px-3 py-1 text-sm text-theme">WELCOME</span>
                    <span className="line-clamp-1 select-none rounded-full border border-theme px-3 py-1 text-sm text-theme">TO</span>
                    <span className="line-clamp-1 select-none rounded-full border border-theme px-3 py-1 text-sm text-theme">MY</span>
                    <span className="line-clamp-1 select-none rounded-full border border-theme px-3 py-1 text-sm text-theme">PAGE</span>
                    <span className="line-clamp-1 select-none rounded-full border border-theme px-3 py-1 text-sm text-theme">🖤</span>
                  </div>
                  
                  <div className="secondary-text-color whitespace-pre-wrap leading-tight text-center" style={{wordBreak: 'break-word'}}>
                    <div>(0.0)</div>
                    <div>&gt;^&lt;</div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="bg-theme inline-block box-radius drop-shadow-theme px-2 py-1 text-black font-semibold">
                      Compiled &gt; Interpreted
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {/* 20 Social Icons - First Row */}
                    <a target="_blank" draggable="false" href="https://google.com">
                      <div className="group relative flex items-center justify-center">
                        <div className="flex items-center justify-center size-8">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-[#0096FA] drop-shadow-[0_0_3.5px_#0096FA75]">
                            <path d="M4.935 0A4.924 4.924 0 0 0 0 4.935v14.13A4.924 4.924 0 0 0 4.935 24h14.13A4.924 4.924 0 0 0 24 19.065V4.935A4.924 4.924 0 0 0 19.065 0zm7.81 4.547c2.181 0 4.058.676 5.399 1.847a6.118 6.118 0 0 1 2.116 4.66c.005 1.854-.88 3.476-2.257 4.563-1.375 1.092-3.225 1.697-5.258 1.697-2.314 0-4.46-.842-4.46-.842v2.718c.397.116 1.048.365.635.779H5.79c-.41-.41.19-.65.644-.779V7.666c-1.053.81-1.593 1.51-1.868 2.031.32 1.02-.284.969-.284.969l-1.09-1.73s3.868-4.39 9.553-4.39zm-.19.971c-1.423-.003-3.184.473-4.27 1.244v8.646c.988.487 2.484.832 4.26.832h.01c1.596 0 2.98-.593 3.93-1.533.952-.948 1.486-2.183 1.492-3.683-.005-1.54-.504-2.864-1.42-3.86-.918-.992-2.274-1.645-4.002-1.646Z"></path>
                          </svg>
                        </div>
                        <div className="box-radius pointer-events-none absolute -top-11 z-10 flex translate-y-1 scale-90 items-center gap-2 border border-stone-400/10 bg-black px-3 py-1.5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          <span className="select-none truncate text-sm font-normal">pixiv</span>
                          <div className="size-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" className="drop-shadow-current fill-current">
                              <path d="M16.6 17a1 1 0 0 1-.6-1v-2.5H3a1 1 0 0 1-1-1v-1q0-1 1-1h13V8a1 1 0 0 1 1.7-.7l4 4q.6.7 0 1.4l-4 4a1 1 0 0 1-1 .2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    
                    {/* Add 19 more icons here - simplified for space */}
                    {Array.from({length: 19}, (_, i) => (
                      <a key={i} target="_blank" draggable="false" href="https://google.com">
                        <div className="group relative flex items-center justify-center">
                          <div className="flex items-center justify-center size-8">
                            <div className="w-6 h-6 bg-white rounded drop-shadow-[0_0_3.5px_#FFFFFF75]"></div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  
                  {/* Profile Card */}
                  <div className="bg-style-simple p-4 rounded-lg">
                    <div className="flex items-center gap-4">
                      <img alt="Avatar" draggable="false" loading="lazy" width="50" height="50" decoding="async" className="border-color avatar-radius border-width aspect-square size-12" style={{color: 'transparent'}} src="https://r2.fakecrime.bio/avatars/default.webp"/>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">TeLLiiX</span>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="text-gray-400 text-sm">and it shall be bestowed upon you, the star which you h...</div>
                      </div>
                      <button className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <span>💜</span>
                        <span>MITA</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* HackTheBox Card */}
                  <div className="bg-style-simple p-4 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">HackTheBox</span>
                          <span className="text-green-500">✓</span>
                        </div>
                        <div className="text-gray-400 text-sm">• 31937 Online • 323478 Members</div>
                      </div>
                      <button className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* TeLLiiX Spotify Playlist */}
      <div className="w-full bg-style-simple overflow-hidden">
        <iframe 
          className="w-full" 
          src="https://open.spotify.com/embed/playlist/1ToOv8aJGcnR51fnsGv8VO?utm_source=generator" 
          height="352" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share"
          title="TeLLiiX Playlist"
        ></iframe>
      </div>
      
      {/* SoundCloud Player */}
      <iframe className="w-full bg-style-simple" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1481594152&amp;visual=true" height="150" allow="autoplay"></iframe>
      
      {/* YouTube Video */}
      <iframe className="aspect-video w-full bg-style-simple" src="https://www.youtube.com/embed/J7imQq-4pgA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share" allowFullScreen></iframe>
      
      {/* GIF Embed */}
      <a target="_blank" draggable="false" className="block" href="https://r2.fakecrime.bio/pictures/608ff1dd-adb9-444c-87e5-0a7a73a0d9af.gif">
        <img alt="Embed" draggable="false" loading="lazy" width="1000" height="500" decoding="async" className="bg-style-simple w-full" style={{color: 'transparent'}} src="https://r2.fakecrime.bio/pictures/608ff1dd-adb9-444c-87e5-0a7a73a0d9af.gif"/>
      </a>
      
      {/* Working Audio Player */}
      <div className="flex items-center justify-center gap-5 p-3 bg-style-simple">
        <img alt="Cover" draggable="false" loading="lazy" width="78" height="78" decoding="async" className="border-color avatar-radius border-width aspect-square size-16 sm:size-20" style={{color: 'transparent'}} src="https://r2.fakecrime.bio/tracks/covers/e4295c13-1fe4-4724-962f-4a209957c850.webp"/>
        <div className="flex-1">
          <AudioPlayer
            ref={audioRef}
            src="https://r2.fakecrime.bio/tracks/audios/8f77b9b7-0af4-4907-b4ce-b628ae1acafc.mp4"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            showJumpControls={false}
            header={
              <div className="text-white text-sm font-medium">
                VØJ x Asketa x Daedra - !Sorry
                {isPlaying && <span className="ml-2 text-green-400 animate-pulse">▶️</span>}
              </div>
            }
            style={{
              backgroundColor: 'transparent',
              color: 'white',
            }}
          />
        </div>
      </div>
    </main>
  )
}
