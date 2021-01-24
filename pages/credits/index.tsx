import { NextSeo } from 'next-seo'
import React from 'react'
import { Footer } from '../../components/sections/footer'
import { Nav } from '../../components/sections/nav'
import { texts } from '../../i18n'

import Git from '../../assets/svgs/git.svg'
import Site from '../../assets/svgs/site.svg'
import Blog from '../../assets/svgs/blog.svg'

export default () => (
  <>
    <Nav />
    <NextSeo
      title={'Work ~ Timo Lins'}
      description="A collection of some of my work I've made in the past. Including web apps, landing page designs and videos."
    />
    <Credits />
    <Footer />
  </>
)

const Credits = () => (
  <div className='container my-8'>
    <h1 className='text-4xl font-bold'>{texts.credits.icons.title}</h1>
    <div className='text-2xl text-gray-600'>
      {texts.credits.icons.description}{' '}
      <a
        className='text-black hover:underline'
        href='https://thenounproject.com/'>
        The Noun Project
      </a>
    </div>
    <div className='flex flex-row'>
      <IconViewer icon={Git} author='Colourcreatype' />
      <IconViewer icon={Site} author='Rahmat Hidayat' />
      <IconViewer icon={Blog} author='i cons' />
    </div>
  </div>
)

const IconViewer: React.FC<{ author: string; icon: SvgrComponent }> = ({
  icon: SVGIcon,
  author,
}) => {
  return (
    <div className='flex flex-col items-center justify-around p-2 mr-4 w-60 h-40'>
      {/* <div className='p-2'> */}
      <SVGIcon className='w-20' />
      {/* </div> */}
      <span className='p-2 text-sm text-center text-gray-500 italic'>
        {texts.credits.icons.by} {author}
      </span>
    </div>
  )
}
