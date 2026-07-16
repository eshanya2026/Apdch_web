import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function DepartmentCard({ department, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-brand-lg"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={department.image}
          alt={department.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold tracking-wider text-primary">
          {department.shortName}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {department.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{department.overview}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {department.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-surface-soft px-2.5 py-1 text-[11px] font-medium text-primary"
            >
              {h}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="soft" size="sm" className="w-full sm:w-auto">
            <Link to={`/departments/${department.id}`}>
              Read More
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
