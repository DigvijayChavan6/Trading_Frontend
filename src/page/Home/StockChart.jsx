import { Button } from '@/components/ui/button';
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    lable: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    lable: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series",
    lable: "1 Month",
    value: 30,
  },
  {
    keyword: "DIGITAL_CURRENCY_YEARLY",
    key: "Yearly Time Series",
    lable: "1 Year",
    value: 365,
  },
];

const StockChart = () => {
    const [activeLable, setActiveLable] = useState("1 Day")

    const series = [
      {
        data: [
          [1734941187814, 95329.189068705],
          [1734944914052, 96017.0900413],
          [1734948243054, 95928.0658155377],
          [1734951760497, 96386.0794422067],
          [1734955246673, 95817.0447272086],
          [1734959021225, 96198.1443386725],
          [1734962630821, 94764.5114211457],
          [1734966232376, 93783.9081722867],
          [1734969839649, 93091.5282702688],
          [1734973437468, 93778.1035819163],
          [1734976810237, 93177.6132875347],
          [1734980645066, 92628.8228291823],
          [1734984236278, 92875.3289407328],
          [1734987846995, 93153.2599332778],
          [1734991425892, 93947.8304182085],
          [1734994972481, 95155.9932938399],
          [1734998630956, 94783.5528229933],
          [1735002237151, 94452.814862084],
          [1735005843524, 94022.7665747121],
          [1735009259240, 93731.9757941789],
          [1735013135230, 94226.3228823131],
          [1735016640633, 94288.7786212906],
          [1735020664223, 94437.0281192823],
          [1735023995316, 93696.2286655834],
          [1735028138942, 94430.2470402333],
          [1735031840077, 93904.3451433625],
          [1735035464456, 93843.2286430042],
          [1735038271710, 93847.4514904963],
          [1735042077399, 94231.1262598204],
          [1735045855543, 94180.7105567203],
          [1735049383936, 95848.5773089882],
          [1735053038912, 97238.8061176281],
          [1735056378024, 98151.7257079972],
          [1735059654159, 98540.0071496426],
          [1735063704369, 98943.5249821524],
          [1735067592219, 98678.0855981758],
          [1735071190687, 97505.3413262993],
          [1735074980831, 97744.8915429966],
          [1735078539196, 98562.5860153152],
          [1735081222953, 98758.1555515477],
          [1735084830267, 98695.714007826],
          [1735088524278, 98500.2606703422],
          [1735092930383, 97799.2236703646],
          [1735096443895, 98185.1782458743],
          [1735099426699, 97939.6330049698],
          [1735103132956, 98166.1484359816],
          [1735106529028, 98256.5632123073],
          [1735110714348, 98017.7151071566],
          [1735114054811, 97939.2517092669],
          [1735117568400, 97972.346080149],
          [1735121137502, 98096.9930165277],
          [1735124554407, 98336.475282605],
          [1735128763677, 97825.0561046365],
          [1735131926962, 98116.904147218],
        ],
      },
    ];

    const options = {
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: "datetime",
        tickAmount: 6,
      },
      colors: ["#FF7F32"],
      markers: {
        colors: ["#FF7F32"],
        strokeColor: "#000",
        size: 0,
        strokeWidth: 1,
        style: "hollow",
      },
      tooltip: {
        theme: "dark",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: .7,
          opacityFrom: 0.,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
      grid: {
        borderColor: "#47535E",
        strokeDashArray: 4,
        show: true,
      },
    };

    const handleActiveLable = (value)=>{
        setActiveLable(value);
    }

  return (
    <div>
        <div className='space-x-3'>
            {timeSeries.map((item)=>
                <Button variant={activeLable == item.lable?"":"outline"} onClick={()=>handleActiveLable(item.lable)} key={item.lable}>
                    {item.lable}
                </Button>
            )}
        </div>
        <div id="chart-timelines">
            <ReactApexChart
                options={options}
                series={series}
                height={450}
                type="area"
            />
        </div>
    </div>
  )
}

export default StockChart