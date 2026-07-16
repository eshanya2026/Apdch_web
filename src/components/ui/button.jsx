import { cva } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-white shadow-brand-button hover:bg-primary-dark hover:-translate-y-0.5',
        secondary:
          'bg-secondary text-white shadow-brand-secondary hover:brightness-110 hover:-translate-y-0.5',
        outline:
          'border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:-translate-y-0.5',
        ghost:
          'bg-transparent text-foreground hover:bg-surface-soft',
        soft:
          'bg-surface-soft text-primary hover:bg-accent/40 hover:-translate-y-0.5',
        dark:
          'bg-foreground text-white hover:bg-foreground/90 hover:-translate-y-0.5',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 rounded-lg px-3.5 text-xs',
        lg: 'h-12 px-7 text-base rounded-2xl',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
}

export { Button, buttonVariants }
