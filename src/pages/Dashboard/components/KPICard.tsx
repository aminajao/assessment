type KPICardProps = {
  title: string;
  icon: string;
  value: number;
  className?: string;
};

export default function KPICard({
  title,
  icon,
  value,
  className,
}: KPICardProps) {
  return (
    <div
      className={`${className ? className : ''}  py-5 px-4 rounded-md bg-white`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0">
        <div className="flex mr-4 mb-2 items-center justify-center rounded-full h-12 w-12 md:h-16 md:w-16 bg-[#F4F7FE]">
          <img src={icon} alt="icon" className="w-5 h-5 md:h-9 md:w-9" />
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
  );
}
