import React from 'react';
import HodlBot from '../assets/hodlbot.png';

const Built = () => {
  return (
    <div className="bg-gradient" name="built">
      {/* container */}
      <div className="max-w-[1240px] mx-auto py-28 px-8 w-full h-full flex flex-col gap-8 justify-center items-center text-gray-300">
        <p className="text-4xl font-bold">Создан на основе React</p>
        <p className="text-center max-w-[700px] mb-8">
          Мы все слишком долго работаем в этой отрасли, чтобы не сделать
          безопасность ваших средств нашим абсолютным главным приоритетом. Мы
          получили несколько проверок от Open Zeppelin и Trail of Bits, а также
          обзоры кода от белых исследователей.
        </p>
        <img src={HodlBot} />
      </div>
    </div>
  );
};

export default Built;
