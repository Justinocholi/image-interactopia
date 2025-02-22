
import ImageGallery from "../components/ImageGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Interactive Gallery</h1>
            <p className="text-lg text-gray-400">Explore our curated collection of images</p>
          </div>
          <ImageGallery />
        </div>
      </div>
    </div>
  );
};

export default Index;
