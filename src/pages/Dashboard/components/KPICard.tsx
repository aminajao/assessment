type KPICardProps = {
  title: string;
  icon: string;
  value: number;
};

export default function KPICard({ title, icon, value }: KPICardProps) {
  return (
    <>
      <div className="w-60 md:w-[298px] md:h-[105px] py-5 px-4 rounded-md bg-white">
        <div className="flex items-center space-x-4 md:space-x-7">
          <div className="flex items-center justify-center rounded-full h-14 w-14 md:h-16 md:w-16 bg-blue-50">
            <img src={icon} alt="icon" className="w-6 h-6 md:h-9 md:w-9" />
          </div>
          <div className="">
            <p className="text-sm md:text-base tracking-wide font-normal text-[#A3AED0]">
              {title}
            </p>
            <h2 className="text-xl md:text-4xl font-bold tracking-normal text-[#001242]">
              {value}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
