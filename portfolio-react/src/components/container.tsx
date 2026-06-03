import React from 'react'

interface ContainerProps
  extends React.ComponentProps<'div'> {
  variant ?: 'default' | 'wide' | 'body' | 'header' | 'text';
}

const variants = {
  default: 'container',
  wide: 'container wide textured-main',
  body: 'container sect-body textured-main',
  header: 'sect-header gap-4 textured-main',
  text: 'container sect-text textured-main'
}

export const Container = ({variant = 'default', children, className}: ContainerProps) => {
  const variantClasses = variants[variant]
  return (
    <div className={`${variantClasses} ${className || ''}`}>
      {children}
    </div>
  )
}