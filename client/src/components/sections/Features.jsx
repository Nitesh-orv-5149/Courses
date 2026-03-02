/*
  Design rationale: feature cards now use flat elevated panels with subtle motion only.
  Token usage: royal-purple marks icon and border accents; neutral surfaces keep hierarchy clear.
*/
import { motion } from 'framer-motion'
import { Shield, Users, Infinity } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Secure Streaming',
      description:
        'Our proprietary player ensures high-definition video delivery with industry-standard encryption and zero buffering.',
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description:
        'Get direct access to industry veterans who have built products for Google, Meta, and top-tier design agencies.',
    },
    {
      icon: Infinity,
      title: 'Lifetime Access',
      description:
        'Pay once and keep your seat forever. Receive all future course updates and new materials at no extra cost.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        className="text-center mb-16"
      >
        <motion.h2 variants={itemVariants} className="heading-md mb-4">
          Built for Serious Learners
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-xl text-charcoal-700/75 max-w-2xl mx-auto"
        >
          Experience a seamless learning environment designed to help you master new skills efficiently.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative glass-dark p-8 rounded-2xl h-full overflow-hidden group-hover:border-royal-purple/50 group-hover:shadow-softHover transition-all duration-150">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-md bg-royal-purple/15 border border-royal-purple/30 flex items-center justify-center mb-6 transition-all">
                  <IconComponent className="w-8 h-8 text-royal-purple" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-charcoal-700 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-charcoal-700/75 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated Bottom Border */}
                <motion.div
                  whileHover={{ scaleX: 1 }}
                  initial={{ scaleX: 0 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-purple origin-left"
                />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
