'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface StatsTileProps {
  value: number
  suffix?: string
  label: string
  description?: string
  delay?: number
  color?: 'purple' | 'blue' | 'green' | 'orange'
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      count.set(value)
    }
  }, [count, inView, value])

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  )
}

export default function StatsTile({ value, suffix, label, description, delay = 0, color = 'purple' }: StatsTileProps) {
  const colorClasses = {
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      text: 'text-purple-600',
      glow: 'group-hover:shadow-purple-500/20'
    },
    blue: {
      gradient: 'from-blue-500 to-blue-600',
      text: 'text-blue-600',
      glow: 'group-hover:shadow-blue-500/20'
    },
    green: {
      gradient: 'from-green-500 to-green-600',
      text: 'text-green-600',
      glow: 'group-hover:shadow-green-500/20'
    },
    orange: {
      gradient: 'from-orange-500 to-orange-600',
      text: 'text-orange-600',
      glow: 'group-hover:shadow-orange-500/20'
    }
  }

  const colors = colorClasses[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className={`group relative p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg ${colors.glow} transition-all duration-300`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-50 rounded-xl" />
      
      <div className="relative z-10 text-center">
        {/* Animated number */}
        <div className={`text-3xl md:text-4xl font-bold ${colors.text} mb-2`}>
          <AnimatedCounter value={value} suffix={suffix} />
        </div>
        
        {/* Label */}
        <h4 className="text-lg font-semibold text-gray-900 mb-1">
          {label}
        </h4>
        
        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600">
            {description}
          </p>
        )}
      </div>
      
      {/* Decorative gradient line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  )
}