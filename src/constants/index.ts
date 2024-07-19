// data.ts

export interface CampaignSubData {
  id: number;
  label: string;
  value: string | number;
}

export interface CampaignData {
  id: number;
  title: string;
  sub: CampaignSubData[];
}
export const campaigns: CampaignData[] = [
  {
    id: 1,
    title: 'Head of Marketing',
    sub: [
      { id: 1, label: 'Total Campaigns', value: 4 },
      { id: 2, label: 'Average Connection Rate', value: '26%' },
      { id: 3, label: 'Average Response Rate', value: '20%' },
      { id: 4, label: 'Average Interview Rate', value: '14%' },
    ],
  },
  {
    id: 2,
    title: 'Head of IT',
    sub: [
      { id: 1, label: 'Total Campaigns', value: 4 },
      { id: 2, label: 'Average Connection Rate', value: '26%' },
      { id: 3, label: 'Average Response Rate', value: '20%' },
      { id: 4, label: 'Average Interview Rate', value: '14%' },
    ],
  },
  {
    id: 3,
    title: 'CS Manager',
    sub: [
      { id: 1, label: 'Total Campaigns', value: 4 },
      { id: 2, label: 'Average Connection Rate', value: '26%' },
      { id: 3, label: 'Average Response Rate', value: '20%' },
      { id: 4, label: 'Average Interview Rate', value: '14%' },
    ],
  },
  {
    id: 4,
    title: 'Frontend Developer',
    sub: [
      { id: 1, label: 'Total Campaigns', value: 4 },
      { id: 2, label: 'Average Connection Rate', value: '26%' },
      { id: 3, label: 'Average Response Rate', value: '20%' },
      { id: 4, label: 'Average Interview Rate', value: '14%' },
    ],
  },
  {
    id: 5,
    title: 'Frontend Developer',
    sub: [
      { id: 1, label: 'Total Campaigns', value: 4 },
      { id: 2, label: 'Average Connection Rate', value: '26%' },
      { id: 3, label: 'Average Response Rate', value: '20%' },
      { id: 4, label: 'Average Interview Rate', value: '14%' },
    ],
  },
  {
    id: 6,
    title: 'Frontend Developer',
    sub: [
      { id: 1, label: 'Total Campaigns', value: 4 },
      { id: 2, label: 'Average Connection Rate', value: '26%' },
      { id: 3, label: 'Average Response Rate', value: '20%' },
      { id: 4, label: 'Average Interview Rate', value: '14%' },
    ],
  },
  {
    id: 7,
    title: 'Software Engineer',
    sub: [
      { id: 1, label: 'Total Campaigns', value: 4 },
      { id: 2, label: 'Average Connection Rate', value: '26%' },
      { id: 3, label: 'Average Response Rate', value: '20%' },
      { id: 4, label: 'Average Interview Rate', value: '14%' },
    ],
  },
  {
    id: 8,
    title: 'Head of Sales',
    sub: [
      { id: 1, label: 'Total Campaigns', value: 4 },
      { id: 2, label: 'Average Connection Rate', value: '26%' },
      { id: 3, label: 'Average Response Rate', value: '20%' },
      { id: 4, label: 'Average Interview Rate', value: '14%' },
    ],
  },
];
