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
          className="text-xl text-gray-400 max-w-2xl mx-auto"
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
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Hover Glow Effect */}
              <motion.div
                whileHover={{
                  boxShadow: '0 0 40px rgba(147, 51, 234, 0.3)',
                }}
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
              />

              {/* Card */}
              <div className="relative glass-dark p-8 rounded-2xl border border-white/20 h-full overflow-hidden group-hover:border-purple-500/50 transition-all duration-300">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                  <IconComponent className="w-8 h-8 text-purple-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated Bottom Border */}
                <motion.div
                  whileHover={{ scaleX: 1 }}
                  initial={{ scaleX: 0 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
                />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
