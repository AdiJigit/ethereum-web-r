import React from 'react';
import Careers from '../assets/careers.png';
import Group50 from '../assets/group50.png';
import Group51 from '../assets/group51.png';
import Group52 from '../assets/group52.png';
import Group53 from '../assets/group53.png';

const Avalanche = () => {
  return (
    <div className="bg-gradient" name="avalanche">
      {/* container */}
      <div className="max-w-[1240px] mx-auto py-28 px-8 grid sm:grid-cols-2 gap-8 text-gray-300">
        <div>
          <p className="text-3xl font-bold py-12">
            Воспользуйтесь всеми преимуществами, которые могут предложить
            Arbitrum и Avalanche.
          </p>
          <div className="flex items-center gap-8">
            <img className="p-4" src={Group50} />
            <p>Попрощайтесь с невероятной платой за газ</p>
          </div>
          <div className="flex items-center gap-8">
            <img className="p-4" src={Group51} />
            <p>Исполняйте свои сделки мгновенно</p>
          </div>
          <div className="flex items-center gap-8">
            <img className="p-4" src={Group52} />
            <p>Торгуйте с любого устройства</p>
          </div>
          <div className="flex items-center gap-8">
            <img className="p-4" src={Group53} />
            <p>Получите доступ к уникальным парам токенов с кредитным плечом</p>
          </div>
        </div>
        <div>
          <img src={Careers} />
        </div>
      </div>
    </div>
  );
};

export default Avalanche;
