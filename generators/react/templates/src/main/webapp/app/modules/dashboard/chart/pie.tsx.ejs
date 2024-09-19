import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import _ from 'lodash';
import { useTheme } from 'app/shared/layout/theme/use-theme';

export interface IPie {
  name: string;
  labels: string[];
  datasets: IPieData[];
}

export interface IPieData {
  backgroundColor?: string[]; //最多支持10个类，超过则要自定义颜色
  hoverBackgroundColor?: string[];
  data: number[];
}
export default function Pie({ data }: { data: IPie }) {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const { theme } = useTheme();

  function hexToRgba(hex: string, opacity: number) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Parse the r, g, b values
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Return the rgba string
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    const borderColors = [
      '--primary-700',
      '--primary-500',
      '--primary-300',
      '--primary-100',
      '--primary-900',
      '--primary-600',
      '--primary-400',
      '--primary-200',
      '--primary-50',
      '--primary-800',
    ];

    const backgroundColor: string[] = data.labels.map((_, index) => {
      return documentStyle.getPropertyValue(borderColors[index]);
    });

    const hoverBackgroundColor: string[] = backgroundColor.map(item => {
      return hexToRgba(item, 0.8);
    });

    const initData = {
      datasets: [
        {
          backgroundColor: [...backgroundColor],
          hoverBackgroundColor: [...hoverBackgroundColor],
        },
      ],
    };
    const options = {
      responsive: true, // 设置为自适应
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: textColor,
            usePointStyle: true,
            padding: 28,
          },
        },
      },
    };

    let realData = _.merge(initData, data); //深拷贝借助lodash

    setChartData(realData);
    setChartOptions(options);
  }, [theme, data]);

  return (
    <div className="card h-auto">
      <div className="text-900 mb-12 text-xl font-semibold">{data.name}</div>
      <Chart type="pie" className="h-full max-h-[300px] w-auto" data={chartData} options={chartOptions} />
    </div>
  );
}
