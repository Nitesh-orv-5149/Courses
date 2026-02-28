import { motion } from 'framer-motion'
import { Mail, Share2, Award } from 'lucide-react'

export default function Instructor() {
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
      >
        <motion.div
          variants={itemVariants}
          className="relative group"
        >
          {/* Gradient Border Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/40 via-pink-500/20 to-purple-500/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Main Card */}
          <div className="relative glass-dark border border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden group-hover:border-purple-500/50 transition-all duration-300">
            {/* Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
              {/* Left - Instructor Image Placeholder */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center md:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="w-64 h-72 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-white/30 flex items-center justify-center overflow-hidden shadow-2xl"
                >
                  <div className="text-center space-y-4">
                    <div className="text-7xl">👨‍🏫</div>
                    <p className="text-gray-400 text-sm">Senior Design Partner</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right - Instructor Info */}
              <motion.div
                variants={containerVariants}
                className="md:col-span-2 space-y-6"
              >
                {/* Label */}
                <motion.span
                  variants={itemVariants}
                  className="inline-block text-purple-400 font-semibold text-sm tracking-widest"
                >
                  LEAD INSTRUCTOR
                </motion.span>

                {/* Name */}
                <motion.h2 variants={itemVariants} className="heading-md">
                  Meet Elena Vance
                </motion.h2>

                {/* Bio */}
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-400 leading-relaxed"
                >
                  Elena is a Senior Design Partner with over 15 years of experience leading creative teams at Fortune 500 companies. She has mentored over 50,000 students worldwide and specializes in bridging the gap between design and engineering.
                </motion.p>

                {/* Social Icons */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-4 pt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-purple-500/50 transition-all"
                  >
                    <Award className="w-5 h-5 text-purple-400" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-purple-500/50 transition-all"
                  >
                    <Mail className="w-5 h-5 text-purple-400" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-purple-500/50 transition-all"
                  >
                    <Share2 className="w-5 h-5 text-purple-400" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
