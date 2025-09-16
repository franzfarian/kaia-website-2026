'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface WorkflowStepProps {
  step: number
  title: string
  description: string
  icon?: ReactNode
  isLast?: boolean
  delay?: number
}

export default function WorkflowStep({ step, title, description, icon, isLast = false, delay = 0 }: WorkflowStepProps) {
  return (
    <div className="relative flex items-start">
      {/* Step indicator and connecting line */}
      <div className="flex flex-col items-center mr-6">
        {/* Step circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay }}
          whileHover={{ scale: 1.1 }}
          className="relative z-10 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
        >
          {icon || (
            <span className="text-white font-bold text-lg">
              {step}
            </span>
          )}
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Connecting line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
            className="w-px bg-gradient-to-b from-purple-300 to-gray-300 mt-4 h-20"
            style={{ transformOrigin: 'top' }}
          />
        )}
      </div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="flex-1 pb-12"
      >
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 group">
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-xl" />
        </div>
      </motion.div>
    </div>
  )
}