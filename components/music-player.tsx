'use client'

import { useState, useRef, useEffect } from 'react'

const GRADIENT = 'linear-gradient(to right, #8B5CF6, #10B981)'
const GRADIENT_BG = 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(16,185,129,0.10) 100%)'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.6)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume

    const onTimeUpdate = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100)
    }
    const onLoadedMetadata = () => setDuration(audio.duration)
    const onEnded = () => { setIsPlaying(false); setProgress(0) }

    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('ended', onEnded)
    }
  }, [volume])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) { audio.pause(); setIsPlaying(false) }
    else { audio.play(); setIsPlaying(true) }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    audio.currentTime = pct * audio.duration
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v
    if (v === 0) setIsMuted(true)
    else setIsMuted(false)
  }

  const fmt = (s: number) => {
    if (!s || isNaN(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const currentTime = duration ? (progress / 100) * duration : 0

  return (
    <>
      <audio ref={audioRef} src="/squad-up-track.mpeg" preload="metadata" loop />

      {/* Floating Player */}
      <div
        className="fixed bottom-6 right-6 z-50 transition-all duration-300"
        style={{ filter: isPlaying ? 'drop-shadow(0 0 20px rgba(139,92,246,0.5))' : 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))' }}
      >
        {/* Expanded panel */}
        {isExpanded && (
          <div
            className="mb-3 rounded-2xl border border-white/15 p-4 w-72 animate-scale-in"
            style={{ background: 'rgba(8,13,20,0.95)', backdropFilter: 'blur(20px)' }}
          >
            {/* Track info */}
            <div className="flex items-center gap-3 mb-4">
              {/* Animated disc */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                style={{ background: GRADIENT }}
              >
                <span className="text-xl" style={{ animation: isPlaying ? 'spin 3s linear infinite' : 'none' }}>🎵</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm truncate">Squad Up Theme</p>
                <p className="text-white/40 text-xs font-mono">Squad Up Entertainment</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-2">
              <div
                className="w-full h-1.5 rounded-full cursor-pointer overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                onClick={handleProgressClick}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${progress}%`, background: GRADIENT }}
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-white/30 mt-1">
                <span>{fmt(currentTime)}</span>
                <span>{fmt(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              {/* Volume */}
              <div className="flex items-center gap-2">
                <button onClick={toggleMute} className="text-white/40 hover:text-white transition-colors text-sm">
                  {isMuted || volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
                </button>
                <input
                  type="range" min="0" max="1" step="0.05" value={isMuted ? 0 : volume}
                  onChange={handleVolume}
                  className="w-16 h-1 rounded-full cursor-pointer accent-violet-500"
                />
              </div>

              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                style={{ background: GRADIENT, boxShadow: '0 4px 16px rgba(139,92,246,0.5)' }}
              >
                {isPlaying ? (
                  <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white fill-white ml-0.5" viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>

              {/* Loop indicator */}
              <div className="text-xs font-mono text-white/30 flex items-center gap-1">
                <svg className="w-3 h-3 fill-violet-400 opacity-70" viewBox="0 0 24 24">
                  <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                </svg>
                <span>loop</span>
              </div>
            </div>
          </div>
        )}

        {/* Floating button */}
        <div className="flex items-center justify-end gap-2">
          {/* Mini track name pill — shows when collapsed and playing */}
          {!isExpanded && isPlaying && (
            <div
              className="px-3 py-1.5 rounded-full text-xs font-mono text-white/70 border border-white/10 animate-fade-in"
              style={{ background: 'rgba(8,13,20,0.9)', backdropFilter: 'blur(12px)' }}
            >
              ♪ Squad Up Theme
            </div>
          )}

          <div className="flex items-center gap-2">
            {/* Expand/collapse toggle */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-all hover:border-white/30"
              style={{ background: 'rgba(8,13,20,0.9)', backdropFilter: 'blur(12px)' }}
              aria-label="Expand player"
            >
              <span className="text-white/40 text-xs">{isExpanded ? '✕' : '↑'}</span>
            </button>

            {/* Main play/pause button */}
            <button
              onClick={togglePlay}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 relative"
              style={{ background: GRADIENT, boxShadow: isPlaying ? '0 0 24px rgba(139,92,246,0.6), 0 0 48px rgba(16,185,129,0.2)' : '0 4px 20px rgba(139,92,246,0.4)' }}
              aria-label={isPlaying ? 'Pause' : 'Play Squad Up Theme'}
            >
              {/* Pulsing ring when playing */}
              {isPlaying && (
                <span
                  className="absolute inset-0 rounded-full animate-ping opacity-30"
                  style={{ background: GRADIENT }}
                />
              )}
              {isPlaying ? (
                <svg className="w-5 h-5 fill-white relative z-10" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-white relative z-10 ml-0.5" viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
