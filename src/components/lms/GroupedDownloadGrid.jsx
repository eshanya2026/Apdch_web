import { useState, useMemo } from 'react'
import {
  Download,
  Eye,
  FileText,
  Presentation,
  Search,
  ChevronDown,
  ChevronUp,
  Layers,
  RotateCcw,
} from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'

export default function GroupedDownloadGrid({ items = [], getGroup, format = 'pptx' }) {
  const [searchQuery, setSearchQuery] = useState('')
  
  // Organize items into grouped modules
  const rawGroups = useMemo(() => {
    return items.reduce((result, item, index) => {
      const label = getGroup ? getGroup(index) : 'Study Materials'
      const current = result.at(-1)

      if (current?.label === label) {
        current.items.push({ item, index })
      } else {
        result.push({ label, items: [{ item, index }] })
      }

      return result
    }, [])
  }, [items, getGroup])

  // Track expanded state for each module (Default: First module expanded, others collapsed)
  const [openModules, setOpenModules] = useState(() => {
    const initial = {}
    rawGroups.forEach((group, idx) => {
      initial[group.label] = idx === 0 // Open first module by default
    })
    return initial
  })

  const toggleModule = (label) => {
    setOpenModules((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  // Filter items by search query (matches title, chapter number, module category)
  const filteredGroups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return rawGroups
      .map((group) => {
        const matchingItems = group.items.filter(({ item: [title], index }) => {
          if (!query) return true
          const chapterTag = `chapter ${index + 1}`
          const chTag = `ch ${index + 1}`
          const matchesTitle = title.toLowerCase().includes(query)
          const matchesChapter = chapterTag.includes(query) || chTag.includes(query)
          const matchesGroup = group.label.toLowerCase().includes(query)
          return matchesTitle || matchesChapter || matchesGroup
        })

        return {
          ...group,
          items: matchingItems,
        }
      })
      .filter((group) => group.items.length > 0)
  }, [rawGroups, searchQuery])

  // Automatically expand modules when user is actively searching
  const isSearching = searchQuery.trim().length > 0

  const totalFilteredCount = filteredGroups.reduce((acc, g) => acc + g.items.length, 0)

  return (
    <div className="mt-4 space-y-4">
      {/* ==================================================
          TOOLBAR: SEARCH BAR (Clean, compact)
          ================================================== */}
      <Reveal>
        <div className="flex flex-col gap-3 rounded-2xl border border-primary/15 bg-white p-3.5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chapter number, title, or topic..."
              className="w-full rounded-xl border border-border/80 bg-surface/50 py-2 pl-10 pr-12 text-xs sm:text-sm font-medium text-foreground outline-none transition focus:border-primary/40 focus:bg-white focus:ring-3 focus:ring-primary/5"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-muted hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2 border-t sm:border-t-0 border-border/60 pt-2 sm:pt-0">
            <span className="text-xs font-semibold text-muted whitespace-nowrap">
              {totalFilteredCount} {totalFilteredCount === 1 ? 'Material' : 'Materials'} Found
            </span>
          </div>
        </div>
      </Reveal>

      {/* ==================================================
          MODULE ACCORDION LIST
          ================================================== */}
      {filteredGroups.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-primary/20 bg-white p-8 text-center shadow-sm">
          <Layers className="mx-auto h-8 w-8 text-muted/40" />
          <h3 className="mt-2 font-display text-base font-bold text-foreground">No Matching Presentations Found</h3>
          <p className="mt-1 text-xs text-muted">Try searching with a different chapter name or topic.</p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-primary/90"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Search</span>
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredGroups.map((group, groupIdx) => {
            const isOpen = isSearching || !!openModules[group.label]
            const startIdx = group.items[0]?.index + 1
            const endIdx = group.items[group.items.length - 1]?.index + 1
            const rangeText = startIdx === endIdx ? `Ch ${startIdx}` : `Ch ${startIdx} – ${endIdx}`

            return (
              <section
                key={group.label}
                className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-xs transition-all hover:border-primary/30"
              >
                {/* Accordion Module Header */}
                <button
                  type="button"
                  onClick={() => toggleModule(group.label)}
                  className="flex w-full items-center justify-between gap-4 bg-slate-50/90 px-5 py-3.5 text-left transition-colors hover:bg-slate-100/80"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-xs">
                      {groupIdx + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-base font-bold text-foreground truncate">
                          {group.label}
                        </h3>
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                          {rangeText}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted font-medium">
                        {group.items.length} {group.items.length === 1 ? 'Presentation' : 'Presentations'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline-block text-xs font-semibold text-primary">
                      {isOpen ? 'Collapse' : 'Expand'}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-border/80 text-muted shadow-xs">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </div>
                </button>

                {/* Module Body Grid */}
                {isOpen && (
                  <div className="p-5 border-t border-border/60 bg-white">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {group.items.map(({ item: [title, documentId, fileSize], index }) => {
                        const MaterialIcon = format === 'pdf' ? FileText : Presentation
                        const fileType = format === 'pdf' ? 'PDF' : 'PPTX'
                        const previewUrl = `https://docs.google.com/presentation/d/${documentId}/preview`
                        const downloadUrl = `https://docs.google.com/presentation/d/${documentId}/export/${format}`

                        return (
                          <Reveal key={`${documentId}-${title}`} delay={(index % 6) * 0.02}>
                            <article className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-white p-5 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                              <div className="space-y-3.5">
                                {/* Header Badge & Icon */}
                                <div className="flex items-center justify-between gap-2">
                                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <MaterialIcon className="h-5 w-5" />
                                  </span>
                                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary">
                                    Chapter {index + 1}
                                  </span>
                                </div>

                                {/* Title - Increased font size & readability */}
                                <h4 className="font-display text-base font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                                  {title}
                                </h4>
                              </div>

                              {/* Action Buttons: View + Download */}
                              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-4">
                                <span className="text-xs font-semibold text-muted">
                                  {fileType}{fileSize ? ` · ${fileSize}` : ''}
                                </span>

                                <div className="flex items-center gap-2">
                                  <a
                                    href={previewUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-surface px-3 py-1.5 text-xs font-bold text-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-colors"
                                    title="View presentation online"
                                  >
                                    <Eye className="h-3.5 w-3.5" />
                                    <span>View</span>
                                  </a>
                                  <a
                                    href={downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-primary/90 transition-colors"
                                    title="Download presentation file"
                                  >
                                    <Download className="h-3.5 w-3.5" />
                                    <span>Download</span>
                                  </a>
                                </div>
                              </div>
                            </article>
                          </Reveal>
                        )
                      })}
                    </div>
                  </div>
                )}
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}

