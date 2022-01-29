import HeadObject from '../components/head'
import Nav from '../components/nav';


import Image from 'next/image'
import mypic from '../public/vercel.JPG'

export default function Home() {
  return (
    <div className="bg-white text-black dark:bg-red dark:text-white">
      <HeadObject />
      <Nav/>
       <main className="flex flex-col gap-3">
          <section className="py-1">
            <Image
              src={mypic}
              alt="Picture of the author"
              width={900}
              height={500}
            />
          </section>
          <section className="flex flex-col gap-7">
              <h1 className="text-5xl font-bold text-red dark:text-white">Why join the club?</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-10 lg:mx-36">
                <div className="flex flex-col">
                  <h1 className="dark:text-black">THIS IS A HEADER</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="flex flex-col">
                  <h1 className="dark:text-black">THIS IS A HEADER</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="flex flex-col">
                  <h1 className="dark:text-black">THIS IS A HEADER</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="flex flex-col">
                  <h1 className="dark:text-black">THIS IS A HEADER</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
          </section>
      <h1>Made with 💖 by <a href={`https://abbyfischler.com`}> Abby Fischler </a></h1>
     </main>
   </div>
  )
}







