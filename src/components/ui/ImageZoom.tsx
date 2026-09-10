import { useEffect, useState } from 'react'
import { useScrollLock } from '../../hooks/useScrollLock'

type ImageZoomProps = {
  src: string
  alt: string
  className?: string
}

export function ImageZoom({ src, alt, className }: ImageZoomProps) {
  const [open, setOpen] = useState(false)

  useScrollLock(open)

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar imagem: ${alt}`}
        className="cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
      >
        <img src={src} alt={alt} className={className} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[999] flex cursor-zoom-out items-center justify-center bg-black/85 p-5"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <img src={src} alt={alt} className="max-h-[95%] max-w-[95%] rounded-lg" />
        </div>
      )}
    </>
  )
}
