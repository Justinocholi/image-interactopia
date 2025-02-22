
import { useState } from "react";

interface ImageCardProps {
  image: {
    url: string;
    title: string;
    author: string;
  };
}

const ImageCard = ({ image }: ImageCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group relative overflow-hidden rounded-lg bg-gallery-card shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
      <div className="aspect-square w-full overflow-hidden">
        <div className={`relative h-full w-full ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-700`}>
          <img
            src={image.url}
            alt={image.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 transform transition-transform duration-300">
        <h3 className="text-lg font-medium text-gray-900 truncate">{image.title}</h3>
        <p className="text-sm text-gray-600">by {image.author}</p>
      </div>
    </div>
  );
};

export default ImageCard;
