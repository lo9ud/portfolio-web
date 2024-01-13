"use client";

export default function Loader() {
  let dots = 8;
  let svgInner = Array.from({ length: dots - 1 }, (_, i) => {
    return (
      <circle
        key={i}
        id={`loader-dot-${i}`}
        r={8-i/2}
        cx={40 * Math.cos((Math.PI * -i * 2) / dots)}
        cy={40 * Math.sin((Math.PI * -i * 2) / dots)}
        fill="#000000"
        fillOpacity={(dots - i - 1) / dots}
      />
    );
  });
  return (
    <div id="loader-outer" className="w-full h-full flex flex-row items-center align-middle justify-center place-items-center">
      <div id="loader-inner" className="w-1/12 min-w-16 ms-2">
          <svg viewBox="-50 -50 100 100" className="animate-spin">
            {svgInner}
          </svg>
      </div>
    </div>
  );
}
