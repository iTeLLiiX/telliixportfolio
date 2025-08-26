'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const links = [
    { title: 'pixiv', platform: 'Pixiv', color: '#0096FA' },
    { title: 'litecoin', platform: 'Litecoin', color: '#FFFFFF' },
    { title: 'leagueoflegends', platform: 'League of Legends', color: '#FFFFFF' },
    { title: 'konect', platform: 'Konect', color: '#FFFF3C' },
    { title: 'gamesense', platform: 'GameSense', color: '#95B806' },
    { title: 'flipd', platform: 'Flipd', color: '#FFFFFF' },
    { title: 'fatality', platform: 'Fatality', color: '#EB055A' },
    { title: 'exodus', platform: 'Exodus', color: '#0B46F9' },
    { title: 'evolve', platform: 'Ev0lve', color: '#FFFFFF' },
    { title: 'esportal', platform: 'Esportal', color: '#FFFFFF' },
    { title: 'epal', platform: 'E-Pal', color: '#7B48FF' },
    { title: 'deezer', platform: 'Deezer', color: '#A53EFF' },
    { title: 'csstats', platform: 'CSStats', color: '#3872FC' },
    { title: 'brawlstars', platform: 'Brawl Stars', color: '#FEBE20' },
    { title: 'billgang', platform: 'Billgang', color: '#FF3F19' },
    { title: 'onlyfans', platform: 'Onlyfans', color: '#00AFF0' },
    { title: 'nexusmods', platform: 'Nexus Mods', color: '#FFFFFF' },
    { title: 'iniuria', platform: 'Iniuria', color: '#FF00FF' },
    { title: 'namemc', platform: 'NameMC', color: '#FFFFFF' },
    { title: 'melatonin', platform: 'Melatonin', color: '#9E97DD' },
    { title: 'moneybot', platform: 'MoneyBot', color: '#FFFFFF' },
    { title: 'neverlose', platform: 'Neverlose', color: '#0095B9' },
  ]

  const tags = ['💜', 'WELCOME', 'TO', 'MY', 'PAGE', '💜']

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
              <div className="inline text-theme drop-shadow-theme"> </div>
            </em>
            <img src="https://cdn.discordapp.com/emojis/885283538310676500.webp?animated=true" alt="Discord Emoji" className="h-8 inline" draggable="false" />
          </div>
        </button>
      </main>
    )
  }

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
      <video 
        loop 
        muted 
        playsInline 
        controlsList="nofullscreen" 
        className="pointer-events-none fixed size-full" 
        disablePictureInPicture 
        style={{ opacity: '58%', filter: 'blur(0px)', transform: 'scale(1.05)' }}
        src="https://r2.fakecrime.bio/backgrounds/3f4c573a-a454-40f7-bdfd-c4d708b898ba.mp4" 
        preload="none"
        autoPlay
      />
      
      <div className="hidden relative size-full">
        <div className="table-cell px-4 py-20 align-middle">
          <div className="box-width page-enter-animation relative mx-auto">
            <div className="bg-style box-padding-x box-padding-b space-y-8">
              <div className="box-margin-x-reverse">
                <div className="space-y-8 box-padding-t box-padding-x false">
                  <div className="flex items-center justify-center flex-col gap-8">
                    <div className="flex justify-center items-center z-10 flex-col gap-2">
                      <h1 
                        className="primary-text-color break-all text-2xl font-semibold" 
                        style={{ 
                          backgroundImage: 'url(https://r2.fakecrime.bio/assets/sparkles/white.gif)',
                          width: 'fit-content'
                        }}
                      >
                        TeLLiiX
                      </h1>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tags.map((tag, index) => (
                      <span key={index} className="line-clamp-1 select-none rounded-full border border-theme px-3 py-1 text-sm text-theme">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="secondary-text-color whitespace-pre-wrap leading-tight" style={{ wordBreak: 'break-word' }}>
                    <div className="text-center">
                      /\_/\     
                      ( o.o )    
                      &gt; ^ &lt;    
                      <div className="bg-theme inline-block box-radius drop-shadow-theme px-2">
                        Compiled &gt; Interpreted
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {links.map((link, index) => (
                      <Link key={index} href="https://google.com" target="_blank" draggable={false}>
                        <div className="group relative flex items-center justify-center">
                          <div className="flex items-center justify-center size-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" 
                                 className={`fill-[${link.color}] drop-shadow-[0_0_3.5px_${link.color}75]`}>
                              {link.title === 'pixiv' && (
                                <path d="M4.935 0A4.924 4.924 0 0 0 0 4.935v14.13A4.924 4.924 0 0 0 4.935 24h14.13A4.924 4.924 0 0 0 24 19.065V4.935A4.924 4.924 0 0 0 19.065 0zm7.81 4.547c2.181 0 4.058.676 5.399 1.847a6.118 6.118 0 0 1 2.116 4.66c.005 1.854-.88 3.476-2.257 4.563-1.375 1.092-3.225 1.697-5.258 1.697-2.314 0-4.46-.842-4.46-.842v2.718c.397.116 1.048.365.635.779H5.79c-.41-.41.19-.65.644-.779V7.666c-1.053.81-1.593 1.51-1.868 2.031.32 1.02-.284.969-.284.969l-1.09-1.73s3.868-4.39 9.553-4.39zm-.19.971c-1.423-.003-3.184.473-4.27 1.244v8.646c.988.487 2.484.832 4.26.832h.01c1.596 0 2.98-.593 3.93-1.533.952-.948 1.486-2.183 1.492-3.683-.005-1.54-.504-2.864-1.42-3.86-.918-.992-2.274-1.645-4.002-1.646Z" />
                              )}
                              {link.title === 'litecoin' && (
                                <path d="m94.72 184.15 12.78-60.84 64.57-44.27 7.57-36.16-64.59 44.46L133.4 0H83.79L57.14 127.19l-27.16 18.7-6.31 34.89 25.97-17.8-13.36 63.76H195.2l8.83-42.59z" />
                              )}
                              {link.title === 'leagueoflegends' && (
                                <path d="m1.91 0 1.21 2.47v19.06L1.92 24h14.72l1.34-4.68H8.33V0ZM12 1.52q-1.37 0-2.65.3v1.75A10 10 0 0 1 12 3.2a9.44 9.44 0 0 1 9.54 9.35 9.2 9.2 0 0 1-2.3 6.08l-.28.96-.6 2.11a11 11 0 0 0 4.9-9.12A11.2 11.2 0 0 0 12 1.52m0 2.67a9 9 0 0 0-2.65.41v13.72h8.82a8.3 8.3 0 0 0 2.36-5.77A8.44 8.44 0 0 0 12 4.19M2.1 7.3a11 11 0 0 0-1.35 5.27c0 1.9.5 3.7 1.36 5.26z" />
                              )}
                              {/* Add more SVG paths for other icons */}
                              {!['pixiv', 'litecoin', 'leagueoflegends'].includes(link.title) && (
                                <rect width="24" height="24" rx="4" />
                              )}
                            </svg>
                          </div>
                          <div className="box-radius pointer-events-none absolute -top-11 z-10 flex translate-y-1 scale-90 items-center gap-2 border border-stone-400/10 bg-black px-3 py-1.5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                            <span className="select-none truncate text-sm font-normal">{link.title}</span>
                            <div className="size-4">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" className="drop-shadow-current fill-current">
                                <path d="M16.6 17a1 1 0 0 1-.6-1v-2.5H3a1 1 0 0 1-1-1v-1q0-1 1-1h13V8a1 1 0 0 1 1.7-.7l4 4q.6.7 0 1.4l-4 4a1 1 0 0 1-1 .2" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Loading placeholders */}
      <div className="flex items-center gap-5 p-3 bg-style-simple">
        <div className="relative aspect-square h-16 animate-pulse sm:h-20">
          <div className="border-color avatar-radius border-width aspect-square size-full h-16 bg-white/10 sm:h-20"></div>
          <span className="absolute bottom-0 right-0 z-10 -m-1 size-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24" className="relative inline-flex size-6 rounded-full border-2 border-stone-800 bg-stone-800">
              <image xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjU2NmViYzViNCwgMjAyMi8wNS8wOS0wODoyNTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgxNTdBNTE4MEY2MTExRUU4ODZCRUEyQjgwRjRFRkJBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgxNTdBNTE5MEY2MTExRUU4ODZCRUEyQjgwRjRFRkJBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODE1N0E1MTYwRjYxMTFFRTg4NkJFQTJCODBGNEVGQkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODE1N0E1MTcwRjYxMTFFRTg4NkJFQTJCODBGNEVGQkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6zgI8PAAAQXElEQVR42uxd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" />
            </svg>
          </span>
        </div>
        <div className="flex w-full animate-pulse items-center justify-between gap-4">
          <div className="w-full">
            <div className="flex flex-wrap items-center sm:gap-1.5">
              <p className="primary-text-color line-clamp-1 break-all font-medium leading-tight sm:text-lg">Loading</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-5 p-3 bg-style-simple">
        <div>
          <div className="border-color avatar-radius border-width aspect-square size-16 animate-pulse bg-white/10 sm:size-20"></div>
        </div>
        <div className="flex w-full animate-pulse items-center justify-between gap-4">
          <div className="w-full">
            <p className="primary-text-color line-clamp-1 break-all font-medium leading-tight sm:text-lg">Loading</p>
            <div className="flex w-full flex-col text-xs leading-tight sm:flex-row sm:gap-4 sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="aspect-square size-2 rounded-full bg-green-400"></div>
                <p className="secondary-text-color">0 Online</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="aspect-square size-2 rounded-full bg-stone-400"></div>
                <p className="secondary-text-color">0 Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-style-simple overflow-hidden">
        <iframe 
          className="w-full" 
          src="https://open.spotify.com/embed/track/4qVkWT6l07ZwUUNxWoZZbD" 
          height="80" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
      
      <iframe 
        className="w-full bg-style-simple" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1481594152&amp;visual=true" 
        height="150" 
        allow="autoplay"
      />
      
      <iframe 
        className="aspect-video w-full bg-style-simple" 
        src="https://www.youtube.com/embed/J7imQq-4pgA" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share" 
        allowFullScreen
      />
      
      <Link href="https://r2.fakecrime.bio/pictures/608ff1dd-adb9-444c-87e5-0a7a73a0d9af.gif" target="_blank" draggable={false} className="block">
        <img 
          alt="Embed" 
          draggable="false" 
          loading="lazy" 
          width="1000" 
          height="500" 
          decoding="async" 
          className="bg-style-simple w-full" 
          style={{ color: 'transparent' }} 
          src="https://r2.fakecrime.bio/pictures/608ff1dd-adb9-444c-87e5-0a7a73a0d9af.gif"
        />
      </Link>
      
      <div className="flex items-center justify-center gap-5 p-3 bg-style-simple">
        <img 
          alt="Cover" 
          draggable="false" 
          loading="lazy" 
          width="78" 
          height="78" 
          decoding="async" 
          className="border-color avatar-radius border-width aspect-square size-16 sm:size-20" 
          style={{ color: 'transparent' }} 
          src="https://r2.fakecrime.bio/tracks/covers/e4295c13-1fe4-4724-962f-4a209957c850.webp"
        />
        <div role="group" tabIndex={0} aria-label="Audio player" className="rhap_container rhap_loop--on rhap_play-status--paused">
          <audio src="https://r2.fakecrime.bio/tracks/audios/8f77b9b7-0af4-4907-b4ce-b628ae1acafc.mp4" loop preload="none" />
          <div className="rhap_header">
            <div className="line-clamp-1 break-all">VØJ x Asketa x Daedra - !Sorry</div>
          </div>
          <div className="rhap_main rhap_stacked">
            <div className="rhap_progress-section">
              <div id="rhap_current-time" className="rhap_time rhap_current-time">00:00</div>
              <div className="rhap_progress-container" aria-label="Audio progress control" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} tabIndex={0}>
                <div className="rhap_progress-bar rhap_progress-bar-show-download">
                  <div className="rhap_progress-indicator" style={{ left: '0%' }}></div>
                  <div className="rhap_progress-filled" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div className="rhap_time rhap_total-time">00:00</div>
            </div>
            <div className="rhap_controls-section">
              <div className="rhap_additional-controls"></div>
              <div className="rhap_main-controls">
                <button aria-label="Play" className="rhap_button-clear rhap_main-controls-button rhap_play-pause-button" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="size-5 fill-theme drop-shadow-theme duration-300 hover:scale-105 hover:brightness-105">
                    <path d="M21.4 9.4a3 3 0 0 1 0 5.2l-12.8 7C6.6 22.7 4 21.3 4 19V5c0-2.3 2.5-3.7 4.6-2.6z" />
                  </svg>
                </button>
              </div>
              <div className="rhap_volume-controls">
                <div className="rhap_volume-container">
                  <button aria-label="Mute" type="button" className="rhap_button-clear rhap_volume-button"></button>
                  <div role="progressbar" aria-label="Volume control" aria-valuemin={0} aria-valuemax={100} aria-valuenow={10} tabIndex={0} className="rhap_volume-bar-area">
                    <div className="rhap_volume-bar">
                      <div className="rhap_volume-indicator" style={{ left: '10.00%', transitionDuration: '0s' }}></div>
                      <div className="rhap_volume-filled" style={{ width: '10.00%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
