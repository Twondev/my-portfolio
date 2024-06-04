import React from 'react'
import HtmlPic from '../assets/HTML5_logo_black.svg.png'
import CssPic from '../assets/CssImage.png'
import ReactPic from '../assets/reactjs.png'
import NodePic from '../assets/node.png'
import TailwindPic from '../assets/tailwind css.png'
import GithubPic from '../assets/GitHub-Logo.png'
import MongoDbPic from '../assets/mongo db.png'
import FigmaPic from '../assets/figma.png'
import JavaScriptPic from '../assets/JavaScript-logo.png'
import CanvaPic from '../assets/Canva_icon.png'
import TypeScript from '../assets/typescript.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: HtmlPic,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: CssPic,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: ReactPic,
      title: 'react js',
      style: ' py-8 shadow-blue-300'
    },
    {
      id: 4,
      src: NodePic,
      title: 'node js',
      style: 'shadow-green-600'
    },
    {
      id: 5,
      src: TailwindPic,
      title: 'tailwind',
      style: 'shadow-blue-300'
    },
    {
      id: 6,
      src: GithubPic,
      title: 'Github',
      style: 'shadow-gray-300'
    },
    {
      id: 7,
      src: MongoDbPic,
      title: 'Mongo Db',
      style: 'shadow-green-300'
    },
    {
      id: 8,
      src: FigmaPic,
      title: 'Figma',
      style: 'shadow-gray-700'
    },
    {
      id: 9,
      src: JavaScriptPic,
      title: 'Java Script',
      style: 'shadow-yellow-300'
    },
    {
      id: 10,
      src: CanvaPic,
      title: 'Canva',
      style: 'shadow-purple-500'
    },
    {
      id: 11,
      src: TypeScript,
      title: 'typecript',
      style: 'shadow-blue-500'
    }
  ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full text-white'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full  '>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6 '>These are the technologies that i've worked with</p>
        </div>
        {/* for cards */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className='w-20 mx-auto' />
              <p className='mt-4 text-center'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
