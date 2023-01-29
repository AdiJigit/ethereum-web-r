import React from 'react';
import Bluerit from '../assets/bluerit.png';
import Vector1 from '../assets/vector1.png';
import Vector2 from '../assets/vector2.png';
import Vector3 from '../assets/vector3.png';
import Vector4 from '../assets/vector4.png';
import Vector5 from '../assets/vector5.png';
import Vector6 from '../assets/vector6.png';

const Footer = () => {
  return (
    <div className="bg-gradient" name="footer">
      {/* container */}
      <div className="max-w-[1240px] mx-auto py-16 px-8 w-full h-full">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-center items-center">
            <img className="h-[50px]" src={Bluerit} />
          </div>
          <div className="w-[450px] sm:w-[800px] flex justify-between py-4 my-6 border-t-2 border-b-2 border-gray-400">
            <img
              className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] cursor-pointer"
              src={Vector1}
            />
            <img
              className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] cursor-pointer"
              src={Vector2}
            />
            <img
              className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] cursor-pointer"
              src={Vector3}
            />
            <img
              className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] cursor-pointer"
              src={Vector4}
            />
            <img
              className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] cursor-pointer"
              src={Vector5}
            />
            <img
              className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] cursor-pointer"
              src={Vector6}
            />
          </div>
          <div className="w-[450px] sm:w-[800px] flex justify-between items-center text-gray-400 font-bold">
            <p className="cursor-pointer text-sm sm:text-1xl">Войти</p>
            <p className="cursor-pointer text-sm sm:text-1xl">Условия</p>
            <p className="cursor-pointer text-sm sm:text-1xl">Обшество</p>
            <p className="cursor-pointer text-sm sm:text-1xl">Карьера</p>
            <p className="cursor-pointer text-sm sm:text-1xl">Контакт</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
