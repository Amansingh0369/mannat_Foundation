"use client"

import type React from "react"
import { useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Link } from "react-router-dom"
import { Sparkles, ChevronRight, ArrowRight } from "lucide-react"

interface CounterProps {
  from: number
  to: number
  duration?: number
}

const Counter: React.FC<CounterProps> = ({ from, to, duration = 2 }) => {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    })
    return controls.stop
  }, [count, to, duration])

  return <motion.span>{rounded}</motion.span>
}

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 text-white overflow-hidden min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute  inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        {/* Animated gradient orbs - enhanced colors */}
        <motion.div
          className="absolute  -top-40 -left-40 w-80 h-80 bg-violet-600 rounded-full opacity-30 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-60 left-1/3 w-[30rem] h-[30rem] bg-fuchsia-600 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-500 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Premium overlay with subtle noise texture */}
      <div className="absolute  inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Subtle diagonal lines */}
      <div className="absolute  inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:20px_20px] opacity-10"></div>

      {/* Content */}
      <div className="relative container   mx-auto px-6 py-20 md:py-16 flex flex-col items-center z-10">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto mb-20 relative"
        >
          {/* Decorative elements - enhanced */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute -top-10 -left-10 text-amber-400 opacity-80"
          >
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="absolute -bottom-6 -right-6 text-amber-400 opacity-80"
          >
            
          </motion.div>

          {/* Main heading with staggered animation */}
          <div className="text-center mb-8 ">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-extralight mb-6 leading-tight tracking-tight">
                <span className="block md:inline text-slate-100">SKILL</span>{" "}
                <motion.span
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 inline-block drop-shadow-lg text-5xl md:text-7xl lg:text-8xl"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 8px rgba(251, 191, 36, 0.6)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  SPECIALIST
                </motion.span>{" "}
                <span className="block md:inline mt-2 md:mt-0 text-slate-100">MANNAT FOUNDATION</span>
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl mb-16 font-light text-slate-200 max-w-3xl mx-auto text-center leading-relaxed">
              Where Talent meets <span className="italic">Opportunities</span>
            </p>

            {/* Enhanced subtle underline */}
            <motion.div
              className="absolute left-1/2 -bottom-4 h-0.5 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              style={{ x: "-50%" }}
              transition={{ delay: 0.8, duration: 1.2 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <Link
              to="/services"
              className="group relative overflow-hidden bg-gradient-to-r from-violet-700 to-indigo-600 text-white font-medium uppercase py-4 px-10 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105 transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                Our Services
                <motion.div
                  initial={{ x: -4 }}
                  animate={{ x: 0 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                    duration: 0.8,
                  }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-800 to-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Enhanced shine effect */}
              <motion.div
                className="absolute top-0 -left-full h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{ left: "150%" }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </Link>

            <Link
              to="/contact"
              className="group relative overflow-hidden bg-transparent uppercase text-white font-medium py-4 px-10 rounded-full border-2 border-white/70 transition-all duration-300 hover:border-amber-300 hover:bg-white/5 hover:scale-105 transform hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <motion.div
                  animate={{
                    x: [0, 4, 0],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </span>

              {/* Enhanced shine effect */}
              <motion.div
                className="absolute top-0 -left-full h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{ left: "150%" }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3.5,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Achievements Section - enhanced */}
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-light inline-block">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 font-semibold">
                Achievements
              </span>
            </h2>

            {/* Decorative line */}
            <motion.div
              className="absolute left-1/2 -bottom-4 h-0.5 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "30%" }}
              style={{ x: "-50%" }}
              transition={{ delay: 1.4, duration: 1 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-2xl transition-all duration-300 border border-white/10 hover:border-amber-300/30"
              >
                {/* Background glow effect - enhanced */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 mb-4 group-hover:from-amber-300 group-hover:to-amber-200 transition-colors">
                    {typeof achievement.value === "number" ? (
                      <>
                        <Counter from={0} to={achievement.value} duration={2.5} />
                        {achievement.suffix}
                      </>
                    ) : (
                      achievement.value
                    )}
                  </h3>
                  <p className="text-base text-slate-200 leading-relaxed">{achievement.description}</p>
                </div>

                {/* Corner accent - enhanced */}
                <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-gradient-to-tl from-amber-500/20 to-transparent rounded-tl-3xl"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const achievements = [
  {
    value: 5000,
    suffix: "+",
    description: "Successful Placements in reputable companies across various industries",
  },
  {
    value: 30,
    suffix: "+",
    description: "Trusted Companies partnered for recruitment and manpower services",
  },
  {
    value: 100,
    suffix: "+",
    description: "Training programs organized to improve employability",
  },
  {
    value: 5000,
    suffix: "+",
    description: "Unemployed individuals helped to secure jobs and build stable careers",
  },
  {
    value: "Expanding",
    description: "Network with established connections with top employers in multiple regions",
  },
  {
    value: "Career",
    description: "Development through consultancy sessions, helping professionals enhance skills",
  },
]

export default HeroSection

