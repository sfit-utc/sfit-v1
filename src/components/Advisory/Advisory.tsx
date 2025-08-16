import AdvisoryCard from "./AdvisoryCard/AdvisoryCard";
import advisor1 from "../../assets/advisors/3_Adviser_1.jpg";
import advisor2 from "../../assets/advisors/3_Adviser_2.jpg";
import advisor3 from "../../assets/advisors/3_Adviser_3.jpg";
import advisor4 from "../../assets/advisors/3_Adviser_4.jpg";
import advisor6 from "../../assets/advisors/3_Adviser_6.jpg";
import CircularGallery from './ScrollStack'
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
<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
    </div>

  );
}

export default Advisory;
