const GooniesInfoGrid = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* Top Line */}
      <div className="h-px bg-white w-full" />

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-2 gap-px bg-gray-800 flex-grow">
        {/* 1. Release Date */}
        <div className="flex flex-col justify-between p-6 bg-black">
          <div className="text-5xl md:text-6xl font-bold">1985</div>
          <div>
            <p className="text-sm opacity-70">Release date</p>
            <p className="text-lg">June 7, 1985</p>
          </div>
        </div>

        {/* 2. Story by (Image of Spielberg) */}
        <div className="relative overflow-hidden bg-black flex items-center justify-center p-4">
          <img
            src="/img/5d23a6caf743d12a0b3b4c75_steven-min.jpg"
            alt="Steven Spielberg"
            className="w-3/5 md:w-4/5 max-w-xs md:max-w-none object-cover opacity-70 hover:opacity-100 hover:scale-110 transition duration-500"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-sm opacity-70">Story by</p>
            <p className="text-lg">Steven Spielberg</p>
          </div>
        </div>

        {/* 3. Production (Character Image) */}
        <div className="relative overflow-hidden bg-black flex items-center justify-center p-4">
          <img
            src="/img/5d07ef8017bf61e4a0e439b1_sloth.png"
            alt="Sloth"
            className="w-3/5 md:w-4/5 max-w-xs md:max-w-none object-cover opacity-70 hover:opacity-100 hover:scale-110 transition duration-500"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-sm opacity-70">Production</p>
            <p className="text-lg">Amblin Entertainment</p>
          </div>
        </div>

        {/* 4. Distributed by (WB logo) */}
        <div className="flex flex-col items-center justify-center p-6 bg-black text-center">
          <img
            src="/img/5d0803429c4398257ab505c0_logo.png"
            alt="WB"
            className="w-20 md:w-24 mb-3 object-contain"
          />
          <p className="text-sm opacity-70">Distributed by</p>
        </div>

        {/* 5. Budget */}
        <div className="flex flex-col justify-between p-6 bg-black">
          <div className="text-5xl md:text-6xl font-bold">$19M</div>
          <div>
            <p className="text-sm opacity-70">Budget</p>
          </div>
        </div>

        {/* 6. Music by (Piano Image) */}
        <div className="relative overflow-hidden bg-black flex items-center justify-center p-4">
          <img
            src="/img/5d08043c2f4d705660dc08e6_Dave Grusin.jpg"
            alt="Composer"
            className="w-full h-auto max-h-60 object-cover opacity-70 hover:opacity-100 hover:scale-110 transition duration-500"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-sm opacity-70">Music by</p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="h-px bg-white w-full" />
    </div>
  );
};

export default GooniesInfoGrid;
