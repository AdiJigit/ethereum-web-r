import React from 'react';
import HeroImg from '../assets/hero.png';
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className="bg-gradient" name="home">
      {/* Container */}
      <div className="max-w-[1240px] mx-auto text-gray-300">
        <div className="grid sm:grid-cols-2 py-16 px-4 sm:p-0">
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold text-[#20B2AA]">
              ПОСТРОЕН НА{' '}
              <Typed
                strings={['REACT', 'JAVASCRIPT', 'TAILWIND']}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
              , POWERED BY YOU.
            </p>
            <h2 className="text-6xl my-4">Раскачай мир шедевром</h2>
            <p className="">
              Кредитное плечо на любых токенах с протоколом, которому доверяют
              миллиарды для его работоспособность и надежность.
            </p>
            <div className="mt-8">
              <button className="border border-blue-600 py-2 px-8 hover:bg-[#20B2AA] hover:border-none">
                Исследуй
              </button>
              <button className="border border-blue-600 py-2 px-8 ml-8 hover:bg-[#20B2AA] hover:border-none">
                Создать
              </button>
            </div>
          </div>
          <div className="mx-auto">
            <img src={HeroImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
