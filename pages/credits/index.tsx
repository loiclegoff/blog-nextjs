import { NextSeo } from 'next-seo'
import React from 'react'
import { Footer } from '../../components/sections/footer'
import { Nav } from '../../components/sections/nav'
import { texts } from '../../i18n'

const CreditPage = () => (
  <>
    <Nav />
    <NextSeo title={'Credits'} description='' />
    <Credits />
    <Footer />
  </>
)

const Credits = () => (
  <div className='container my-8'>
    <h1 className='text-4xl font-bold'>{texts.credits.inspirations.title}</h1>
    <div className='text-2xl text-gray-600'>
      {texts.credits.inspirations.description}{' '}
      <a
        className='text-black hover:underline'
        href='https://github.com/timolins/timo-sh'>
        {'https://github.com/timolins/timo-sh'}
      </a>
    </div>
  </div>
)

export default CreditPage

// const IconViewer: React.FC<{ author: string; icon: SvgrComponent }> = ({
//   icon: SVGIcon,
//   author,
// }) => {
//   return (
//     <div className='flex flex-col items-center justify-around p-2 mr-4 w-60 h-40'>
//       {/* <div className='p-2'> */}
//       <SVGIcon className='w-20' />
//       {/* </div> */}
//       <span className='p-2 text-sm text-center text-gray-500 italic'>
//         {texts.credits.icons.by} {author}
//       </span>
//     </div>
//   )
// }
