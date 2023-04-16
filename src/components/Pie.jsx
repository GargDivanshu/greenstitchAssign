import { Pie , Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);




const PieChart = ({piedata, piedataTitle}) => {

    const data = {
        
        datasets: [
          {
            // label: '# of Votes',
            data: piedata,
            backgroundColor: ['#57CC78', '#55DBDB', '#E2FF32', '#FEC102'],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
   
         
        },
      };


  return (
    <div className="w-[333px] h-fit p-2 bg-white rounded-lg my-2">
    <h1 className="text-[22px] font-[600] text-center">Top Emmissions by Type</h1>
    <div
    className="w-[180px] h-[170px] mx-auto"
    >
    <Doughnut 
    
    data={data} options={options} />
    </div>

    <div className="mx-[70px]">
    <div className="text-[12px] font-[500]">
      <div className="flex justify-between my-1">
        <div className="flex">
        <div className="w-[15px] h-[15px] my-auto mx-1 rounded-full bg-[#57CC78]">
        </div>
        <div>
        {piedataTitle[0]}
        </div>
        </div>

        <div className="font-[600]">
        {piedata[0]} %
        </div>
      </div>


      <div className="flex justify-between my-1">
        <div className="flex">
        <div className="w-[15px] h-[15px] my-auto mx-1 rounded-full bg-[#55DBDB]">
        </div>
        <div>
        {piedataTitle[1]}
        </div>
        </div>

        <div className="font-[600]">
        {piedata[1]} %
        </div>
      </div>


      <div className="flex justify-between my-1">
        <div className="flex">
        <div className="w-[15px] h-[15px] my-auto mx-1 rounded-full bg-[#E2FF32]">
        </div>
        <div>
        {piedataTitle[2]}
        </div>
        </div>

        <div className="font-[600]">
        {piedata[2]} %
        </div>
      </div>


      <div className="flex justify-between my-1">
        <div className="flex">
        <div className="w-[15px] h-[15px] my-auto mx-1 rounded-full bg-[#FEC102]">
        </div>
        <div>
        {piedataTitle[3]}
        </div>
        </div>

        <div className="font-[600]">
        {piedata[3]} %
        </div>
      </div>
      </div>
    </div>
    </div>
  
  )
};

export default PieChart;

