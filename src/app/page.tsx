'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

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
        style={{opacity: '58%', filter: 'blur(0px)', transform: 'scale(1.05)'}}
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
                    <span className="line-clamp-1 select-none rounded-full border border-theme px-3 py-1 text-sm text-theme">💜</span>
                  </div>
                  
                  <div className="secondary-text-color whitespace-pre-wrap leading-tight" style={{wordBreak: 'break-word'}}>
                    <div className="text-center">
                      /\_/\     
                      ( o.o )    
                      &gt; ^ &lt;    
                      <div className="bg-theme inline-block box-radius drop-shadow-theme px-2">Compiled &gt; Interpreted</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4">
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
                    
                    <a target="_blank" draggable="false" href="https://google.com">
                      <div className="group relative flex items-center justify-center">
                        <div className="flex items-center justify-center size-8">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226.78 226.78" width="24" height="24" className="fill-white drop-shadow-[0_0_3.5px_#FFFFFF75]">
                            <path d="m94.72 184.15 12.78-60.84 64.57-44.27 7.57-36.16-64.59 44.46L133.4 0H83.79L57.14 127.19l-27.16 18.7-6.31 34.89 25.97-17.8-13.36 63.76H195.2l8.83-42.59z"></path>
                          </svg>
                        </div>
                        <div className="box-radius pointer-events-none absolute -top-11 z-10 flex translate-y-1 scale-90 items-center gap-2 border border-stone-400/10 bg-black px-3 py-1.5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          <span className="select-none truncate text-sm font-normal">litecoin</span>
                          <div className="size-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" className="drop-shadow-current fill-current">
                              <path d="M16.6 17a1 1 0 0 1-.6-1v-2.5H3a1 1 0 0 1-1-1v-1q0-1 1-1h13V8a1 1 0 0 1 1.7-.7l4 4q.6.7 0 1.4l-4 4a1 1 0 0 1-1 .2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    
                    <a target="_blank" draggable="false" href="https://google.com">
                      <div className="group relative flex items-center justify-center">
                        <div className="flex items-center justify-center size-8">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-white drop-shadow-[0_0_3.5px_#FFFFFF75]">
                            <path d="m1.91 0 1.21 2.47v19.06L1.92 24h14.72l1.34-4.68H8.33V0ZM12 1.52q-1.37 0-2.65.3v1.75A10 10 0 0 1 12 3.2a9.44 9.44 0 0 1 9.54 9.35 9.2 9.2 0 0 1-2.3 6.08l-.28.96-.6 2.11a11 11 0 0 0 4.9-9.12A11.2 11.2 0 0 0 12 1.52m0 2.67a9 9 0 0 0-2.65.41v13.72h8.82a8.3 8.3 0 0 0 2.36-5.77A8.44 8.44 0 0 0 12 4.19M2.1 7.3a11 11 0 0 0-1.35 5.27c0 1.9.5 3.7 1.36 5.26z"></path>
                          </svg>
                        </div>
                        <div className="box-radius pointer-events-none absolute -top-11 z-10 flex translate-y-1 scale-90 items-center gap-2 border border-stone-400/10 bg-black px-3 py-1.5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          <span className="select-none truncate text-sm font-normal">leagueoflegends</span>
                          <div className="size-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" className="drop-shadow-current fill-current">
                              <path d="M16.6 17a1 1 0 0 1-.6-1v-2.5H3a1 1 0 0 1-1-1v-1q0-1 1-1h13V8a1 1 0 0 1 1.7-.7l4 4q.6.7 0 1.4l-4 4a1 1 0 0 1-1 .2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    
                    <a target="_blank" draggable="false" href="https://google.com">
                      <div className="group relative flex items-center justify-center">
                        <div className="flex items-center justify-center size-8">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="24" height="24" className="fill-[#FFFF3C] drop-shadow-[0_0_3.5px_#FFFF3C75]">
                            <path d="m136 219-29.9-19.5V227h-5l-64.5-.1a11 11 0 0 1-6.8-2.8q-11-10.6-21.5-21.3c-3-3-4.4-6-4.4-10.4.2-43.2.4-86.4-.2-129.5 0-8.6 4.1-13.4 9.3-18.5q7.4-7 14.4-14.3c3-3 5.5-5.4 10.5-5.3q33.6.4 67.9.2v27.6l25.6-16.7q6.5-4.5 13.1-8.8c1.7-1 3.8-2 5.7-2 20.8-.2 41.6.3 62.5-.3 6.2-.2 9.7 2.7 13.3 6.4l19 19.3c1.3 1.5 2.8 3.6 2.9 5.5q.5 13.5 0 27c-.1 1.7-2 3.8-3.7 4.9l-41.8 26-19.4 12.6 29.2 18.5q17 10.9 33.8 22.1c1 .7 1.9 2.6 2 4q.1 12.4-.1 25c0 1.6-1.3 3.6-2.5 4.9a859 859 0 0 1-23.4 23.3 10 10 0 0 1-6.3 2.6c-20.9.2-41.7-.1-62.5.2-7.3.1-12-3.6-17.2-8M35 84.4v111.2h69.2v-28.2l4.8 3.5q15.1 9.7 30 19.7a26 26 0 0 0 16.3 5.4c15.9-.4 31.7-.1 47.5-.1H218c0-3.1-.3-5.8 0-8.4.6-3.1-1-4.8-3.3-6.3L207 176l-29.2-19.7-41.8-27c-1.1-.7-2-1.9-2.9-2.8q1.3-1.4 2.7-2.4 13.1-8.1 26.1-16.5l22.7-15.4 31.7-20.3c.9-.6 1.7-2 1.7-3.1q.2-6.2.1-12.8h-5.3c-19.3 0-38.7.3-58-.1A25 25 0 0 0 139 61l-11 7.6q-2.9 2.5-6 4.6-8.5 5.4-18 11.1v-28H35z"></path>
                          </svg>
                        </div>
                        <div className="box-radius pointer-events-none absolute -top-11 z-10 flex translate-y-1 scale-90 items-center gap-2 border border-stone-400/10 bg-black px-3 py-1.5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          <span className="select-none truncate text-sm font-normal">konect</span>
                          <div className="size-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" className="drop-shadow-current fill-current">
                              <path d="M16.6 17a1 1 0 0 1-.6-1v-2.5H3a1 1 0 0 1-1-1v-1q0-1 1-1h13V8a1 1 0 0 1 1.7-.7l4 4q.6.7 0 1.4l-4 4a1 1 0 0 1-1 .2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    
                    <a target="_blank" draggable="false" href="https://google.com">
                      <div className="group relative flex items-center justify-center">
                        <div className="flex items-center justify-center size-8">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="24" height="24" className="fill-[#95B806] drop-shadow-[0_0_3.5px_#95B80675]">
                            <path d="M135 187.9c-4 8-7.3 15.8-15 20.9-4 2.6-4.3 7.6-2 11.6 3.7 6.3 1 10.8-3 13.9a46 46 0 0 1-48 6.5c-13-5.5-25.7-12.6-35.9-23.1-5.6-5.9-11-12-17.2-17-5.8-4.9-5.5-10.5-4.4-16.7a305 305 0 0 1 3.5-16.8c2.6-10.7-.1-21-2.5-31.2-4.3-18.1-9.4-36-8.6-55a52 52 0 0 1 13.4-32.7 66 66 0 0 1 57.5-23.2 78 78 0 0 1 51 22.3c2.7 2.7 5.3 3.7 9 3.7 16.6-.2 33 .1 49.6-.2 13-.2 24 5 35.5 12.3-3 1.7-5.6 2.7-7.7 4.2-9.7 7-20.6 8-32.1 7.7-10.8-.4-21.6-.1-33-.1l1.3 3.9c4.4 11.5 7 22.7 2 35.2a45 45 0 0 0-.2 21c1.2 7.8-.7 14.8-3.1 22l-10 30.8M58 41.4l-.5-5.6c-2.5 3.4-3.7 6.7-6 7.7s-5.4-.3-8.8-.7C42.3 44 41.3 46 41 48c-.5 4.2-2.6 5.1-6.5 4.3-2.3-.5-4.9 0-8 0 1 2.7 1.4 4.3 2 5.7 2.3 5.6 1.9 6.4-3.8 8-1.6.4-3 1.3-5.5 2.4 2.3 1.2 3.5 2.1 4.9 2.4 4 .6 10-.2 9.4 5.2-.6 5.6 6 5.3 5.5 9.9-.2 1.5.5 3.2 1 4.7q1 2.7 2.5 5.9l7.4-6.8 2.7 2.4 2.5 2.5c3.8 3.3 6 3.2 8.6-1 2-3.6 4.6-5.4 8.8-4.7h4.8q.5-1.3.5-1.8-1.8-8 6.5-7.3c1.5 0 3.1-1 5-1.5l-7.1-7.8 9.3-7.6c-1.8-1-3-1.4-4-2.2-4.4-3.3-10.2-4.8-12.3-11-2.7-8-2.9-7.9-11-5.5-2.5.8-5.3 2-6.3-2.9m42.1 80.6c3-1.4 6.4-2.4 9.2-4.2 6-3.8 6-8.9 1-14-7-7.4-19.5-5-26.2-1.5-5.4 3-7 10.2-2 14.7 5.3 4.6 11 5 18 5m21.5 60c2.3-.7 6-.7 6.6-2.2 2.5-5.1 4-10.8 6-16.8-7 0-13.2-.6-19.2.2-4.7.6-9.3 2.9-13.7 4.8q-4 2-.5 5.4a30 30 0 0 0 20.8 8.6m14-72.9c-5.1 6.6-4 12.6 2.8 15l2.6-18.3zM250 65.8c-1.2 1.3-2.3 3-3.4 3q-9 .4-18 .1c-4.5-.1-5.3-2.2-4-9.9H246c4.4 0 4.3 3.2 4 6.8m-14.2 15.5c5.5 5.5 5.6 5.9 1.3 10.2-.7.6-2.8 1-3.4.5-4.1-3.5-8.5-7-12-11.1-1.2-1.6-1-5.3-.2-7.4 1-2.3 3.5-3.4 6-.6q3.8 4 8.3 8.4m-15.6-34q4.3-4 8-8c3-3.8 5.6-2 8.4 0 3.4 2.6.2 4.7-1 6.2q-4.5 5.6-10.1 10.2c-1 .7-4-.4-5.6-1.5q-4-3 .3-6.9M211 84.7c-.5-4.2 2.6-5 5-6 .8-.1 2.5 2.1 3.5 3.4 1.2 1.6 2.9 3.4 2.9 5 0 2.1-1.3 4.4-2.6 6.2-.3.4-3.5-.5-4.5-1.6-1.7-1.9-2.8-4.4-4.2-7m-1.5-44q1.6-2.8 3.2-4.8c.8-.8 2.8-1.5 3.5-1 1.5 1 3.7 3 3.4 4-1 3.6-2.9 7-4.4 10.4-8.2-3.5-8.3-3.6-5.7-8.6"></path>
                          </svg>
                        </div>
                        <div className="box-radius pointer-events-none absolute -top-11 z-10 flex translate-y-1 scale-90 items-center gap-2 border border-stone-400/10 bg-black px-3 py-1.5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          <span className="select-none truncate text-sm font-normal">gamesense</span>
                          <div className="size-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" className="drop-shadow-current fill-current">
                              <path d="M16.6 17a1 1 0 0 1-.6-1v-2.5H3a1 1 0 0 1-1-1v-1q0-1 1-1h13V8a1 1 0 0 1 1.7-.7l4 4q.6.7 0 1.4l-4 4a1 1 0 0 1-1 .2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
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
