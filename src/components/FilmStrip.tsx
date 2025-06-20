import PhotoFrame from './PhotoFrame';

interface FilmStripProps {
  direction?: 'left' | 'right';
}

const FilmStrip = ({ direction = 'left' }: FilmStripProps) => {
  const photos = Array.from({ length: 16 }, (_, i) => i % 8); // Duplicate for seamless loop

  return (
    <div className="relative overflow-hidden py-8">
      {/* Film strip background */}
      <div className="relative bg-gray-800 py-4 shadow-2xl">
        {/* Film perforations - top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gray-900 flex">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={`top-${i}`} className="flex-1 border-r border-gray-700">
              <div className="w-full h-full bg-gray-800 mx-auto" style={{ width: '60%' }}></div>
            </div>
          ))}
        </div>
        
        {/* Film perforations - bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-900 flex">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={`bottom-${i}`} className="flex-1 border-r border-gray-700">
              <div className="w-full h-full bg-gray-800 mx-auto" style={{ width: '60%' }}></div>
            </div>
          ))}
        </div>

        {/* Photo frames container */}
        <div className={`flex gap-2 px-4 ${direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'}`}>
          {photos.map((_, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative">
              {/* Film frame border */}
              <div className="absolute inset-0 bg-gray-700 rounded-sm">
                <div className="absolute inset-1 bg-black rounded-sm overflow-hidden">
                  <PhotoFrame placeholder={true} className="w-full h-full border-0 rounded-none shadow-none" />
                </div>
              </div>
              
              {/* Frame number */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 font-mono">
                {String((index % 8) + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Film strip label */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-xs text-gray-400 font-mono tracking-wider">
          KODAK 35mm
        </div>
      </div>

      {/* Film strip shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>
    </div>
  );
};

export default FilmStrip;