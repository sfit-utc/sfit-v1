import CircularGallery from "./ScrollStack";
function Advisory() {
  return (
    <div>
      <h1
        className="text-center text-[#267452] tracking-normal mt-20
                   font-[Inter] text-5xl font-bold"
      >
        BAN CỐ VẤN
      </h1>
      <div className="mx-auto mt-2 bg-[#39906A] w-[525px] h-[4px] "></div>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
}

export default Advisory;
