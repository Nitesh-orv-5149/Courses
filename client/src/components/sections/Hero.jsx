import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-block">
                <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-300 text-sm font-semibold">
                  {/* <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span> */}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      className="w-5 h-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="50"
                    >
                      <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Z" />
                      <path d="m438-338 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                    </svg>
                  </span>
                  <span>                    
                    NEW COURSE RELEASING SOON
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="heading-lg flex flex-col font-black">
                Master Your Future{" "}
                <span className="whitespace-nowrap">
                  with <span className="gradient-text">Expert-Led</span>
                </span>{" "}
                Skills.
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Unlock lifetime access to premium content with secure streaming
              and industry mentorship on the world's most advanced learning
              platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                View Curriculum
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-3 pt-4"
            >
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-[#0f0f1a]"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">
                Joined by <span className="text-white font-semibold">12k+</span>{" "}
                students worldwide
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -inset-6 rounded-[2.2rem] bg-gradient-to-br from-purple-500/30 via-fuchsia-500/15 to-transparent blur-3xl"
            />

            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-full max-w-[560px] glass-dark rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-3 sm:p-4 shadow-[0_20px_80px_rgba(124,58,237,0.24)] overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/5" />

              <div className="relative h-[420px] sm:h-[500px] rounded-[1.6rem] overflow-hidden border border-white/5 bg-black/25">
                <img
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=80"
                  alt="Abstract 3D course visual"
                  className="absolute inset-0 h-full w-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(168,85,247,0.26),transparent_45%),radial-gradient(circle_at_25%_80%,rgba(236,72,153,0.14),transparent_50%)]" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-black/35 px-5 py-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-white font-bold text-2xl">UI/UX Masterclass</h3>
                    <p className="text-gray-300/80 text-base">Advanced Design Systems</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-[0_10px_28px_rgba(168,85,247,0.55)] transition-all flex-shrink-0"
                  >
                    <Play className="w-5 h-5 text-white fill-white" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
