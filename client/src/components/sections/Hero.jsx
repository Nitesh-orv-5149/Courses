/*
  Design rationale: dark, modern hero with clear hierarchy, practical copy, and restrained brand accents.
  Token usage: royal-purple powers primary actions while neutral dark surfaces maintain readability.
*/
import { Link } from 'react-router-dom'

export default function Hero({
  heroImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
  primaryCta = { label: 'Start Free Trial', to: '/courses' },
  secondaryCta = { label: 'View Curriculum', to: '/courses' },
}) {
  return (
    <header className="min-h-screen pt-28 pb-14 px-4 sm:px-6 lg:px-8 flex items-center" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-md border border-white/20 bg-[#131d34]/80 px-3 py-1 text-sm font-medium text-white/80">
              Practical learning for modern careers
            </p>

            <h1 id="hero-heading" className="heading-lg max-w-xl">
              Learn real skills. Build real things.
            </h1>

            <p className="text-lg leading-8 text-white/75 max-w-xl">
              Work through guided, hands-on courses that help you ship projects and grow confidence step by step.
              No fluff, just practical progress.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={primaryCta.to}
                aria-label={primaryCta.label}
                className="btn-primary"
              >
                {primaryCta.label}
              </Link>

              <Link
                to={secondaryCta.to}
                aria-label={secondaryCta.label}
                className="btn-secondary"
              >
                {secondaryCta.label}
              </Link>
            </div>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-white/65" aria-label="Trust metrics">
              <li><span className="font-semibold text-white">12k+</span> active learners</li>
              <li><span className="font-semibold text-white">90%</span> completion rate</li>
              <li><span className="font-semibold text-white">4.8/5</span> course rating</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-lg bg-royal-purple/15 blur-2xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-black/20 shadow-softHover">
              <img
                src={heroImage}
                alt="Students collaborating while learning digital skills"
                loading="lazy"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-royal-purple/25 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

