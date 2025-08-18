import github_mark from "../../assets/github-mark-white.svg";
import location_sign from "../../assets/location-sign-svgrepo-com.svg";
import mail_icon from "../../assets/mail-svgrepo-com.svg";

function Footer() {
  return (
    <div
      id="footer"
      className="bg-green-800 text-white flex flex-col items-center justify-center px-10"
    >
      <div className="lg:flex justify-between w-screen md:py-8 py-4 xl:px-44 lg:px-28 px-4">
        <div>
          <div className="font-bold md:text-6xl text-2xl">SFIT</div>
          <div className="md:text-2xl text-xl md:mt-5 leading-relaxed">
            Câu Lạc Bộ Tin Học <br /> Trường Đại Học Giao Thông Vận Tải
          </div>
          <div className="mt-3 flex items-center gap-3">
            <a
              href="https://www.facebook.com/sfit2016"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M41.25 22.5C41.25 12.15 32.85 3.75 22.5 3.75C12.15 3.75 3.75 12.15 3.75 22.5C3.75 31.575 10.2 39.1312 18.75 40.875V28.125H15V22.5H18.75V17.8125C18.75 14.1937 21.6937 11.25 25.3125 11.25H30V16.875H26.25C25.2187 16.875 24.375 17.7187 24.375 18.75V22.5H30V28.125H24.375V41.1562C33.8437 40.2187 41.25 32.2312 41.25 22.5Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@sfit.utc_2016"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
              >
                <path
                  d="M19.5 0C15.6433 0 11.8731 1.14365 8.66639 3.28634C5.45963 5.42903 2.96027 8.47451 1.48436 12.0377C0.00844904 15.6008 -0.377716 19.5216 0.374696 23.3043C1.12711 27.0869 2.9843 30.5614 5.71143 33.2886C8.43855 36.0157 11.9131 37.8729 15.6957 38.6253C19.4784 39.3777 23.3992 38.9916 26.9623 37.5156C30.5255 36.0397 33.571 33.5404 35.7137 30.3336C37.8563 27.1269 39 23.3567 39 19.5C38.9948 14.3299 36.9387 9.37296 33.2829 5.71712C29.627 2.06128 24.6701 0.0051624 19.5 0ZM31.0811 15.0403V16.3C31.0811 16.3965 31.0618 16.4919 31.0243 16.5807C30.9869 16.6696 30.932 16.75 30.8629 16.8172C30.7938 16.8845 30.712 16.9372 30.6222 16.9723C30.5324 17.0074 30.4364 17.0242 30.3401 17.0215C28.2813 16.8756 26.3117 16.1239 24.6792 14.8609V24.0805C24.679 25.101 24.4754 26.1111 24.0803 27.0519C23.6852 27.9927 23.1066 28.8454 22.3782 29.56C21.6433 30.2925 20.77 30.8715 19.8092 31.2632C18.8484 31.6549 17.8193 31.8515 16.7817 31.8415C14.6951 31.8379 12.6924 31.0192 11.2008 29.56C10.2519 28.6034 9.56845 27.4162 9.21765 26.1152C8.86685 24.8142 8.8608 23.4443 9.20011 22.1403C9.51016 20.8884 10.1361 19.7379 11.0195 18.7999C11.6782 17.9948 12.5086 17.347 13.4499 16.904C14.3912 16.461 15.4196 16.234 16.46 16.2396H18.059V19.5604C18.0597 19.6569 18.0398 19.7524 18.0007 19.8405C17.9616 19.9287 17.9041 20.0075 17.8322 20.0717C17.7602 20.136 17.6754 20.1841 17.5834 20.2129C17.4913 20.2418 17.3942 20.2507 17.2985 20.239C16.37 19.9602 15.3696 20.0527 14.5081 20.497C13.6465 20.9414 12.9912 21.7029 12.6802 22.6211C12.3691 23.5392 12.4268 24.5422 12.8409 25.4187C13.255 26.2952 13.9932 26.9767 14.9 27.3195C15.4265 27.6217 16.0154 27.7992 16.6199 27.8401C17.0879 27.8596 17.5559 27.8011 18.0005 27.6607C18.743 27.4108 19.3889 26.9352 19.8479 26.3003C20.307 25.6654 20.5562 24.903 20.5608 24.1195V7.3203C20.5605 7.2282 20.5785 7.13696 20.6135 7.0518C20.6486 6.96664 20.7001 6.88924 20.7652 6.82403C20.8302 6.75882 20.9074 6.70707 20.9925 6.67177C21.0776 6.63647 21.1688 6.6183 21.2609 6.6183H24.0201C24.1995 6.61805 24.3722 6.68669 24.5025 6.81007C24.6327 6.93344 24.7107 7.10213 24.7202 7.2813C24.8211 8.1416 25.0945 8.97272 25.524 9.72492C25.9535 10.4771 26.5304 11.1349 27.2201 11.659C28.1523 12.3589 29.2596 12.788 30.42 12.8992C30.5938 12.9141 30.7563 12.9914 30.8775 13.1169C30.9987 13.2424 31.0703 13.4075 31.0791 13.5817L31.0811 15.0403Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://github.com/sfit-utc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github_mark}
                alt="github-mark"
                className="w-[39px] h-[39px]"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <div className="font-bold md:text-3xl text-xl">Liên Hệ</div>
          <div className="md:text-xl text-lg flex items-center gap-2">
            <img
              src={mail_icon}
              alt="mail-icon"
              className="w-[40px] h-[40px]"
            />
            clbtinhocgtvt@gmail.com
          </div>
          <div className="text-lg md:text-xl leading-relaxed flex items-center gap-2">
            <img
              src={location_sign}
              alt="location-sign"
              className="w-[40px] h-[40px]"
            />
            Samsung Lab, tầng 4, tòa A4,
            <br />
            trường Đại học Giao thông Vận tải
          </div>
        </div>
      </div>
      <div className="font-bold text-center xl:text-[100px] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[25px] text-white">
        <hr className="w-screen" />
        STUDENT FACULTY OF IT
      </div>
    </div>
  );
}

export default Footer;
