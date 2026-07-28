import { Search, X } from 'lucide-react'
import { FACULTY_FILTERS } from '@/lib/facultyConstants'
import { cn } from '@/lib/utils'

export default function FacultyToolbar({
  query,
  onQueryChange,
  activeFilter,
  onFilterChange,
  resultCount,
}) {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="relative">
        <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted md:left-6 md:h-6 md:w-6" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search faculty by name, department, or research..."
          className="h-14 w-full rounded-2xl border border-border/80 bg-white pl-14 pr-12 text-base text-foreground shadow-brand-sm outline-none transition-all placeholder:text-muted focus:border-primary/35 focus:ring-4 focus:ring-primary/10 md:h-16 md:pl-16 md:pr-14 md:text-lg"
          aria-label="Search faculty"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-muted hover:bg-surface-soft hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {FACULTY_FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => onFilterChange(filter.id)}
            className={cn(
              'rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-all duration-300',
              activeFilter === filter.id
                ? 'bg-primary text-white shadow-brand-btn scale-105'
                : 'bg-white text-foreground/75 ring-1 ring-border/80 hover:text-primary hover:ring-primary/30'
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-center text-sm text-muted">
        <span className="font-semibold text-foreground">{resultCount}</span> faculty
        {resultCount === 1 ? ' member' : ' members'}
      </p>
    </div>
  )
}
