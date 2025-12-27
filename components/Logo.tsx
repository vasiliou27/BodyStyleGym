export default function Logo() {
  return (
    <div className="flex items-center space-x-1 sm:space-x-2">
      {/* BS with green outline - B is black, S is gray */}
      <div className="flex items-baseline">
        <span className="text-2xl sm:text-3xl md:text-4xl font-black text-black [text-shadow:1px_1px_0_#00ff00,-1px_-1px_0_#00ff00,1px_-1px_0_#00ff00,-1px_1px_0_#00ff00]">
          B
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-400 [text-shadow:1px_1px_0_#00ff00,-1px_-1px_0_#00ff00,1px_-1px_0_#00ff00,-1px_1px_0_#00ff00]">
          S
        </span>
      </div>
      
      {/* Dumbbell icon above TYLE */}
      <div className="flex flex-col items-center -mb-2 sm:-mb-3">
        <div className="w-4 sm:w-5 h-0.5 bg-black border border-primary"></div>
        <div className="w-5 sm:w-6 h-1 bg-black border border-primary my-0.5"></div>
        <div className="w-4 sm:w-5 h-0.5 bg-black border border-primary"></div>
      </div>
      
      {/* TYLE text */}
      <span className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 -mb-2 sm:-mb-3">TYLE</span>
      
      {/* BODY vertical text - positioned to left of GYM */}
      <div className="flex flex-col -ml-1 sm:-ml-2">
        <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-black [text-shadow:0.5px_0.5px_0_#00ff00,-0.5px_-0.5px_0_#00ff00] leading-tight">
          B<br />O<br />D<br />Y
        </span>
      </div>
      
      {/* GYM text */}
      <div className="flex flex-col">
        <span className="text-2xl sm:text-3xl md:text-4xl font-black text-black [text-shadow:1px_1px_0_#00ff00,-1px_-1px_0_#00ff00,1px_-1px_0_#00ff00,-1px_1px_0_#00ff00]">
          GYM
        </span>
        <div className="h-0.5 w-full bg-primary mt-0.5 sm:mt-1"></div>
      </div>
    </div>
  );
}

