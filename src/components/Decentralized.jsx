import React from 'react';
import DecentralizedImg from '../assets/decentralized.png';
import LogoSearch from '../assets/logos_search.png';
import LogoBitcoin from '../assets/logos_bitcoin.png';
import LogoWebkit from '../assets/logos_webkit.png';
import LogoGruop44 from '../assets/group-44.png';

const Decentralized = () => {
  return (
    <div className="bg-gradient" name="decentralized">
      {/* container */}
      <div className="max-w-[1240px] mx-auto py-[130px] px-8 grid sm:grid-cols-2 gap-8 text-gray-300">
        <div>
          <img src={DecentralizedImg} />
        </div>
        <div>
          <p className="text-4xl max-w-[500px] font-bold">
            Полностью децентрализовано или полностью безопасно
          </p>
          <p className="py-8">
            Мы все слишком долго работаем в этой отрасли, чтобы не сделать
            безопасность ваших средств нашим абсолютным главным приоритетом. Мы
            получили несколько проверок от Open Zeppelin и Trail of Bits, а
            также обзоры кода от белых исследователей.
          </p>

          {/* grid group */}
          <div className="grid sm:grid-cols-2 text-gray-500">
            <div>
              <div className="flex items-center gap-4 m-4">
                <img src={LogoWebkit} />
                <p>Постоянные обзоры и тестирование нашей платформы</p>
              </div>
              <div className="flex items-center gap-4 m-4">
                <img src={LogoGruop44} />
                <p>Обзоры и тестирование платформы</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 m-4">
                <img src={LogoSearch} />
                <p className="text-gray-500">Обзоры и тестирование</p>
              </div>
              <div className="flex items-center gap-4 m-4">
                <img src={LogoBitcoin} />
                <p>Тестирование платформы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decentralized;
