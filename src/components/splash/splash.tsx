import { Suspense } from "react";
import Loader from "@/components/loader";

async function SplashAnimation() {
  await new Promise((r) => setTimeout(r, 5000));
  return <>SPLASH ANIMATION GOES HERE</>;
}

export function Splash() {
  return (
    <div id="splash" className="relative w-full h-56 flex-shrink-0">
      <div id="splash:bg"
        className="absolute w-full h-full top-0 -z-1 bg-[--accent-1] text-center"
      >
        <Suspense fallback={<Loader />}>
          <SplashAnimation />
        </Suspense>
      </div>
      <div id="splash:overlay"
        className="absolute w-full h-full top-0 z-0 bg-black"
        style={{
          WebkitMaskImage: "-webkit-gradient(linear, left bottom, right top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
        }}>
        
      </div>
      <div id="splash:content" 
      className="absolute w-full h-full top-0">
        <div className="h-full flex flex-col justify-end align-bottom p-3">
          <div className="w-max p-1 mb-1 text-lg rounded-tr-lg">
            <h1>LO9UD</h1>
          </div>
          <div className="w-max p-2 text-4xl rounded-tr-xl rounded-br-xl">
            <h2>Adam Kent</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
