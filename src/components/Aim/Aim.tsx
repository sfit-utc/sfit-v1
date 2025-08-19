import Stack from "./Stack";
import stack_01 from "../../assets/stack_01.jpg";
import stack_02 from "../../assets/CLB-v2.jpg";
import stack_03 from "../../assets/CLB.jpg";
import stack_04 from "../../assets/stack_04.jpg";
import { useState, useEffect } from "react";

const images = [
  {
    id: 1,
    img: stack_01,
  },
  {
    id: 2,
    img: stack_02,
  },
  {
    id: 3,
    img: stack_03,
  },
  {
    id: 4,
    img: stack_04,
  },
];

function Aim() {
  const [dimensions, setDimensions] = useState({ width: 350, height: 175 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setDimensions({ width: 720, height: 360 });
      } else if (width >= 768) {
        setDimensions({ width: 580, height: 290 });
      } else if (width >= 640) {
        setDimensions({ width: 500, height: 250 });
      } else if (width >= 480) {
        setDimensions({ width: 400, height: 200 });
      } else {
        setDimensions({
          width: Math.min(350, width - 40),
          height: Math.min(175, (width - 40) / 2),
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      id="aim"
      className="relative bg-white w-full min-h-screen overflow-x-hidden"
    >
      {/* Header */}
      <div className="flex justify-center items-center flex-col py-4 sm:py-8 md:py-12">
        <h1 className="mx-2 sm:mx-4 md:mx-24 mt-4 sm:mt-8 md:mt-24 mb-4 sm:mb-6 md:mb-12 italic text-lg sm:text-xl md:text-[2.125rem] font-bold text-[#194C35] tracking-[1.36px] text-center">
          "Đoàn kết - Sáng tạo - Phát triển"
        </h1>
        <div className="w-full flex justify-center px-2 sm:px-4">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={dimensions}
            cardsData={images}
          />
        </div>
        {/* <div className="">
          <img
            src={clb}
            alt="CLB"
            className="w-[300px] md:w-[40rem] h-[150px] md:h-[20rem] object-cover"
          />
        </div> */}
      </div>
      {/* Para */}
      <div
        className="*:font-[montserrat] 
                          mx-4 sm:mx-6 md:mx-10 xl:mx-40 [&>p]:text-center [&>p]:tracking-wider text-sm sm:text-base md:text-lg lg:text-2xl [&>p]:font-semibold [&>p]:text-green-900
                            mt-8 md:mt-14 [&>p]:w-fit [&>p]:leading-relaxed"
      >
        <p className="">
          SFIT được thành lập vào năm 2016 - là CLB trực thuộc và lớn mạnh của
          khoa CNTT Trường đại học Giao thông Vận tải. Đây còn là mái nhà chung
          của những sinh viên có niềm đam mê lập trình, đến từ nhiều ngành học
          như: Công nghệ thông tin, Điện - điện tử, Toán ứng dụng…
        </p>
        <p className="mt-4">
          CLB có nhiều cuộc thi, hoạt động và trải nghiệm thú vị, tạo môi trường
          năng động, rèn luyện cho các thành viên từ những kỹ năng, kiến thức
          chuyên môn cũng như những kỹ năng mềm giúp các thành viên có nhiều
          trải nghiệm hơn để hoàn thiện bản thân trong các lĩnh vực, cũng như
          hoàn thiện mảnh ghép thanh xuân mà sinh viên nào cũng nên có.
        </p>
      </div>

      {/* Circle */}
      <div className="hidden lg:block absolute top-10 left-4 xl:left-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="140"
          viewBox="0 0 230 171"
          fill="none"
          className="xl:w-[230px] xl:h-[171px]"
        >
          <g filter="url(#filter0_d_81_1651)">
            <circle cx="135.5" cy="121.5" r="41.5" fill="#DCAF58" />
          </g>
          <g filter="url(#filter1_d_81_1651)">
            <circle cx="94.5" cy="25.5" r="25.5" fill="#399047" />
          </g>
          <g filter="url(#filter2_d_81_1651)">
            <circle cx="27" cy="108" r="23" fill="#DC9358" />
          </g>
          <g filter="url(#filter3_d_81_1651)">
            <circle cx="213" cy="147" r="13" fill="#39906A" />
          </g>
          <defs>
            <filter
              id="filter0_d_81_1651"
              x="90"
              y="80"
              width="91"
              height="91"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_81_1651"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_81_1651"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_81_1651"
              x="65"
              y="0"
              width="59"
              height="59"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_81_1651"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_81_1651"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_81_1651"
              x="0"
              y="85"
              width="54"
              height="54"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_81_1651"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_81_1651"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_81_1651"
              x="196"
              y="134"
              width="34"
              height="34"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_81_1651"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_81_1651"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="hidden lg:block absolute top-1/2 right-4 xl:right-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="140"
          viewBox="0 0 177 171"
          fill="none"
          className="xl:w-[177px] xl:h-[171px]"
        >
          <g filter="url(#filter0_d_81_1647)">
            <circle cx="45.5" cy="41.5" r="41.5" fill="#267452" />
          </g>
          <g filter="url(#filter1_d_81_1647)">
            <circle cx="147.5" cy="57.5" r="25.5" fill="#194C35" />
          </g>
          <g filter="url(#filter2_d_81_1647)">
            <circle cx="99" cy="140" r="23" fill="#DC9358" />
          </g>
          <defs>
            <filter
              id="filter0_d_81_1647"
              x="0"
              y="0"
              width="91"
              height="91"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_81_1647"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_81_1647"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_81_1647"
              x="118"
              y="32"
              width="59"
              height="59"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_81_1647"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_81_1647"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_81_1647"
              x="72"
              y="117"
              width="54"
              height="54"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_81_1647"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_81_1647"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Aim;
