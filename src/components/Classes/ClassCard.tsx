
interface Class {
    image: string;
    name: string;
    desc: string;
    attendants: string;
    hours: string;
    days: string;
}

function ClassCard({ classInfor }: { classInfor: Class }) {
    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image Section */}
            <div className="h-48 overflow-hidden">
              <img 
                src={classInfor.image} 
                className="w-full h-full object-cover" 
                alt={classInfor.name}
              />
            </div>

            {/* Content Section */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#267452] mb-2 font-[Inter]">
                {classInfor.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 font-[crimson-text]">
                {classInfor.desc}
              </p>

              {/* Info Section */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#267452]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4V6C15 7.1 14.1 8 13 8S11 7.1 11 6V4L5 7V9C5 10.1 5.9 11 7 11S9 10.1 9 9V19C9 20.1 9.9 21 11 21H13C14.1 21 15 20.1 15 19V9C15 10.1 15.9 11 17 11S19 10.1 19 11V9Z"/>
                  </svg>
                  <span className="text-gray-700">{classInfor.attendants}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#267452]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="text-gray-700">{classInfor.hours}</span>
                    <span className="text-gray-500 ml-1">• {classInfor.days}</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ClassCard;