import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FacultyCard({ member, index, onOpen }) {
  const isHod = member.role?.includes('HOD')
  const isProf = member.role?.includes('Professor') && !isHod
  const isReader = member.role?.includes('Reader')

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.025, 0.15), ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-brand-sm"
    >
      <button type="button" onClick={() => onOpen(member)} className="flex h-full flex-col text-left">
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/60">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 [image-rendering:-webkit-optimize-contrast]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center">
            <span
              className={cn(
                'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider',
                isHod
                  ? 'bg-amber-100/90 text-amber-900 ring-1 ring-amber-300/60'
                  : isProf
                  ? 'bg-primary/10 text-primary ring-1 ring-primary/20'
                  : isReader
                  ? 'bg-sky-50 text-sky-800 ring-1 ring-sky-200/80'
                  : 'bg-slate-100 text-slate-700 ring-1 ring-slate-200'
              )}
            >
              {member.role}
            </span>
          </div>

          <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {member.name}
          </h3>

          <p className="mt-1.5 line-clamp-2 text-sm font-medium leading-snug text-muted">
            {member.qualification}
          </p>

          <div className="mt-auto pt-4 text-xs text-muted">
            <div className="flex items-center gap-2 border-t border-border/60 pt-3">
              <Mail className="h-3.5 w-3.5 shrink-0 text-primary/70" />
              <span className="truncate text-xs font-medium text-muted/90">
                {member.email || '—'}
              </span>
            </div>
          </div>
        </div>
      </button>
    </motion.article>
  )
}
