import { AnimatePresence, motion } from 'framer-motion'
import { X, Mail, FlaskConical, GraduationCap, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FacultyProfileModal({ member, onClose }) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          key={member.id}
          className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-foreground/45 backdrop-blur-sm"
            aria-label="Close profile"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="faculty-profile-title"
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-[0_40px_100px_-40px_rgba(17,24,39,0.4)] md:grid-cols-[0.9fr_1.15fr]"
          >
            <div className="relative min-h-[220px] md:min-h-full">
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-foreground/10" />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-foreground md:hidden"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative overflow-y-auto p-6 md:p-8">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 hidden h-9 w-9 items-center justify-center rounded-full bg-background text-foreground hover:bg-surface-soft md:flex"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                {member.department}
              </p>
              <h2
                id="faculty-profile-title"
                className="mt-2 font-display text-3xl text-foreground md:text-[2rem]"
              >
                {member.name}
              </h2>
              <p className="mt-1 text-sm text-muted">{member.role}</p>
              <p className="mt-5 text-sm leading-relaxed text-foreground/75">{member.bio}</p>

              <dl className="mt-7 space-y-4">
                <div className="flex gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Qualification
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{member.qualification}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Experience
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{member.experience}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FlaskConical className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Research
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-foreground">{member.research}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Email
                    </dt>
                    <dd className="mt-1 text-sm">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-primary hover:underline"
                      >
                        {member.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={`mailto:${member.email}`}>Email faculty</a>
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
