'use client';
import Content from '../../components/content';
import { useState } from 'react';
import ProgressBar from '@/components/progressbar';

export default function Mindmap() {
  const [currentContent, setCurrentContent] = useState('');
  const handleContentChange = (newContent: Array<any>) => {
    setCurrentContent(JSON.stringify(newContent));
  };
  return (
    <>
      <>
        <Content
          currentContent={currentContent}
          setCurrentContent={handleContentChange}
        />
      </>
    </>
  );
}
