'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FeatureTileProps {
  icon: ReactNode
  title: string
  description: string
  gradient?: string
  delay?: number
}

export default function FeatureTile({ icon, title, description, gradient, delay = 0 }: FeatureTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.3 } 
      }}
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Background gradient overlay on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${gradient || 'bg-gradient-to-br from-purple-500 to-blue-600'}`} />
      
      {/* Icon with glow effect */}
      <div className="relative z-10 mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/25 transition-all duration-300">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-10 translate-x-10" />
    </motion.div>
  )
}