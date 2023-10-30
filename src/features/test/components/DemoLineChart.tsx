import { PopulationResType } from '@/features/test/types';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export type DemoLineChartProps = {
  args: PopulationResType;
};

export const DemoLineChart = ({ args }: DemoLineChartProps) => {
  const populationsData = args.result.data[0];
  const { boundaryYear } = args.result;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  const labels = populationsData.data.map((item) => item.year);
  const values = populationsData.data.map((item) => item.value);

  const data = {
    labels,
    datasets: [
      {
        label: populationsData.label,
        data: values,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      // {
      //   label: 'Dataset 2',
      //   data: [6, 2, 10, 2, 1, 4, 10],
      //   borderColor: 'rgb(255, 99, 132)',
      //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
      // },
    ],
  };

  return (
    <>
      <div className="mb-4">{boundaryYear}年以降は、推計値となります。</div>
      <Line options={options} data={data} />
    </>
  );
};
