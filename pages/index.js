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
                  <h1 className="dark:text-black">Become apart of a community</h1>
                  <p>Hack Club gives you a worldwide community of thousands of other young makers to talk to. We’re artists, writers, engineers, tinkerers, campers, filmmakers, volunteers. We make things. We help one another. We have fun. Join us.</p>
                </div>

                <div className="flex flex-col">
                  <h1 className="dark:text-black">Learn as you build</h1>
                  <p>Just as the best carpenters didn’t learn in the classroom, neither did the best programmers. Through our workshops, you’ll be walked through building projects. Starting out, you won’t understand how the code works, but you’ll build understanding as you go. You’ll get stuck along the way, but we’re here to help.</p>
                </div>

                <div className="flex flex-col">
                  <h1 className="dark:text-black">Start build</h1>
                  <p>Most coding classes teach you programming concepts instead of how to write real code—it’s like trying to learn carpentry without any wood. So at Hack Club, you learn to code entirely through building things. You start with no experience and build and ship a project every meeting.</p>
                </div>

                <div className="flex flex-col">
                  <h1 className="dark:text-black">Coding is the future</h1>
                  <p>Learning to code is uniquely like gaining a superpower: it converts you from a consumer to a creator. Suddenly, computers become a tool for creating.</p>
                </div>
              </div>
          </section>
      <h1>Made with 💖 by <a href={`https://abbyfischler.com`}> Abby Fischler </a></h1>
     </main>
   </div>
  )
}







