import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import Line, { ILine } from 'app/modules/dashboard/chart/line';
import Bar, { IBar } from 'app/modules/dashboard/chart/bar';
import Pie, { IPie } from 'app/modules/dashboard/chart/pie';
import { TranslatorContext, translate } from 'react-jhipster';

const ECommerce = () => {
  const [salesData, setSalesData] = useState<ILine>({
    name: translate('dashboards.sales.title'),
    value: '70',
    rate: 0.15,
    trendValues: [60, 66, 63, 65, 64, 70, 73],
  });
  const [revenueData, setRevenueData] = useState<ILine>({
    name: translate('dashboards.revenue.title'),
    value: '$450',
    rate: 0.2,
    trendValues: [450, 470, 430, 455, 434, 425, 450],
  });
  const [visitorsData, setVisitorsData] = useState<ILine>({
    name: translate('dashboards.visitors.title'),
    value: '360',
    rate: -0.07,
    trendValues: [356, 390, 360, 388, 377, 380, 360],
  });
  const [stockData, setstockData] = useState<ILine>({
    name: translate('dashboards.stock.title'),
    value: '$88',
    rate: 0.03,
    trendValues: [85, 83, 87, 89, 86, 87, 88],
  });

  const [selectedWeek, setSelectedWeek] = useState<string>('LW');

  const revenueChartDataMap1: Map<string, IBar> = new Map();
  revenueChartDataMap1.set('LW', {
    datasets: [
      {
        label: translate('dashboards.revenue.overview.revenue'),
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: translate('dashboards.revenue.overview.profile'),
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  });

  revenueChartDataMap1.set('TW', {
    datasets: [
      {
        label: translate('dashboards.revenue.overview.revenue'),
        data: [53, 59, 80, 56, 56, 78, 89],
      },
      {
        label: translate('dashboards.revenue.overview.profile'),
        data: [67, 88, 80, 55, 77, 89, 45],
      },
    ],
  });

  const [revenueChartDataMap, setRevenueChartDataMap] = useState<Map<string, IBar>>(revenueChartDataMap1);

  const [revenueChartData, setRevenueChartData] = useState<IBar>(revenueChartDataMap.get('LW') as IBar);
  const [weekList, setWeekList] = useState([
    { name: translate('dashboards.revenue.overview.lastWeek'), code: 'LW' },
    { name: translate('dashboards.revenue.overview.thisWeek'), code: 'TW' },
  ]);

  const [salesCategoryChartData, setSalesCategoryChartData] = useState({
    name: translate('dashboards.sales.stat.title'),
    labels: [
      translate('dashboards.sales.stat.electronics'),
      translate('dashboards.sales.stat.fashion'),
      translate('dashboards.sales.stat.household'),
    ],
    datasets: [
      {
        data: [540, 325, 702],
      },
    ],
  });

  const handleSelectedWeek = (code: string) => {
    setSelectedWeek(code);
    setRevenueChartData(revenueChartDataMap.get(code));
  };

  useEffect(() => {
    setSalesData({ ...salesData, name: translate('dashboards.sales.title') });
    setRevenueData({ ...revenueData, name: translate('dashboards.revenue.title') });
    setVisitorsData({ ...visitorsData, name: translate('dashboards.visitors.title') });
    setstockData({ ...stockData, name: translate('dashboards.visitors.title') });

    const newRevenueChartData = {
      ...revenueChartData,
    };
    newRevenueChartData.datasets[0].label = translate('dashboards.revenue.overview.revenue');
    newRevenueChartData.datasets[1].label = translate('dashboards.revenue.overview.profile');
    setRevenueChartData(newRevenueChartData);

    setSalesCategoryChartData({
      ...salesCategoryChartData,
      name: translate('dashboards.sales.stat.title'),
      labels: [
        translate('dashboards.sales.stat.electronics'),
        translate('dashboards.sales.stat.fashion'),
        translate('dashboards.sales.stat.household'),
      ],
    });
    let _weekList = weekList;
    _weekList[0].name = translate('dashboards.revenue.overview.lastWeek');
    _weekList[1].name = translate('dashboards.revenue.overview.thisWeek');
    setWeekList(_weekList);
  }, [TranslatorContext.context.locale]);

  return (
    // <div className="l-card">
    <div className="grid grid-cols-12 gap-5">
      <div className="l-card col-span-12 w-full md:col-span-6 xl:col-span-3">
        <Line data={salesData} />
      </div>
      <div className="l-card col-span-12 md:col-span-6 xl:col-span-3">
        <Line data={revenueData} />
      </div>
      <div className="l-card col-span-12 md:col-span-6 xl:col-span-3">
        <Line data={visitorsData} />
      </div>
      <div className="l-card col-span-12 md:col-span-6 xl:col-span-3">
        <Line data={stockData} />
      </div>
      <div className="l-card col-span-12 xl:col-span-9">
        <div className="card h-auto">
          <div className="mb-6 flex items-start justify-between">
            <span className="text-900 text-xl font-semibold">{translate('dashboards.revenue.overview.title')}</span>
            <Dropdown
              className="w-auto"
              value={selectedWeek}
              onChange={(e: DropdownChangeEvent) => handleSelectedWeek(e.value)}
              options={weekList}
              optionLabel="name"
              optionValue="code"
            />
          </div>
          <Bar data={revenueChartData} />
        </div>
      </div>
      <div className="l-card col-span-12 xl:col-span-3">
        <Pie data={salesCategoryChartData} />
      </div>
      {/* <div className="col-span-12 xl:col-span-8">
          <span className="text-lg font-semibold">Recent Sales</span>
        </div>
        <div className="col-span-12 xl:col-span-4">
          <span className="text-lg font-semibold">Top Products</span>
        </div> */}
    </div>
    // </div>
  );
};

export default ECommerce;
