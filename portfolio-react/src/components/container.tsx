import React from 'react'

interface ContainerProps
  extends React.ComponentProps<'div'> {
  variant ?: 'default' | 'wide' | 'body' | 'header';
}

const variants = {
  default: 'container',
  wide: 'container wide',
  body: 'container sect-body',
  header: 'container sect-header'
}

export const Container = ({variant = 'default', children, className}: ContainerProps) => {
  const variantClasses = variants[variant]
  return (
    <div className={`${variantClasses} ${className || ''}`}>
      {children}
    </div>
  )
}