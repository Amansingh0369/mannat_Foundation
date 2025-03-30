"use client"

import React, { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { Sparkles, ChevronRight, ArrowRight } from "lucide-react"

interface CounterProps {
  from: number
  to: number
  duration?: number
}

const Counter: React.FC<CounterProps> = ({ from, to, duration = 2 }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const startTime = useRef<number>(0)
  const frameId = useRef<number>(0)

  useEffect(() => {
    if (!ref.current) return

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = Math.min((timestamp - startTime.current) / (duration * 1000), 1)
      const current = Math.round(from + progress * (to - from))
      
      if (ref.current) ref.current.textContent = current.toString()
      
      if (progress < 1) {
        frameId.current = requestAnimationFrame(animate)
      }
    }

    frameId.current = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(frameId.current)
  }, [from, to, duration])

  return <span ref={ref}>{from}</span>
}

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 text-white overflow-hidden min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        {/* Animated gradient orbs - enhanced colors */}
        <div
          className="absolute -top-40 -left-40 w-80 h-80 bg-violet-600 rounded-full opacity-30 blur-3xl animate-float-slow"
        />
        <div
          className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500 rounded-full opacity-20 blur-3xl animate-float-reverse"
        />
        <div
          className="absolute -bottom-60 left-1/3 w-[30rem] h-[30rem] bg-fuchsia-600 rounded-full opacity-20 blur-3xl animate-float-medium"
        />
        <div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-500 rounded-full opacity-10 blur-3xl animate-float-slow"
        />
      </div>

      {/* Premium overlay with subtle noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Subtle diagonal lines */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:20px_20px] opacity-10"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 md:py-16 flex flex-col items-center z-10">
        {/* Hero Content */}
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          className="max-w-6xl mx-auto mb-20 relative"
        >
          {/* Decorative elements - enhanced */}
          <div
            data-aos="fade-in"
            data-aos-delay="1200"
            data-aos-duration="1000"
            className="absolute -top-10 -left-10 text-amber-400 opacity-80"
          >
            
          </div>

          <div
            data-aos="fade-in"
            data-aos-delay="1400"
            data-aos-duration="1000"
            className="absolute -bottom-6 -right-6 text-amber-400 opacity-80"
          >
            
          </div>

          {/* Main heading with staggered animation */}
          <div className="text-center mb-8">
            <div
              data-aos="fade-down"
              data-aos-duration="800"
              className="inline-block"
            >
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-extralight mb-6 leading-tight tracking-tight">
                <span className="block md:inline text-slate-100">SKILL</span>{" "}
                <span
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 inline-block drop-shadow-lg text-5xl md:text-7xl lg:text-8xl hover:scale-105 transition-transform"
                >
                  SPECIALIST
                </span>{" "}
                <span className="block md:inline mt-2 md:mt-0 text-slate-100">MANNAT FOUNDATION</span>
              </h1>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            className="relative"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl mb-16 font-light text-slate-200 max-w-3xl mx-auto text-center leading-relaxed">
              Where Talent meets <span className="italic">Opportunities</span>
            </p>

            {/* Enhanced subtle underline */}
            <div
              data-aos="width"
              data-aos-delay="800"
              data-aos-duration="1200"
              className="absolute left-1/2 -bottom-4 h-0.5 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent w-0 aos-animate"
              style={{ transform: "translateX(-50%)" }}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <Link
              to="/services"
              className="group relative overflow-hidden bg-gradient-to-r from-violet-700 to-indigo-600 text-white font-medium uppercase py-4 px-10 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105 transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                Our Services
                <div className="animate-chevron">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-800 to-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Enhanced shine effect */}
              <div
                className="absolute top-0 -left-full h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine"
              />
            </Link>

            <Link
              to="/contact"
              className="group relative overflow-hidden bg-transparent uppercase text-white font-medium py-4 px-10 rounded-full border-2 border-white/70 transition-all duration-300 hover:border-amber-300 hover:bg-white/5 hover:scale-105 transform hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <div className="animate-arrow">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </span>

              {/* Enhanced shine effect */}
              <div
                className="absolute top-0 -left-full h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine-delayed"
              />
            </Link>
          </div>
        </div>

        {/* Achievements Section - enhanced */}
        <div className="w-full max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1000"
            className="relative mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-light inline-block">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 font-semibold">
                Achievements
              </span>
            </h2>

            {/* Decorative line */}
            <div
              data-aos="width"
              data-aos-delay="1400"
              data-aos-duration="1000"
              className="absolute left-1/2 -bottom-4 h-0.5 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent w-0 aos-animate"
              style={{ transform: "translateX(-50%)" }}
            />
          </div>

          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="1200"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={1200 + index * 100}
                className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-2xl transition-all duration-300 border border-white/10 hover:border-amber-300/30 hover:scale-103 hover:shadow-xl"
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
              </div>
            ))}
          </div>
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

