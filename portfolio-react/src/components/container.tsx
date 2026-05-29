import React from 'react'

interface ContainerProps
  extends React.ComponentProps<'div'> {
  variant ?: 'default' | 'wide' | 'body' | 'header' | 'text';
}

const variants = {
  default: 'container',
  wide: 'container wide',
  body: 'container sect-body',
  header: 'sect-header gap-4',
  text: 'container sect-text'
}

export const Container = ({variant = 'default', children, className}: ContainerProps) => {
  const variantClasses = variants[variant]
  return (
    <div className={`${variantClasses} ${className || ''}`}>
      {children}
    </div>
  )
}