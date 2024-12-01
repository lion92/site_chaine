import React from 'react';
import { Play } from 'lucide-react';
import { Video } from '../types/video';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
      <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
          {video.lien}
      </div>


      );
}