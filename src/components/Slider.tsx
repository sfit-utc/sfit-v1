import { useState, useEffect, useCallback } from "react";

function Slider() {
  const [slides, setSlides] = useState<HTMLDivElement[]>([]);
  const [dotList, setDotList] = useState<HTMLDivElement[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    // Convert NodeList to Array
    const slidesArray = Array.from(
      document.querySelectorAll(".slide")
    ) as HTMLDivElement[];
    setSlides(slidesArray);
    const dotArray = Array.from(
      document.querySelectorAll(".dot")
    ) as HTMLDivElement[];
    setDotList(dotArray);
  }, []);

  // useCallback to memoize changeSlide
  const changeSlide = useCallback(
    (index: number) => {
      slides.forEach((slide, idx) => {
        slide.classList.toggle("visible", idx === index);
        slide.classList.toggle("opacity-100", idx === index);
        slide.classList.toggle("invisible", idx !== index);
        slide.classList.toggle("opacity-0", idx !== index);
      });

      dotList.forEach((dot, idx) => {
        dot.classList.toggle("visible", idx === index);
        dot.classList.toggle("invisible", idx !== index);
      });
    },
    [slides, dotList]
  );

  useEffect(() => {
    changeSlide(activeIdx);
  }, [activeIdx, changeSlide]);

  const prevButton = () => {
    setActiveIdx((prevIdx) => {
      const newIdx = (prevIdx - 1 + slides.length) % slides.length;
      changeSlide(newIdx);
      return newIdx;
    });
  };

  const nextButton = () => {
    setActiveIdx((prevIdx) => {
      const newIdx = (prevIdx + 1) % slides.length;
      changeSlide(newIdx);
      return newIdx;
    });
  };

  return (
    <div
      className="relative flex items-center justify-center
                        xl:w-[40rem] xl:h-[25rem] w-[35rem] h-[25rem]
                        [&>div]:absolute [&>div]:w-[30rem] [&>div]:h-[20rem]
                        xl:[&>div]:w-[34.5rem] xl:[&>div]:h-[23rem]
                        [&>div]:shadow-[0px_13px_15.8px_0px_rgba(0,0,0,0.25)] 
                        [&>div]:bg-cover [&>div]:bg-no-repeat [&>div]:bg-center 
                        [&>div]:transition-opacity [&>div]:duration-500 [&>div]:ease-in-out"
    >
      {/* Img */}
      <div className="slide bg-[url(./assets/techclub.jpg)] visible rounded rounded-5"></div>
      <div className="slide bg-[url(./assets/hackathonVPBank.jpg)] invisible rounded rounded-5"></div>
      <div className="slide bg-[url(./assets/techclub.jpg)] invisible rounded rounded-5"></div>
      <div className="slide bg-[url(./assets/hackathonVPBank.jpg)] invisible rounded rounded-5"></div>

      {/* Button */}
      <button onClick={prevButton} className="prev absolute left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M28 14C28 11.2311 27.1789 8.52431 25.6406 6.22202C24.1022 3.91973 21.9157 2.12531 19.3576 1.06569C16.7994 0.00605965 13.9845 -0.271187 11.2687 0.269007C8.553 0.8092 6.05844 2.14257 4.10051 4.10051C2.14257 6.05844 0.8092 8.553 0.269007 11.2687C-0.271187 13.9845 0.00605965 16.7994 1.06569 19.3576C2.12531 21.9157 3.91973 24.1022 6.22202 25.6406C8.52431 27.1789 11.2311 28 14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14ZM22 15L9.85 15L15.43 20.607L14 22L6 14L14 6L15.43 7.427L9.85 13L22 13V15Z"
            fill="#F8F8F8"
          />
        </svg>
      </button>
      <button onClick={nextButton} className="next absolute right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M0 14C0 16.7689 0.821086 19.4757 2.35943 21.778C3.89777 24.0803 6.08427 25.8747 8.64243 26.9343C11.2006 27.9939 14.0155 28.2712 16.7313 27.731C19.447 27.1908 21.9416 25.8574 23.8995 23.8995C25.8574 21.9416 27.1908 19.447 27.731 16.7313C28.2712 14.0155 27.9939 11.2006 26.9343 8.64243C25.8747 6.08427 24.0803 3.89777 21.778 2.35943C19.4757 0.821086 16.7689 0 14 0C10.287 0 6.72601 1.475 4.1005 4.1005C1.475 6.72601 0 10.287 0 14ZM6 13H18.15L12.57 7.393L14 6L22 14L14 22L12.57 20.573L18.15 15H6V13Z"
            fill="#F8F8F8"
          />
        </svg>
      </button>

      {/* Counter */}
      <div
        className="absolute 
                            [&>div]:absolute
                            [&>div]:bottom-[-10%]
                            [&>div]:left-[50%]
                            [&>div]:translate-x-[-50%]
                            [&>div]:translate-y-[-50%]"
      >
        <div className="dot visible">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="8"
            viewBox="0 0 50 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#808080" />
            <circle cx="18" cy="4" r="4" fill="#D9D9D9" />
            <circle cx="32" cy="4" r="4" fill="#D9D9D9" />
            <circle cx="46" cy="4" r="4" fill="#D9D9D9" />
          </svg>
        </div>

        <div className="dot invisible">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="8"
            viewBox="0 0 50 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#D9D9D9" />
            <circle cx="18" cy="4" r="4" fill="#808080" />
            <circle cx="32" cy="4" r="4" fill="#D9D9D9" />
            <circle cx="46" cy="4" r="4" fill="#D9D9D9" />
          </svg>
        </div>

        <div className="dot invisible">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="8"
            viewBox="0 0 50 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#D9D9D9" />
            <circle cx="18" cy="4" r="4" fill="#D9D9D9" />
            <circle cx="32" cy="4" r="4" fill="#808080" />
            <circle cx="46" cy="4" r="4" fill="#D9D9D9" />
          </svg>
        </div>

        <div className="dot invisible">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="8"
            viewBox="0 0 50 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#D9D9D9" />
            <circle cx="18" cy="4" r="4" fill="#D9D9D9" />
            <circle cx="32" cy="4" r="4" fill="#D9D9D9" />
            <circle cx="46" cy="4" r="4" fill="#808080" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Slider;
