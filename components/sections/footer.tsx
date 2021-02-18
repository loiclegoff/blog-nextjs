import { config } from '../../config'
import { texts } from '../../i18n'

export const Footer: React.FC = () => {
  return (
    <div className='text-center text-gray-600 text-sm p-4 mt-8'>
      © {new Date().getFullYear()} {config.name} ·{' '}
      <a
        className='text-blue-500'
        href='https://github.com/loiclegoff/blog-nextjs'>
        Source
      </a>{' '}
      {texts.footer.inspiredBy}{' '}
      <a className='text-blue-500' href='https://timo.sh/'>
        timo.sh
      </a>
      {' '}·{' '}
      <a className='text-blue-500' href='/credits'>
        {texts.nav.credits}
      </a>
    </div>
  )
}
