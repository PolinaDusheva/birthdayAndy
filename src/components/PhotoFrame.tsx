import { useState } from 'react';

interface PhotoFrameProps {
  placeholder?: boolean;
  className?: string;
  imageSrc?: string;
}

const PhotoFrame = ({ placeholder = true, className = '', imageSrc }: PhotoFrameProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-xl shadow-lg bg-card border-2 border-accent hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}>
      {placeholder ? (
        <div className="aspect-square bg-gradient-to-br from-accent to-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground p-4">
            <div className="w-12 h-12 mx-auto mb-2 bg-muted-foreground/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">📷</span>
            </div>
            <p className="text-sm font-medium">Your Photo Here</p>
          </div>
        </div>
      ) : (
        <img
          src={imageSrc || "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop"}
          alt="Memory together"
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default PhotoFrame;