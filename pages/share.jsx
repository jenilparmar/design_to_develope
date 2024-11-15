'use client';
import React from 'react';

const ShareButton = ({ code }) => {
    const handleShare = async () => {
        const shareableUrl = `${window.location.origin}/join?code=wgwsdc`;
        const text = `Join using this code: wgwsdc\nAccess the link here: ${shareableUrl}`;
      
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'Join My App',
              text: text,
              url: shareableUrl // Optional, some apps may ignore this
            });
            console.log('Code shared successfully!');
          } catch (error) {
            console.error('Error sharing:', error);
          }
        } else {
          alert('Sharing is not supported on this device. Copy the code manually!');
        }
      };
      

  return (
    <button 
      onClick={handleShare} 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Share Code
    </button>
  );
};

export default ShareButton;
