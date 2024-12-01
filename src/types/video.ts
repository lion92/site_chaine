export interface Video {
  lien: string;
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export interface VideoSection {
  title: string;
  videos: Video[];
}