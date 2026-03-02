/*
  Design rationale: maintain accordion structure while replacing glow/gradient effects with crisp surfaces.
  Token usage: module chips and focus rings use royal-purple for consistent interaction feedback.
*/
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Play, FileText } from 'lucide-react'

export default function Curriculum() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const modules = [
    {
      title: 'Foundations of Modern Design Systems',
      module: '01',
      items: [
        {
          icon: Play,
          title: 'Introduction to Atomic Design',
          duration: '12:45',
          type: 'video',
        },
        {
          icon: FileText,
          title: 'PDF Guide: Component Architecture',
          duration: 'Resource',
          type: 'resource',
        },
      ],
    },
    {
      title: 'Advanced Prototyping Techniques',
      module: '02',
      items: [],
    },
    {
      title: 'Scaling and Documentation',
      module: '03',
      items: [],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <span className="text-royal-purple font-semibold text-sm tracking-widest">
            COURSE SYLLABUS
          </span>
          <h2 className="heading-md mt-2">Course Curriculum</h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={containerVariants}
          className="space-y-4 max-w-3xl mx-auto"
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <motion.button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? -1 : index)
                }
                className="w-full glass-dark rounded-xl p-6 text-left hover:border-royal-purple/50 hover:shadow-softHover transition-all duration-150 group focus:outline-none focus:ring-2 focus:ring-royal-purple"
                whileHover={{ borderColor: 'rgba(91, 33, 182, 0.45)' }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-md bg-royal-purple flex items-center justify-center font-bold text-white">
                      {module.module}
                    </div>
                    <h3 className="font-bold text-charcoal-700 text-lg">
                      {module.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-royal-purple group-hover:text-royal-purple-600 transition-colors" />
                  </motion.div>
                </div>
              </motion.button>

              {/* Expanded Content */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: expandedIndex === index ? 1 : 0,
                  height: expandedIndex === index ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="glass-dark border-t-0 rounded-b-xl p-6 space-y-3 bg-neutral-50">
                  {module.items.map((item, itemIndex) => {
                    const ItemIcon = item.icon
                    return (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-lg hover:bg-royal-purple/15 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <ItemIcon className="w-5 h-5 text-royal-purple group-hover:text-royal-purple-600" />
                          <span className="text-charcoal-700/85 group-hover:text-charcoal-700 transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-sm text-charcoal-700/60 group-hover:text-charcoal-700/80">
                          {item.duration}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
