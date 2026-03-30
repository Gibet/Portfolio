import React from 'react'

interface ContainerProps {
  class ?: string
  children: React.ReactNode
  variant ?: 'default' | 'wide'
}

export const Container = ({ children, variant }: ContainerProps) => {
  const variantClasses = variant === 'wide' ? 'container-wide' : 'container';
  return (
    <div className={variantClasses}>
      {children}
    </div>
  )
}