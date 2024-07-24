interface DataItem {
  id: number;
  label: string;
  value: string | number;
  value1: string | number;
}

const data: DataItem[] = [
  {
    id: 1,
    label: 'Total Candidates',
    value: 59,
    value1: '',
  },
  {
    id: 2,
    label: 'Connections',
    value: '40%',
    value1: '25',
  },
  {
    id: 3,
    label: 'Responses',
    value: '53%',
    value1: '19',
  },
  {
    id: 4,
    label: 'Interviews',
    value: '28%',
    value1: '3',
  },
];

const CampaignOverview = () => {
  return (
    <div className="bg-white campaign-overview mb-4 shadow-[#00000040] shadow-md rounded-xl grid gap-5 grid-cols-10 py-5 px-3">
      <h3 className="col-span-3 mr-4 text-primary font-bold">
        HR-IT-Project-Lead-Munich
      </h3>
      <div className="col-span-7 flex justify-between">
        {data.map(({ id, label, value, value1 }) => (
          <div key={id}>
            <p className="text-tiny text-[#AEB8D6]">{label}</p>
            <h4 className="font-bold text-xl">{value}</h4>
            <p className="text-tiny text-[#AEB8D6]">{value1 || ''}</p>
          </div>
        ))}
        <div className="text-center flex flex-col justify-end">
          <span className="bg-[#649851] mb-1 rounded-xl text-tiny text-white py-1 px-5">
            Active
          </span>
          <p className="text-tiny text-[#AEB8D6]">Since 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignOverview;
