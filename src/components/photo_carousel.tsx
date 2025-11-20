import { useState } from "react";
export type PhotoCarouselProps = {
  images: { path: string; alt: string }[];
};
function PhotoCarousel(props: { images: { path: string; alt: string }[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current - 1 + props.images.length) % props.images.length);
  };

  const next = () => {
    setCurrent((current + 1) % props.images.length);
  };
  return (
    <div className="relative w-full max-w-md max-h-fit">
      <div className="flex items-center justify-center w-full max-w-md mx-auto">
        <img
          src={props.images[current]?.path}
          alt={`${props.images[current]?.alt} image`}
          className="w-full lg:rounded-2xl object-cover"
        />
      </div>

      {/* Left / right arrows */}
      {props.images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="
          absolute left-3 top-1/2 -translate-y-1/2
          rounded-full bg-black/50 text-white
          p-2 text-sm
        "
          >
            ‹
          </button>

          <button
            onClick={next}
            className="
          absolute right-3 top-1/2 -translate-y-1/2
          rounded-full bg-black/50 text-white
          p-2 text-sm
        "
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {/* <div className="mt-3 flex justify-center gap-2">
        {props.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition
              ${index === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div> */}
    </div>
  );
}
export default PhotoCarousel;
