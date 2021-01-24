// import Logo from '../../assets/svgs/puzzle.svg'
import Link from 'next/link'
import { texts } from '../../i18n'
import Image from 'next/image'

export const Nav: React.FC = () => (
  <nav className='flex justify-between items-center my-4 container'>
    <Link href='/'>
      <a>
        {/* <Logo className='w-8' /> */}
        <Image
          className='h-6 w-6 rounded-full ring-2 ring-white'
          src='/avatar.jpg'
          alt='Picture of the author'
          width={60}
          height={60}
        />
      </a>
    </Link>
    <ul className='flex'>
      <li>
        {/* <Link href='#'>
          <a className='text-blue-700 mr-2 px-2 py-1 rounded-md'>
            {texts.nav.links}
          </a>
        </Link> */}
        <Link href='/credits'>
          <a className='text-blue-700 mr-2 px-2 py-1 rounded-md'>
            {texts.nav.credits}
          </a>
        </Link>
      </li>
    </ul>
  </nav>
)
