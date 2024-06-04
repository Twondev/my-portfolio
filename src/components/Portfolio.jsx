import React from 'react'
import TourProject from '../assets/TourProjectPIC.jpg'
import TourProject2 from '../assets/TourProjectPIC.jpg'
import TourProject3 from '../assets/TourProjectPIC.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TourProject
    },
    {
      id: 2,
      src: TourProject2
    },
    {
      id: 3,
      src: TourProject3
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
            Portfolio
          </p>
          <p className='py-6'>
            Check out some of my work right here
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
          {portfolios.map(({ id, src }) => (
            <div key={id} className='shadow-md shadow-gray-200 rounded-lg' style={{ maxWidth: '512px', maxHeight: '512px' }}>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 mb-4' style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
              <div className='flex items-center justify-center'>
                <button className='w-24 md:w-32 px-4 md:px-6 py-2 md:py-3 mr-2 md:mr-4 mb-2 md:mb-0 duration-200 hover:scale-105'>
                  Demo
                </button>
                <button className='w-24 md:w-32 px-4 md:px-6 py-2 md:py-3 mb-2 md:mb-0 duration-200 hover:scale-105'>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Portfolio
