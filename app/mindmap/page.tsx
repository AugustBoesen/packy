'use client';
import Content from '../../components/content';
import { useState } from 'react';

export default function Mindmap() {
  const [currentContent, setCurrentContent] = useState('');
  const handleContentChange = (newContent: Array<any>) => {
    setCurrentContent(JSON.stringify(newContent));
  };
  return (
    <main>
      <>
        <Content
          currentContent={currentContent}
          setCurrentContent={handleContentChange}
        />
        <p className='bg-green-500'>{currentContent}</p>
      </>
    </main>
  );
}
