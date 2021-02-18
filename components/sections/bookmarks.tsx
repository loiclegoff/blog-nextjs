import React, { useState } from 'react'
import { texts } from '../../i18n'
import { Bookmark, BookmarkType } from '../../types/bookmark'

import Git from '../../assets/svgs/git.svg'
import Site from '../../assets/svgs/site.svg'
import dayjs from 'dayjs'
import { LinkWithDescription } from '../base/link-with-description'

const BookmarkIcon: React.FC<{
  type: BookmarkType
  className?: string
}> = ({ type, ...props }) => {
  switch (type) {
    case 'repository':
      return <Git {...props} />
    case 'site':
      return <Site {...props} />
    default:
      return null
  }
}

const capitalize = (s: unknown) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const getTypeFromURL = (url: string) =>
  url.indexOf('github.com') > -1 || url.indexOf('gitlab.com') > -1
    ? 'repository'
    : 'site'

const BookmarkRow: React.FC<Bookmark> = ({
  Name,
  CreationTime,
  // Tags,
  URL,
  // Type,
  Description,
}) => {
  const relevantDate = dayjs(CreationTime).locale('fr')
  const type = getTypeFromURL(URL)
  return (
    <div
      className='flex flex-col items-center my-8 animate-enter'
      style={{
        animation: 'enter 300ms ease-out',
      }}>
      <LinkWithDescription title={Name} url={URL} description={Description} />
      <div className='flex w-full h-4 mt-1 items-center'>
        <div className='inline-flex items-center mr-2 pr-2 border-r-2 border-gray-600'>
          <svg
            className='w-4 align-middle text-gray-400 mr-1'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
          <span className='text-sm align-middle text-gray-500'>
            {relevantDate.format('DD MMM YYYY')}
          </span>
        </div>
        <div className='inline-flex items-center'>
          <BookmarkIcon
            className='w-4 align-middle text-gray-400 mr-1'
            type={type}
          />
          <span className='text-sm align-middle text-gray-500'>
            {capitalize(
              type === 'repository'
                ? texts.bookmarks.type.repository
                : texts.bookmarks.type.site
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export const Bookmarks: React.FC<{ bookmarks: Bookmark[] }> = ({
  bookmarks,
}) => {
  const [showMore, setShowMore] = useState(false)

  const bookmarksToShow = showMore ? bookmarks : bookmarks.slice(0, 5)

  return (
    <div className='container my-16'>
      <div className='m-auto max-w-3xl'>
        <h1 className='text-4xl font-bold'>{texts.bookmarks.title}</h1>
        <div className='text-2xl text-gray-600'>
          {texts.bookmarks.description}
        </div>
        <div className='my-4'>
          {bookmarksToShow.map((a, i) => (
            <BookmarkRow key={i} {...a} />
          ))}
        </div>
        <div className='flex justify-center'>
          <button
            className='px-2 py-1 text-gray-800 border border-gray-300 rounded shadow-xs'
            onClick={() => setShowMore(!showMore)}>
            {showMore
              ? `${texts.bookmarks.showLess} ↑`
              : `${texts.bookmarks.showMore} ↓`}
          </button>
        </div>
      </div>
    </div>
  )
}
