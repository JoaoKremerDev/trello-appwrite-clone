import Image from 'next/image'
import { BsFillPersonFill, BsPersonCircle, BsSearch } from "react-icons/bs";

function Header() {
    return (
        <header>
            <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10'>
                <div className='absolute top-0 left-0 w-full h-40 rounded-md filter blur-3xl opacity-50 -z-50 bg-gradient-to-br from-pink-400 to-blue-500' />
                <Image src={"https://links.papareact.com/c2cdd5"}
                    alt='Trello logo'
                    width={300}
                    height={100}
                    className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
                />

                <div className='flex flex-1 justify-end items-center w-full'>
                    {/* Search Box */}
                    <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                        <BsSearch className='w-6 h-10 text-gray-400' />
                        <input type="text"
                            placeholder='Serch'
                            className='flex-1 outline-none'
                        />
                        <button type="submit" hidden>Search</button>
                    </form>
                    {/* Avatar */}
                    <BsFillPersonFill className='w-16 h-14 text-blue-500' />
                </div>


            </div>
            <div className='flex items-center justify-center px-5  py-2 md:py-5'>
                <p className='flex items-center text-sm font-light pr-5 p-5 shadow-xl rounded-xl bg-white italic max-w-3xl text-blue-500'>
                    <BsPersonCircle className='inline-block h-8 w-8 text-blue-500 mr-1' />
                    GPT is sumarising your tasks for the day...
                </p>
            </div>
        </header>
    )
}

export default Header