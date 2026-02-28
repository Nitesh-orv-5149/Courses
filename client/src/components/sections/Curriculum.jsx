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
    <section className="section-container bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
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
          <span className="text-purple-400 font-semibold text-sm tracking-widest">
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
                className="w-full glass-dark border border-white/20 rounded-xl p-6 text-left hover:border-purple-500/50 transition-all duration-300 group"
                whileHover={{ borderColor: 'rgba(147, 51, 234, 0.5)' }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
                      {module.module}
                    </div>
                    <h3 className="font-bold text-white text-lg">
                      {module.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
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
                <div className="glass-dark border border-white/20 border-t-0 rounded-b-xl p-6 space-y-3 bg-gradient-to-b from-purple-500/5 to-transparent">
                  {module.items.map((item, itemIndex) => {
                    const ItemIcon = item.icon
                    return (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <ItemIcon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 group-hover:text-gray-400">
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
