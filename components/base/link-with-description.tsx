import React from 'react'

export const LinkWithDescription: React.FC<{
  title: string
  url: string
  description: string
}> = ({ title, url, description }) => (
  <h4 className='w-full flex-1'>
    <a
      href={url}
      className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
      {title}
    </a>
    <div className='mt-2 text-gray-500'>{description}</div>
  </h4>
)
