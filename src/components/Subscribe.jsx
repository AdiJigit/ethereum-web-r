import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-gradient' name='subscribe'>

      {/* container */}
      <div className='max-w-[1240px] mx-auto py-28 px-8'>
        <div className='max-w-[700px] mx-auto bg-[#0D0729] border rounded-[20px] px-28'>
          <p className='text-3xl font-bold text-center py-8 text-gray-300'>Подпишитесь на наш сервер</p>
          <p className='hidden sm:block sm:w-[400px] sm:mx-auto text-center text-gray-300'>Мы все слишком долго работаем в этой отрасли, чтобы не сделать безопасность ваших средств нашим абсолютным главным приоритетом. Мы получили несколько проверок от Open Zeppelin и Trail.</p>
          <div className='w-[300px] sm:w-[500px] sm:flex justify-between items-center p-2'>
            <input className='w-[340px] sm:w-[300px] bg-[#0D0729] border-b border-[#968E8E] mb-6 ml-[-80px]' type='text' placeholder='Your email here' />
            <button className='font-bold py-2 px-8 ml-4 mb-4 bg-[#04D6BD]'>Подписаться</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe