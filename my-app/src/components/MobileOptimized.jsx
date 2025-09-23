import React from 'react';

// Mobile-specific utility component for responsive design
const MobileOptimized = ({ 
  children, 
  className = '', 
  mobileClassName = '',
  tabletClassName = '',
  desktopClassName = ''
}) => {
  const baseClasses = className;
  const responsiveClasses = `
    ${mobileClassName ? `sm:${mobileClassName}` : ''}
    ${tabletClassName ? `md:${tabletClassName}` : ''}
    ${desktopClassName ? `lg:${desktopClassName}` : ''}
  `.trim();

  return (
    <div className={`${baseClasses} ${responsiveClasses}`}>
      {children}
    </div>
  );
};

// Mobile-specific grid component
export const MobileGrid = ({ 
  children, 
  cols = 1, 
  smCols = 2, 
  mdCols = 3, 
  lgCols = 4,
  gap = 4,
  className = ''
}) => {
  const gridClasses = `
    grid 
    grid-cols-${cols} 
    sm:grid-cols-${smCols} 
    md:grid-cols-${mdCols} 
    lg:grid-cols-${lgCols}
    gap-${gap}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
};

// Mobile-friendly button component
export const MobileButton = ({ 
  children, 
  onClick, 
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-lg transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${fullWidth ? 'w-full' : ''}
  `;

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm min-h-[40px]',
    md: 'px-4 py-3 text-sm sm:text-base min-h-[44px]',
    lg: 'px-6 py-4 text-base sm:text-lg min-h-[48px]'
  };

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
  };

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

// Mobile-friendly card component
export const MobileCard = ({ 
  children, 
  className = '',
  padding = 'md',
  shadow = true,
  rounded = true
}) => {
  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8'
  };

  const cardClasses = `
    bg-white
    ${rounded ? 'rounded-lg sm:rounded-xl' : ''}
    ${shadow ? 'shadow-sm hover:shadow-md transition-shadow' : ''}
    ${paddingClasses[padding]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

// Mobile-friendly text component
export const MobileText = ({ 
  children, 
  variant = 'body',
  className = '',
  center = false
}) => {
  const variantClasses = {
    h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold',
    h2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold',
    h3: 'text-lg sm:text-xl md:text-2xl font-semibold',
    h4: 'text-base sm:text-lg md:text-xl font-semibold',
    body: 'text-sm sm:text-base',
    small: 'text-xs sm:text-sm',
    caption: 'text-xs'
  };

  const textClasses = `
    ${variantClasses[variant]}
    ${center ? 'text-center' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const Tag = variant.startsWith('h') ? variant : 'p';

  return (
    <Tag className={textClasses}>
      {children}
    </Tag>
  );
};

export default MobileOptimized;
