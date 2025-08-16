import ClassCard from "./ClassCard";
import class1 from "../../assets/class/4_Classes_1.jpg"
import class2 from "../../assets/class/4_Classes_2.jpg"
import class3 from "../../assets/class/4_Classes_3.jpg"
import class4 from "../../assets/class/4_Classes_4.jpg"
import class5 from "../../assets/class/4_Classes_5.jpg"
import class6 from "../../assets/class/4_Classes_6.jpg"

function Classes() {
  return (
    <div id="training" className="bg-white w-screen h-fit overflow-x-hidden py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#267452] font-[Inter] mb-4">
            ĐÀO TẠO
          </h1>
          <div className="mx-auto bg-[#39906A] w-24 h-1 mb-6"></div>
          <h2 className="text-xl md:text-2xl text-gray-700 font-[Crimson_Text] max-w-3xl mx-auto">
            Tổ chức các lớp học chất lượng cao cho sinh viên
          </h2>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Items */}
          <ClassCard
            classInfor={{
              image: class1,
              name: "Kỹ thuật lập trình",
              desc: "Là lớp dạy bổ túc về kỹ thuật lập trình",
              attendants: "23 sinh viên",
              hours: "20:00PM",
              days: "Thứ Hai, Ba",
            }}
          />
          <ClassCard
            classInfor={{
              image: class2,
              name: "Lập trình hướng đối tượng",
              desc: "Là lớp dạy bổ túc về Lập trình hướng đối tượng",
              attendants: "23 sinh viên",
              hours: "6:00PM",
              days: "Thứ Tư, Năm",
            }}
          />
          <ClassCard
            classInfor={{
              image: class3,
              name: "Cấu trúc dữ liệu & giải thuật",
              desc: "Là lớp dạy bổ túc về Cấu trúc dữ liệu & giải thuật",
              attendants: "23 sinh viên",
              hours: "6:00PM",
              days: "Thứ Hai,Ba",
            }}
          />
          <ClassCard
            classInfor={{
              image: class4,
              name: "Thiết kế Web",
              desc: "Là lớp dạy bổ túc về Thiết kế Web",
              attendants: "23 sinh viên",
              hours: "6:00PM",
              days: "Thứ Sáu, Bảy",
            }}
          />
          <ClassCard
            classInfor={{
              image: class5,
              name: "Tin học đại cương",
              desc: "Là lớp dạy bổ túc về Tin học đại cương",
              attendants: "23 sinh viên",
              hours: "6:00PM",
              days: "Thứ Hai,Ba",
            }}
          />
          <ClassCard
            classInfor={{
              image: class6,
              name: "Lập trình nâng cao",
              desc: "Là lớp dạy bổ túc về Lập trình nâng cao",
              attendants: "23 sinh viên",
              hours: "6:00PM",
              days: "Thứ Ba",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Classes;