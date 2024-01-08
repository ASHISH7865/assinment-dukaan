// components/Separator.tsx

import React, { FC } from 'react';

interface SeparatorProps {
  orientation: 'vertical' | 'horizontal';
}

const Separator: FC<SeparatorProps> = ({ orientation = "horizontal" }) => {
  const separatorStyle: React.CSSProperties = {
    width: orientation === 'vertical' ? '1px' : '100%',
    height: orientation === 'horizontal' ? '1px' : '100%',
    backgroundColor: '#e2e2e2', // You can customize the color
    margin: orientation === 'vertical' ? '0 5px' : '', // Adjust spacing as needed
  };

  return <div style={separatorStyle}></div>;
};

export default Separator;
