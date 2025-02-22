
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageCardProps {
  image: {
    url: string;
    title: string;
    author: string;
    description?: string;
    tags?: string[];
  };
}

const ImageCard = ({ image }: ImageCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div 
        className="group relative overflow-hidden rounded-lg bg-gallery-card shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
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

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
          <div className="grid gap-6">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{image.title}</h2>
                <p className="text-gray-600">by {image.author}</p>
              </div>
              {image.description && (
                <p className="text-gray-700 leading-relaxed">{image.description}</p>
              )}
              {image.tags && (
                <div className="flex flex-wrap gap-2">
                  {image.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4">Comments</h3>
                <div className="space-y-4">
                  <textarea
                    placeholder="Add a comment..."
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={3}
                  />
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                    Post Comment
                  </button>
                  <div className="mt-6 space-y-4">
                    {/* Comments will be rendered here */}
                    <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageCard;
