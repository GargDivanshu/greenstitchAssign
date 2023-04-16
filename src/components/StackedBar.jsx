import React from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useState } from 'react';
import {GoGraph} from 'react-icons/go'

const StackedBar = ({spinning, trans, heatCool, carding}) => {

    const [chartData, setChartData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Spinning',
            data: spinning,
            backgroundColor: '#57CC78',
          },
          {
            label: 'Transportation',
            data: trans,
            backgroundColor: '#55DBDB',
          },
          {
            label: 'Carding',
            data: carding,
            backgroundColor: '#E2FF32',
          },
          {
            label: 'Heating & Cooling',
            data: heatCool,
            backgroundColor: '#FEC102',
          },
        ],
      });

      const options = {
        scales: {
          y: {
            stacked: true,
          },
          x: {
            stacked: true,
          },
        },
      };

      
      return (
        <div className="bg-white p-2 px-14 my-2 rounded-lg mr-8 ml-4 w-[640px]">
        <div className="flex justify-between">
        <h1
        className="font-[700] text-[24px]"
        >Carbon Footprint</h1>
        <div className="rounded-md bg-[#F4F7FE] p-1">
        <GoGraph
            fontSize={25}
            className="m-auto my-auto text-[#18FF59]"
        />
        </div>
        </div>
          <Bar data={chartData} options={options} />
        </div>
      );
}

export default StackedBar