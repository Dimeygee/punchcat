'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleCursorPosition = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleCursorPosition);

    return () => {
      document.removeEventListener('mousemove', handleCursorPosition);
    };
  }, []);

  return (
    <div style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        pointerEvents: 'none',
        zIndex: 9999,
        width:"42px",
        height:"32px",
        transition: "transform 0.8s ease ",
      }} className='custom'>
      <div className='relative w-full h-full' style={{ pointerEvents: 'none' }}>
      <Image src="/assets/Group.png" alt="Custom Cursor" fill={true} style={{ pointerEvents: 'none' }} />
      </div>
    </div>
  );
};


export default CustomCursor;