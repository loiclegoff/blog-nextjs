import React, { useState } from 'react'
import { texts } from '../../i18n'
import { Bookmark, BookmarkType } from '../../types/bookmark'

import Git from '../../assets/svgs/git.svg'
import Site from '../../assets/svgs/site.svg'
import Blog from '../../assets/svgs/blog.svg'
import dayjs from 'dayjs'
import { LinkWithDescription } from '../base/link-with-description'

const BookmarkIcon: React.FC<{
  type: BookmarkType
  className?: string
}> = ({ type, ...props }) => {
  switch (type) {
    case 'repository':
      return <Git {...props} />
    case 'blog':
      return <Blog {...props} />
    case 'site':
      return <Site {...props} />
    default:
      return null
  }
}

const BookmarkRow: React.FC<Bookmark> = ({
  Name,
  CreationTime,
  Tags,
  URL,
  Type,
  Description,
}) => {
  const relevantDate = dayjs(CreationTime).locale('fr')
  return (
    <div
      className='flex items-center my-8 animate-enter achievement-notion'
      style={{
        animation: 'enter 300ms ease-out',
      }}>
      <BookmarkIcon className='w-10 md:w-18 mr-4' type={Type} />
      <LinkWithDescription title={Name} url={URL} description={Description} />
      <div className='py-6 flex items-center group relative h-6 w-20 md:w-24 cursor-default border-l pl-2 ml-2'>
        <span className='text-gray-600'>{relevantDate.format('MMM')}</span>
        <span className='transform translate-x-2'>
          {relevantDate.format('YYYY')}
        </span>
      </div>
    </div>
  )
}

export const Bookmarks: React.FC<{ bookmarks: Bookmark[] }> = ({
  bookmarks,
}) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className='container my-16'>
      <div className='m-auto max-w-3xl'>
        <h1 className='text-4xl font-bold'>{texts.bookmarks.title}</h1>
        <div className='text-2xl text-gray-600'>
          {texts.bookmarks.description}
        </div>
        <div className='my-4'>
          {bookmarks.map((a, i) => (
            <BookmarkRow key={i} {...a} />
          ))}
        </div>
        <div className='flex justify-center'>
          <button
            className='px-2 py-1 text-gray-800 border border-gray-300 rounded shadow-xs'
            onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show less ↑' : 'Show more ↓'}
          </button>
        </div>
      </div>
    </div>
  )
}
