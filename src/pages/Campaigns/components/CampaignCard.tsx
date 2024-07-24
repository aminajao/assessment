import { FC, MouseEventHandler } from 'react';

interface SubData {
  id: string;
  label: string;
  value: string;
}

interface CampaignData {
  id: number;
  title: string;
  sub: SubData[];
}

interface CampaignCardProps {
  data: CampaignData;
  onClick: MouseEventHandler<HTMLDivElement>;
  open: number;
}

const CampaignCard: FC<CampaignCardProps> = ({ data, open, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        open !== 0 && open == data?.id ? 'bg-primary text-white' : 'bg-white'
      } p-5 pb-0 cursor-pointer shadow-[#00000040] shadow-lg rounded-xl shadow-custom w-[230px] lg:w-[250px]`}
    >
      <h2 className="border-b font-bold text-xl text-center pb-1 mb-4">
        {data?.title}
      </h2>
      {data?.sub?.map((each) => (
        <div className="mb-2" key={each.id}>
          <p
            className={`${
              open !== 0 && open == data?.id ? ' text-white' : ''
            } text-[#A3AED0] text-tiny`}
          >
            {each?.label}
          </p>
          <h2 className="font-bold text-xl">{each?.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default CampaignCard;
