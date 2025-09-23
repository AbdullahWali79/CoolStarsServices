import React from 'react';

// Responsive Table Component for Mobile-First Design
const ResponsiveTable = ({ 
  data = [], 
  columns = [], 
  mobileCardView = true,
  className = '',
  onRowClick,
  emptyMessage = 'No data available'
}) => {
  if (!data.length) {
    return (
      <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 ${className}`}>
        <div className='text-center py-16 px-4'>
          <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <span className='text-3xl'>📋</span>
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>No Data Found</h3>
          <p className='text-gray-600'>{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 ${className}`}>
      
      {/* Desktop Table View */}
      <div className={`${mobileCardView ? 'hidden lg:block' : 'block'} overflow-x-auto`}>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b border-gray-200'>
            <tr>
              {columns.map((column, index) => (
                <th 
                  key={index} 
                  className={`px-4 py-3 text-left text-sm font-semibold text-gray-900 ${column.className || ''}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {data.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className={`hover:bg-gray-50 transition-colors duration-200 ${onRowClick ? 'cursor-pointer' : ''}`}
                onClick={() => onRowClick && onRowClick(row, rowIndex)}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className={`px-4 py-3 ${column.cellClassName || ''}`}>
                    {column.render ? column.render(row, rowIndex) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      {mobileCardView && (
        <div className='lg:hidden'>
          <div className='divide-y divide-gray-200'>
            {data.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className={`p-3 sm:p-4 hover:bg-gray-50 transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
                onClick={() => onRowClick && onRowClick(row, rowIndex)}
              >
                {/* Mobile card content */}
                <div className='space-y-2'>
                  {columns
                    .filter(col => !col.hideOnMobile)
                    .map((column, colIndex) => (
                      <div key={colIndex} className={column.mobileClassName || ''}>
                        {column.mobileRender 
                          ? column.mobileRender(row, rowIndex)
                          : (
                            <div className='flex justify-between items-start'>
                              <span className='text-xs text-gray-500 font-medium'>
                                {column.mobileLabel || column.header}:
                              </span>
                              <span className='text-sm text-gray-900 ml-2 text-right'>
                                {column.render ? column.render(row, rowIndex) : row[column.key]}
                              </span>
                            </div>
                          )
                        }
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Utility component for mobile-friendly table cells
export const TableCell = ({ 
  icon, 
  title, 
  subtitle, 
  badge, 
  className = '' 
}) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {icon && (
      <div className='w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'>
        {icon}
      </div>
    )}
    <div className='flex-1 min-w-0'>
      <h3 className='font-semibold text-gray-900 text-sm truncate'>{title}</h3>
      {subtitle && <p className='text-xs text-gray-500 truncate'>{subtitle}</p>}
      {badge && <div className='mt-1'>{badge}</div>}
    </div>
  </div>
);

// Utility component for badges
export const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'sm',
  className = '' 
}) => {
  const variants = {
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    gray: 'bg-gray-100 text-gray-800'
  };

  const sizes = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm'
  };

  return (
    <span className={`
      inline-flex items-center gap-1 rounded-full font-medium
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `}>
      {children}
    </span>
  );
};

// Utility component for action buttons
export const ActionButtons = ({ 
  buttons = [], 
  direction = 'row',
  className = '' 
}) => (
  <div className={`
    flex gap-2
    ${direction === 'row' ? 'flex-row' : 'flex-col'}
    ${className}
  `}>
    {buttons.map((button, index) => (
      <button
        key={index}
        onClick={button.onClick}
        className={`
          px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
          flex items-center justify-center gap-1
          ${button.className || 'bg-blue-100 hover:bg-blue-200 text-blue-600'}
        `}
        {...button.props}
      >
        {button.icon && <span>{button.icon}</span>}
        {button.label}
      </button>
    ))}
  </div>
);

export default ResponsiveTable;
