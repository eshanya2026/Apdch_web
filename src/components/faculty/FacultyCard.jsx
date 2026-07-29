import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function FacultyCard({ member, index, onOpen }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.24) }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/15 hover:shadow-brand-sm"
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            {member.department}
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{member.role}</p>
          <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-foreground/70">
            {member.qualification}
          </p>
          {member.email && (
            <div className="mt-auto pt-4 text-xs text-muted">
              <p className="flex items-center gap-2 border-t border-border/60 pt-3">
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary/70" />
                <span className="truncate">{member.email}</span>
              </p>
            </div>
          )}
        </div>
      </button>
    </motion.article>
  )
}
