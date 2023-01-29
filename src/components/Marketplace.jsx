import React, { startTransition } from 'react';
import StatsImg1 from '../assets/stats-img1.png';
import StatsImg2 from '../assets/stats-img2.png';
import StatsImg3 from '../assets/stats-img3.png';
import StatsImg4 from '../assets/stats-img4.png';
import StatsImg5 from '../assets/stats-img5.png';
import StatsImg6 from '../assets/stats-img6.png';

const Marketplace = () => {
  return (
    <div className="bg-gradient" name="marketplace">
      {/* container */}
      <div className="max-w-[1240px] mx-auto w-full h-full">
        {/* Stats */}
        <div className="sm:flex justify-center gap-16 py-16">
          <div className="mt-16 mx-auto sm:mx-0 bg-[#16063B] w-[300px] flex flex-col justify-between items-center border-t-[3px] border-[#F64498] hover:scale-110 duration-500 shadow shadow-[#000]">
            <p className="p-10 text-xl font-bold text-[#CD2FF2]">
              Объем торгов за все время для этого
            </p>
            <p className="pb-4 text-2xl text-gray-300">$567894555.00</p>
          </div>
          <div className="mt-16 mx-auto sm:mx-0 bg-[#16063B] w-[300px] flex flex-col justify-between items-center border-t-[3px] border-[#F64498] hover:scale-110 duration-500 shadow shadow-[#000]">
            <p className="p-10 text-xl font-bold text-[#20B2AA]">
              Всего Trades
            </p>
            <p className="pb-4 text-2xl text-gray-300">15,670</p>
          </div>
        </div>

        {/* Title */}
        <div className="my-8 text-gray-300 text-center">
          <p className="text-3xl sm:text-5xl font-bold">
            Надежный и безопасный Ethereum
          </p>
          <p className="w-[400px] sm:w-[500px] my-8 mx-auto">
            Наша децентрализованная торговля с кредитным плечом основана на
            Arbitrum и Avalanche. exchange фокусируется на том, чтобы быть
            лучшей средой для исполнения сделок.
          </p>
        </div>

        {/* Images */}
        <div className="grid sm:grid-cols-3 py-16 sm:px-28">
          <div className="relative mx-24 sm:mx-0 max-w-[300px] h-[200px] my-16 flex flex-col justify-center items-center bg-stats hover:scale-110 duration-500 cursor-pointer">
            <img
              src={StatsImg1}
              className="w-[250px] absolute top-[-70px] left-6"
            />
            <p className="text-gray-300 font-bold mt-[100px]">
              Кредитное плечо до 55x
            </p>
          </div>
          <div className="relative mx-24 sm:mx-0 max-w-[300px] h-[200px] my-16 flex flex-col justify-center items-center bg-stats2 hover:scale-110 duration-500 cursor-pointer">
            <img
              src={StatsImg2}
              className="w-[250px] absolute top-[-90px] left-6"
            />
            <p className="text-gray-300 font-bold mt-[100px]">
              Пулы ликвидности с низким уровнем риска
            </p>
          </div>
          <div className="relative mx-24 sm:mx-0 max-w-[300px] h-[200px] my-16 flex flex-col justify-center items-center bg-stats3 hover:scale-110 duration-500 cursor-pointer">
            <img
              src={StatsImg3}
              className="w-[150px] absolute top-[-90px] left-16"
            />
            <p className="text-gray-300 font-bold mt-[100px]">
              Супер дешевые транзакции
            </p>
          </div>
          <div className="relative mx-24 sm:mx-0 max-w-[300px] h-[200px] my-16 flex flex-col justify-center items-center bg-stats4 hover:scale-110 duration-500 cursor-pointer">
            <img
              src={StatsImg4}
              className="w-[250px] absolute top-[-120px] left-6"
            />
            <p className="text-gray-300 font-bold mt-[100px]">
              Использует наиболее ликвидные AMM
            </p>
          </div>
          <div className="relative mx-24 sm:mx-0 max-w-[300px] h-[200px] my-16 flex flex-col justify-center items-center bg-stats5 hover:scale-110 duration-500 cursor-pointer">
            <img
              src={StatsImg5}
              className="w-[250px] absolute top-[-100px] left-8"
            />
            <p className="text-gray-300 font-bold mt-[100px]">
              Несанкционированная торговля
            </p>
          </div>
          <div className="relative mx-24 sm:mx-0 max-w-[300px] h-[200px] my-16 flex flex-col justify-center items-center bg-stats6 hover:scale-110 duration-500 cursor-pointer">
            <img
              src={StatsImg6}
              className="w-[250px] absolute top-[-110px] left-6"
            />
            <p className="text-gray-300 font-bold mt-[100px]">
              Полностью компонуемый
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
