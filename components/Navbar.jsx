import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex w-full justify-between bg-gray-200 py-3 px-6'>
        <div className='flex flex-row gap-5'>
            <Link href="/">
                <p>LocalPro</p>
            </Link>
            <form>
                <input type='search'/>
            </form>

        </div>
        <div>
            <Link href='/'>
                <Image 
                    src='public/next.svg'
                    width={30}
                    height={30}
                />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar