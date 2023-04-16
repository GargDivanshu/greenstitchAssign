import React from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useState } from 'react';
import {GoGraph} from 'react-icons/go'

const StackedBar = () => {

    const [chartData, setChartData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
          {
            label: 'Spinning',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#57CC78',
          },
          {
            label: 'Transportation',
            data: [7, 11, 5, 8, 3, 7],
            backgroundColor: '#55DBDB',
          },
          {
            label: 'Carding',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#E2FF32',
          },
          {
            label: 'Heating & Cooling',
            data: [7, 11, 5, 8, 3, 7],
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
        <div className="bg-white p-2 px-10 my-2 rounded-lg mx-[16px] w-[610px]">
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