
import { useState } from "react";
import ImageCard from "./ImageCard";

const SAMPLE_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Remote Work Setup",
    author: "Sarah Johnson",
    description: "A modern workspace designed for remote work, featuring ergonomic furniture and the latest tech accessories.",
    tags: ["workspace", "technology", "remote-work"],
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Tech Workspace",
    author: "John Smith",
    description: "A clean and minimalist tech setup optimized for productivity.",
    tags: ["tech", "minimal", "workspace"],
  },
  {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Circuit Patterns",
    author: "Alex Chen",
    description: "Abstract patterns formed by electronic circuits on a motherboard.",
    tags: ["electronics", "abstract", "technology"],
  },
  {
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Code Session",
    author: "Maria Garcia",
    description: "A developer's coding session captured in the midst of problem-solving.",
    tags: ["coding", "development", "technology"],
  },
  {
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Productivity Space",
    author: "David Lee",
    description: "An organized desk setup designed for maximum productivity.",
    tags: ["productivity", "workspace", "organization"],
  },
];

const ImageGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_IMAGES.map((image, index) => (
          <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
            <ImageCard image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
