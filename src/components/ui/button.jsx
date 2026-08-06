import { useCallback } from 'react'
import { cva } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden',
    'max-w-full whitespace-normal text-center rounded-xl text-sm font-medium cursor-pointer',
    'transition-[transform,box-shadow,background-position,background-color,filter,border-color,color] duration-300 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:relative [&_svg]:z-[1] [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-out',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'bg-gradient-to-r from-primary via-[#9a3550] to-primary-dark',
          'bg-[length:200%_100%] bg-[position:0%_50%] text-white',
          'shadow-brand-button',
          'hover:bg-[position:100%_50%] hover:shadow-brand-strong hover:-translate-y-0.5',
        ].join(' '),
        secondary: [
          'bg-gradient-to-r from-secondary via-primary to-primary-dark',
          'bg-[length:200%_100%] bg-[position:0%_50%] text-white',
          'shadow-brand-secondary',
          'hover:bg-[position:100%_50%] hover:shadow-brand-strong hover:-translate-y-0.5',
        ].join(' '),
        outline: [
          'border border-white/40 bg-white/10 text-white backdrop-blur-md',
          'hover:bg-white/20 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.45)] hover:-translate-y-0.5',
        ].join(' '),
        ghost: 'bg-transparent text-foreground hover:bg-surface-soft',
        soft: [
          'bg-surface-soft text-primary',
          'hover:bg-accent/40 hover:shadow-brand-xs hover:-translate-y-0.5',
        ].join(' '),
        dark: [
          'bg-gradient-to-r from-foreground via-[#3a1a22] to-primary-dark',
          'bg-[length:200%_100%] bg-[position:0%_50%] text-white',
          'hover:bg-[position:100%_50%] hover:shadow-brand-intense hover:-translate-y-0.5',
        ].join(' '),
      },
      size: {
        default: 'min-h-11 px-5 py-2 hover:[&_svg]:translate-x-[4px]',
        sm: 'min-h-9 rounded-lg px-3.5 py-2 text-xs hover:[&_svg]:translate-x-[4px]',
        lg: 'min-h-12 px-5 py-3 text-sm sm:px-7 sm:text-base rounded-2xl hover:[&_svg]:translate-x-[4px]',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function createRipple(event) {
  const target = event.currentTarget
  if (!target) return

  const rect = target.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height) * 1.2
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2

  const ripple = document.createElement('span')
  ripple.className = 'btn-ripple-ink'
  ripple.style.width = `${size}px`
  ripple.style.height = `${size}px`
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`

  target.appendChild(ripple)
  ripple.addEventListener('animationend', () => ripple.remove(), { once: true })
}

function Button({ className, variant, size, asChild = false, onPointerDown, ...props }) {
  const Comp = asChild ? Slot : 'button'

  const handlePointerDown = useCallback(
    (event) => {
      createRipple(event)
      onPointerDown?.(event)
    },
    [onPointerDown]
  )

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      onPointerDown={handlePointerDown}
      {...props}
    />
  )
}

export { Button, buttonVariants }
