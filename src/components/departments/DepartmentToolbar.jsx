import { Search, X } from 'lucide-react'
import { DEPARTMENT_FILTERS } from '@/lib/departmentsConstants'
import { cn } from '@/lib/utils'

export default function DepartmentToolbar({
  query,
  onQueryChange,
  activeFilter,
  onFilterChange,
  resultCount,
}) {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="-mt-8 relative z-20 rounded-[1.5rem] border border-border/80 bg-white p-4 shadow-brand-toolbar md:-mt-10 md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search departments, clinics, or keywords..."
              className="h-12 w-full rounded-xl border border-border/80 bg-background pl-11 pr-10 text-sm text-foreground outline-none transition-all placeholder:text-muted focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
              aria-label="Search departments"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-muted hover:bg-surface-soft hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <p className="shrink-0 text-sm text-muted lg:pl-2">
            <span className="font-semibold text-primary">{resultCount}</span> department
            {resultCount === 1 ? '' : 's'}
          </p>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {DEPARTMENT_FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => onFilterChange(filter.id)}
              className={cn(
                'shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-brand-btn'
                  : 'bg-background text-foreground/70 hover:bg-surface-soft hover:text-primary'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
