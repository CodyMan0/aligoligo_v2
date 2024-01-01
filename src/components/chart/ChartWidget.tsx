'use client';

import dayjs from 'dayjs';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import {
  apexAreaChartDefaultOption,
  apexBarChartDefaultOption,
  apexLineChartDefaultOption,
} from '@/constants/chartOptinos';

// todo customOption have to retype
export interface ChartWidgetProps {
  title?: string;
  series?: string[];
  xAxis?: number | string[];
  customOptions?: CustomOptions;
  width?: number | string[];
  height?: number | string[];
  type?: string;
  extra?: React.ReactDOM;
  bodyClass?: string;
}

interface CustomOptions {
  test: string;
}

const tickFormatX = (tickItem: string) => dayjs(tickItem).format('M/D');

const tickFormatY = (tickItem: string) => tickItem.toLocaleString();

const data = [
  {
    date: '2023-01-11',
    uv: 4000,
    percentage: 2400,
    amt: 2400,
  },
  {
    date: '2023-01-11',
    uv: 3000,
    percentage: 1398,
    amt: 2210,
  },
  {
    date: '2023-01-11',
    uv: 2000,
    percentage: 9800,
    amt: 2290,
  },
  {
    date: '2023-01-11',
    uv: 2780,
    percentage: 3908,
    amt: 2000,
  },
  {
    date: '2023-01-11',
    uv: 1890,
    percentage: 4800,
    amt: 2181,
  },
  {
    date: '2023-01-11',
    uv: 2390,
    percentage: 3800,
    amt: 2500,
  },
  {
    date: '2023-01-11',
    uv: 3490,
    percentage: 9300,
    amt: 2100,
  },
];

export const ChartWidget = ({
  title,
  series,
  width,
  height,
  xAxis,
  customOptions,
  type,
  extra,
  bodyClass,
}: ChartWidgetProps) => {
  console.log(title, series, width, height, xAxis, customOptions, type, extra, bodyClass);

  const getChartTypeDefaultOption = (type: string) => {
    switch (type) {
      case 'line':
        return apexLineChartDefaultOption;
      case 'bar':
        return apexBarChartDefaultOption;
      case 'area':
        return apexAreaChartDefaultOption;
      default:
        return apexLineChartDefaultOption;
    }
  };
  let options = JSON.parse(JSON.stringify(getChartTypeDefaultOption('type')));
  options.xaxis.categories = xAxis;
  if (customOptions) {
    options = { ...options, ...customOptions };
  }

  //   const setLegendOffset = () => {
  //     if (chartRef.current) {
  //       const lengend = chartRef.current.querySelectorAll('div.apexcharts-legend')[0];
  //       //   lengend.style.marginRight = `${isMobile ? 0 : extraRef.current?.offsetWidth}px`;
  //       //   if (direction === DIR_RTL) {
  //       //     lengend.style.right = 'auto';
  //       //     lengend.style.left = '0';
  //       //   }
  //       //   if (isMobile) {
  //       lengend.style.position = 'relative';
  //       lengend.style.top = 0;
  //       lengend.style.justifyContent = 'start';
  //       lengend.style.padding = 0;
  //       //   }
  //     }
  //   };

  //   useEffect(() => {
  //     setLegendOffset();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   const { ref: resizeRef } = useResizeDetector({
  //     onResize: () => {
  //       onResize();
  //     },
  //   });

  //   const onResize = () => {
  //     setTimeout(() => {
  //       setLegendOffset();
  //     }, 600);
  //   };

  const renderChart = () => (
    <div className="w-full h-[227px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="date"
            style={chartStyle}
            interval={1}
            tickLine={false}
            // axisLine={false}
            tickFormatter={tickFormatX}
          />
          <YAxis style={chartStyle} interval={1} tickLine={false} tickFormatter={tickFormatY} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="percentage"
            stroke="#FFA030"
            strokeWidth={2}
            dot={{ stroke: '#52681D', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div id="graph" className="w-full">
      {renderChart()}
    </div>
  );
};
ChartWidget.displayName = 'ChartWidget';

// 사용 방식
{
  /* <ChartWidget
series={dashboardData.series}
xAxis={dashboardData.xAxis}
yAxis={dashboardData.yAxis}
height={400}
/> */
}

const chartStyle = {
  fontSize: '12px',
  fill: '#52681D',
  fontWeight: 'bold',
};
