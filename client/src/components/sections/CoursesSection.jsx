/*
  Design rationale: card surfaces and CTAs are flattened to match handcrafted royal-purple theme.
  Token usage: use btn-primary for main actions and neutral text hierarchy for readability.
*/
import React from 'react'
import { Link } from 'react-router-dom'

export const DEFAULT_COURSES = [
  {
    title: 'Web Development Course',
    description: 'Full-stack web development with modern tools',
    duration: '8 weeks',
    level: 'Beginner to Intermediate',
    slug: 'web-development',
    thumbnail: '/images/web-dev.jpg',
  },
  {
    title: 'AI / ML Course',
    description: 'Intro to machine learning and practical AI projects',
    duration: '10 weeks',
    level: 'Intermediate',
    slug: 'ai-ml-course',
    thumbnail: '/images/ai-ml.jpg',
  },
  {
    title: 'UI / UX Course',
    description: 'Design systems, user research, and high-fidelity prototypes',
    duration: '6 weeks',
    level: 'Beginner',
    slug: 'ui-ux-course',
    thumbnail: '/images/ui-ux.jpg',
  },
]

export const getCourseHref = (slug) => `/courses/${slug}`

export default function CoursesSection({ courses = DEFAULT_COURSES }) {
  return (
    <section
      className="section-container"
      aria-labelledby="courses-section-heading"
      aria-describedby="courses-section-subtitle"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 id="courses-section-heading" className="heading-md mb-3">
          Popular Courses
        </h2>
        <p
          id="courses-section-subtitle"
          className="text-base sm:text-lg text-charcoal-700/75 max-w-2xl mx-auto"
        >
          Learn practical, job-ready skills with curated pathways led by experienced mentors.
        </p>
      </div>

      {/* Courses Grid */}
      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        aria-label="Available courses"
      >
        {courses.map((course) => {
          const courseHref = getCourseHref(course.slug)

          return (
            <li key={course.slug} role="listitem" className="h-full">
              <article
                data-testid={`course-card-${course.slug}`}
                className="glass-dark rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-150 hover:scale-[1.02] hover:shadow-softHover hover:border-royal-purple/40 focus-within:border-royal-purple/60"
              >
                <img
                  src={course.thumbnail}
                  alt={`${course.title} course thumbnail`}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-charcoal-700 mb-2">{course.title}</h3>
                  <p className="text-charcoal-700/75 text-sm leading-6 line-clamp-2 min-h-12 mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-charcoal-700/65 mb-5" aria-label="Course metadata">
                    <span>Duration: {course.duration}</span>
                    <span>Level: {course.level}</span>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <Link
                      to={courseHref}
                      aria-label={`Explore details for ${course.title}`}
                      className="text-sm text-royal-purple hover:text-royal-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-royal-purple focus:ring-offset-2 rounded"
                    >
                      Explore course
                    </Link>

                    <Link
                      to={courseHref}
                      data-testid={`explore-course-btn-${course.slug}`}
                      aria-label={`Explore course: ${course.title}`}
                      className="btn-primary h-10 px-5 text-sm"
                    >
                      Explore course
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>

      <div className="mt-10 flex justify-center">
        <Link
          to="/courses"
          data-testid="see-all-courses-btn"
          aria-label="See all available courses"
          className="btn-primary"
        >
          See all courses
        </Link>
      </div>
    </section>
  )
}
