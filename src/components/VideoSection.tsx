import React from 'react';
import { VideoCard } from './VideoCard';
import { VideoSection as VideoSectionType } from '../types/video';

interface VideoSectionProps {
  section: VideoSectionType;
}

export function VideoSection({ section }: VideoSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}