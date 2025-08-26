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
                    
                    <a target="_blank" draggable="false" href="https://google.com">
                      <div className="group relative flex items-center justify-center">
                        <div className="flex items-center justify-center size-8">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="24" height="24" className="fill-white drop-shadow-[0_0_3.5px_#FFFFFF75]">
                            <path d="m355.7 424.3 12.5 18.5H225.5l16.9-24.6 27-38 44.6-62.7 63-89 44.4-62.4c.8-1.3 1.2-2.9 2.2-5.1h-6c-32 0-64.2-.3-96.4.1a63 63 0 0 1-41.7-13c-11.7-9-24.2-17-37.5-26.4h257.4c-.9 2-1.5 4.2-2.7 6L469 166.4a43216 43216 0 0 0-138 195 25 25 0 0 0 0 28.2z"></path>
                            <path d="m211.7 419.2-25.1-36-27.6-38.7-51-72-63-89L2.5 124q-.4-.8-.8-3h97.6c10 0 16.7-6.7 16.7-16.9v-45c1.3 0 2.6-.4 3.2 0l138.4 98c1 .8 1.5 2.4 2.5 4H77.3l18.8 26.5 55.4 78.4 67 95 7.4 9.7c11.3 15.7 9.1 25.4-2 39.8-2.1 2.9-4.6 5.5-6.4 8.6-2 3.4-3.5 3-5.8 0"></path>
                            <path d="m192.7 289.2-27.6-39.6-28-39-20.3-29h268l-13 19c-2.1 3.1-5 5.7-6.6 9-2.8 6.2-7.2 7.6-13.7 7.5q-80-.2-160-.1h-6c5 7 9.3 13.6 14 19.8.9 1 3.3 1.2 5 1.2h140.8c-7.7 10.9-15.2 21-22.1 31.5-2 3-4 3.6-7.2 3.5h-90.2c2.7 4.4 4.7 8 7 11.3l33.2 46.6 7 9.4-22.1 30.7-16.9-23.9z"></path>
                          </svg>
                        </div>
                        <div className="box-radius pointer-events-none absolute -top-11 z-10 flex translate-y-1 scale-90 items-center gap-2 border border-stone-400/10 bg-black px-3 py-1.5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          <span className="select-none truncate text-sm font-normal">flipd</span>
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
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="24" height="24" className="fill-[#EB055A] drop-shadow-[0_0_3.5px_#EB055A75]">
                            <path d="M97.020775,100.780876 C123.152191,100.780876 149.283600,100.780876 175.764389,100.780876 C175.764389,117.745514 175.764389,134.284500 175.764389,151.407379 C149.225403,151.407379 122.837448,151.407379 96.021622,151.407379 C96.021622,153.784653 96.021614,155.583160 96.021622,157.381668 C96.021736,186.369675 95.942749,215.358154 96.108749,244.345200 C96.133156,248.607239 95.117912,250.187637 90.574089,250.100723 C76.273903,249.827209 61.965183,249.999969 47.330837,249.999969 C47.330837,167.348160 47.330837,84.984512 47.330837,2.310201 C99.701836,2.310201 152.074203,2.310201 204.723572,2.310201 C204.723572,18.975641 204.723572,35.555580 204.723572,52.860428 C169.090012,52.860428 133.506363,52.860428 97.182785,52.934921 C96.336029,53.336452 96.229210,53.663494 96.122391,53.990540 C96.097633,69.011017 96.072868,84.031494 96.073479,99.781097 C96.406158,100.600441 96.713463,100.690659 97.020775,100.780876 z"></path>
                          </svg>
                        </div>
                        <div className="box-radius pointer-events-none absolute -top-11 z-10 flex translate-y-1 scale-90 items-center gap-2 border border-stone-400/10 bg-black px-3 py-1.5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          <span className="select-none truncate text-sm font-normal">fatality</span>
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
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 227 230" width="24" height="24" className="fill-[#0B46F9] drop-shadow-[0_0_3.5px_#0B46F975]">
                            <path d="M226.6 64.2 128.6 0v36l63 40.7-7.5 23.4h-55.4V130H184l7.4 23.4-62.8 40.8V230l98-64-16-50.9z"></path>
                            <path d="M43.5 129.9h55.2V100H43.3L36 76.7 98.7 36V0L.7 64.2l16 50.9L.8 166 99 230v-36l-62.8-40.7z"></path>
                          </svg>
                        </div>
                        <div className="box-radius pointer-events-none absolute -top-11 z-10 flex translate-y-1 scale-90 items-center gap-2 border border-stone-400/10 bg-black px-3 py-1.5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          <span className="select-none truncate text-sm font-normal">exodus</span>
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
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="24" height="24" className="fill-white drop-shadow-[0_0_3.5px_#FFFFFF75]">
                            <path d="M89.8 34.7l4.3-3.5a45 45 0 0 0 13.1 22.5q13.3 11.1 30.4 8.5c15.3-2.3 30.3-2.6 44 6.6a5 5 0 0 0 4.2.1q16-8.2 31.8-17c9.4-5.4 18.6-11.2 28.6-16.3-.6 1.1-1 2.6-1.9 3.3-12.5 9-24.9 18.5-37.8 27-20.5 13.3-40.8 27.1-63.2 37.3-15.1 6.9-30.7 12.8-45.6 20A237 237 0 0 1 49 139.4c-12 3-24.2 4.6-36.4 6.6-2 .4-4.3.1-7.7.1 1.4-1.6 1.9-2.7 2.6-3q23-6 45.9-12.3a7 7 0 0 0 4-3.7c2.8-8 9.2-13 14.7-18.4-6.4-1.4-14.2-.3-18.5 4.6-4.2 4.8-7 10.7-11 17.2-2.5-9.7-3.4-19 .5-27.8 7.6-17 17.6-26.6 38.3-28.8a41 41 0 0 1 8.4-39"></path>
                            <path d="M8.3 181q-1.6-1-2.4-1.9l45-13c0-8.2 0-14.6.2-21 0-1 1.7-2.6 2.9-3q23.3-7.5 46.5-15.2c4-1.3 7.8-3.6 12.3-5.8l-2.3 21.1 49.5-24.8-9.7-13.1L163 97c9-5.4 18-10.6 26.7-16.4 3.5-2.4 4.8-1.4 6.4 1.6l7.3 12.7 42.1-25 1 1c-.8 1-1.3 2.3-2.3 3Q218.7 92 193 109.5c-7.5 5-15.6 9.2-23.5 13.7-8.9 5.2-17.5 11-26.7 15.4-20.3 9.7-40.8 19-62.3 25.6-14.4 4.4-28.7 9-43.2 12.6-7.9 2-16.2 2.2-24.3 3.2l-4.6 1m181.5-83 2.6 1c1.3-7.3.8-8.3-5.6-11.5-1.8 4-.8 7.2 3 10.5M79.7 202.7c-7.6 2.6-14.6 5.6-22 7.2-14.4 3.1-29 5.5-43.6 8.1q-3.7.7-7.6 1.2l-.8-1.7c1.6-.8 3-2.2 4.7-2.4 19.1-2.7 36.6-10.6 54.4-17l7.3-2.8-16-18.4 9-2.8 8.8 21 6.5-2.8c9-3.6 9-3.8 5.1-12.1-.8-1.8-1.9-3.5-2.4-5.4-1.7-5.5 2-7.8 6.2-9.5l23-9q4.7 8.2 9.5 16c.5.7 2.5 1.4 3.2 1q26-13 52-26.3 17.7-9.3 35-19c11.3-6.5 22.4-13.3 34.3-19.2-.6 1-.9 2.4-1.8 3-17.5 12.3-34.9 24.8-52.7 36.7-8.7 5.8-18.6 10-27.3 15.8-17.5 11.7-36.8 19.4-55.9 27.7-9.3 4-19 7-29 10.7m65.9-11.9c14.1 4.3 28 5 41.7.2 4.2-1.5 8.1-3.8 12.1-5.7-.5 4-14.5 13.5-24.2 17.8-20.8 9.1-39.3 3.6-58.2-8 6.7-3.2 12.2-6.8 18.3-8.3 2.8-.7 6.6 2.4 10.3 4"></path>
                            <path d="m164.7 130.8 36.6-22.6 3.7-1.6v3.9c-2.6 11.9-10.5 19-21.4 23.5a40 40 0 0 1-24 2.7c-.3-2.7-.3-2.7 5.1-6m-53.9 69.8c0 8.7 6 13.7 11.3 19-9-4-17.8-7.6-23.4-17l9.7-4.4c.4-.1 1.4 1.3 2.4 2.4"></path>
                          </svg>
                        </div>
                        <div className="box-radius pointer-events-none absolute -top-11 z-10 flex translate-y-1 scale-90 items-center gap-2 border border-stone-400/10 bg-black px-3 py-1.5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          <span className="select-none truncate text-sm font-normal">evolve</span>
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
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="24" height="24" className="fill-white drop-shadow-[0_0_3.5px_#FFFFFF75]">
                            <path d="M210.8 162.1c5 5 11 2.3 16.3 2.7.6 0 1.7-1.6 1.8-2.5q.2-5.3 0-10.5c0-.8-.5-2-.9-2.1l-10.3-.7c-4.3-.4-5.9 2-6 5q-24.5 4.1-48.5 7.9-9 1.3-18 1.9c-.7 0-1.7-1.7-2.2-2.7q-4.6-10.7-9.6-21c-1.3-2.6-3.5-4.7-5.4-7.1l3.6-3.1 53.7-52.7c3.3-3.3 6.6-6 11.6-5.2 3.3.6 4.5-1.7 5-4.2q.5-3.1 0-6.4c-.5-3.5-1.8-6.3-6.4-5.4q-2.2.2-4.4 0c-4.7-.4-7 1.3-6.1 6.2q.6 4.3-3 7.3l-45.6 44.6c-4.7 4.4-9.6 8.6-13.8 12.4l-24.3-13.7 9.6-35.6c.7-2.6 1.2-4.6 4.6-4.3.7 0 2.3-1.2 2.3-2q.4-6 0-12c0-.6-1.5-1.7-2.4-1.8q-5.5-.3-11 0c-.8 0-2.2 1-2.1 1.6q.2 6.8.9 13.4c0 .6.4 1.3.2 2l-8 30.1-2 7.6h-8V9.8c18.5-9 38.5-9 58.3-7.5a94 94 0 0 1 45.5 15.5c9.8 6.5 20.1 12.5 28.3 20.7 15.2 15 26.2 33.2 31.6 54q8 30.7 1 62a130 130 0 0 1-27.9 54 100 100 0 0 1-31.5 25c-9.2 5-19 8.7-28.6 12.8-1.2.6-3.5.5-4.4-.3l-26.9-25.7a58 58 0 0 0 15.1-29 102 102 0 0 0 2-16c.1-2.9 1.3-4 3.6-4.3l28.8-3q13.3-2 26.5-4.4zM22.3 116.8c-4.9-4.6-9.3-9.1-14.2-13-4.1-3.4-3.4-7.3-2.3-11.2a135 135 0 0 1 21.1-42Q42.1 30 65 18c2.8-1.5 5.3-3.5 8.7-5.7V112a60 60 0 0 0-41 15.7zm33.9 74.5-12.4 10.5a34 34 0 0 1-9.4-22c-.4-6.3 2.2-12.9 3.7-19.3.3-1.4 1.3-2.6 2-3.9 3.5-7 5.9-7 11-1 3.8 4.6 8.4 8.5 12.6 12.7l7.4 8zM76 218c-9.4.6-16.5-4.2-24-8.1-.4-.3-.2-3 .5-3.8q11.3-11.1 23.6-22.7L90 212c1.5 3.2 1.2 5-2.8 5zM7.7 114.2 27.4 133c-10 10.4-15 23-17.2 37.1-8.9-19.2-8.9-39.4-7.9-61z"></path>
                            <path d="M118 175c1 3.2 2.3 6.5 1.8 9.4a33 33 0 0 1-10.5 18.7l-20.6-24c8.6-1.2 18.7-2.7 29.3-4m18.3 64.7 7.2 9.1 1.6-.4c-1.8.5-3.6 1.4-5.4 1.4-6 .2-12-.3-18 .2-4.4.5-6.2-2-7.6-5.2q-2.1-5-4-10.4 5.2-3.8 10.7-7.4c.8-.4 2.7.1 3.5.8q5.9 5.7 12 11.9m-69.5-79.5c-5-5-9.8-9.5-14.5-14.3-.5-.5-.6-2.6-.1-3a54 54 0 0 1 21.6-8.2v31.8zM112 168l-17.8 2-5.3.5 21.8-20.5 9.9 16.5zm-20.7-29.5q7.2 2.5 14 5.6l-19.5 18.2zM104.9 249l-20.8-5.2-.2-1.3 18.2-4.7q2.4 4.8 4.2 9.1c.2.5-.6 1.4-1.4 2M104 209a38 38 0 0 1-5 3l-6.9-14.5.7-.6q5.6 5.8 11.2 12"></path>
                          </svg>
                        </div>
                        <div className="box-radius pointer-events-none absolute -top-11 z-10 flex translate-y-1 scale-90 items-center gap-2 border border-stone-400/10 bg-black px-3 py-1.5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          <span className="select-none truncate text-sm font-normal">esportal</span>
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
      
      {/* Media Embeds */}
      <div className="w-full bg-style-simple overflow-hidden">
        <iframe className="w-full" src="https://open.spotify.com/embed/track/4qVkWT6l07ZwUUNxWoZZbD" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
      
      <iframe className="w-full bg-style-simple" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1481594152&amp;visual=true" height="150" allow="autoplay"></iframe>
      
      <iframe className="aspect-video w-full bg-style-simple" src="https://www.youtube.com/embed/J7imQq-4pgA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share" allowFullScreen></iframe>
      
      <a target="_blank" draggable="false" className="block" href="https://r2.fakecrime.bio/pictures/608ff1dd-adb9-444c-87e5-0a7a73a0d9af.gif">
        <img alt="Embed" draggable="false" loading="lazy" width="1000" height="500" decoding="async" className="bg-style-simple w-full" style={{color: 'transparent'}} src="https://r2.fakecrime.bio/pictures/608ff1dd-adb9-444c-87e5-0a7a73a0d9af.gif"/>
      </a>
      
      <div className="flex items-center justify-center gap-5 p-3 bg-style-simple">
        <img alt="Cover" draggable="false" loading="lazy" width="78" height="78" decoding="async" className="border-color avatar-radius border-width aspect-square size-16 sm:size-20" style={{color: 'transparent'}} src="https://r2.fakecrime.bio/tracks/covers/e4295c13-1fe4-4724-962f-4a209957c850.webp"/>
        <div role="group" tabIndex={0} aria-label="Audio player" className="rhap_container rhap_loop--on rhap_play-status--paused">
          <audio src="https://r2.fakecrime.bio/tracks/audios/8f77b9b7-0af4-4907-b4ce-b628ae1acafc.mp4" loop preload="none"></audio>
          <div className="rhap_header">
            <div className="line-clamp-1 break-all">VØJ x Asketa x Daedra - !Sorry</div>
          </div>
          <div className="rhap_main rhap_stacked">
            <div className="rhap_progress-section">
              <div id="rhap_current-time" className="rhap_time rhap_current-time">00:00</div>
              <div className="rhap_progress-container" aria-label="Audio progress control" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} tabIndex={0}>
                <div className="rhap_progress-bar rhap_progress-bar-show-download">
                  <div className="rhap_progress-indicator" style={{left: '0%'}}></div>
                  <div className="rhap_progress-filled" style={{width: '0%'}}></div>
                </div>
              </div>
              <div className="rhap_time rhap_total-time">00:00</div>
            </div>
            <div className="rhap_controls-section">
              <div className="rhap_additional-controls"></div>
              <div className="rhap_main-controls">
                <button aria-label="Play" className="rhap_button-clear rhap_main-controls-button rhap_play-pause-button" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="size-5 fill-theme drop-shadow-theme duration-300 hover:scale-105 hover:brightness-105">
                    <path d="M21.4 9.4a3 3 0 0 1 0 5.2l-12.8 7C6.6 22.7 4 21.3 4 19V5c0-2.3 2.5-3.7 4.6-2.6z"></path>
                  </svg>
                </button>
              </div>
              <div className="rhap_volume-controls">
                <div className="rhap_volume-container">
                  <button aria-label="Mute" type="button" className="rhap_button-clear rhap_volume-button"></button>
                  <div role="progressbar" aria-label="Volume control" aria-valuemin={0} aria-valuemax={100} aria-valuenow={10} tabIndex={0} className="rhap_volume-bar-area">
                    <div className="rhap_volume-bar">
                      <div className="rhap_volume-indicator" style={{left: '10.00%', transitionDuration: '0s'}}></div>
                      <div className="rhap_volume-filled" style={{width: '10.00%'}}></div>
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
