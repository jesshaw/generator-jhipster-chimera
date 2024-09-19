import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { useTheme } from 'app/shared/layout/theme/use-theme';

export interface ILine {
  name: string;
  value: string;
  rate: number;
  trendValues: number[];
}

const Line = ({ data }: { data: ILine }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const { theme } = useTheme();

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const borderColor = data.rate < 0 ? documentStyle.getPropertyValue('--red-500') : documentStyle.getPropertyValue('--primary-color');

    const initData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: data.trendValues,
          fill: false,
          borderColor: borderColor,
          borderWidth: 2, // 将线条宽度设置为 1 像素
          pointRadius: 0, // 隐藏数据点
          tension: 0.4, //弧度
        },
      ],
    };

    const options = {
      responsive: true, // 设置为自适应
      maintainAspectRatio: false, // 启用保持宽高比时可能因尺寸计算问题会引起宽度除不尽的不确定性，因此设置为false
      aspectRatio: 3, // 指定宽高比
      plugins: {
        legend: {
          display: false, // 禁用图例
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          display: false, // 隐藏横坐标轴
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          display: false,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(initData);
    setChartOptions(options);
  }, [theme]);

  return (
    <div className="card h-auto">
      <span className="text-lg font-semibold">{data.name}</span>
      <div className="mt-3 flex flex-row content-between items-start">
        <div className="w-1/2">
          <span className="text-900 text-4xl font-bold">{data.value}</span>
          {data.rate < 0 ? (
            <div className="flex items-center text-red-500">
              <span className="font-medium">{100 - (1 - data.rate) * 100}%</span>
              <i className="pi pi-arrow-up ml-2 rotate-180 text-xs"></i>
            </div>
          ) : (
            <div className="flex items-center text-green-500">
              <span className="font-medium">+{100 - (1 - data.rate) * 100}%</span>
              <i className="pi pi-arrow-up ml-2 text-xs"></i>
            </div>
          )}
        </div>
        <div className="w-1/2">
          <Chart type="line" className="w-full" data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Line;
