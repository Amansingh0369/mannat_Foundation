import React, { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  animation?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0, 
  animation = 'fade-up' 
}) => {
  return (
    <div 
      data-aos={animation}
      data-aos-delay={delay * 1000}
      data-aos-duration="800"
    >
      {children}
    </div>
  );
};

export default AnimatedSection;