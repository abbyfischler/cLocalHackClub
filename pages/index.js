import HeadObject from '../components/head'
import Nav from '../components/nav';


import Image from 'next/image'
import mypic from '../public/vercel.JPG'

export default function Home() {
  return (
    <div className="dark:text-white ">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav/>
      

      <div class="py-12 dark:bg-red dark:text-white">
      <MyImage />
    
    <nr></nr>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="lg:text-center">
  <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red-700 dark:text-white sm:text-4xl">
    Why Join the club?
    </p>
    
  </div>

  <div class="mt-10">
    <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
      <div class="relative">
        <dt>
          <div class="absolute flex items-center justify-center">
          </div>
          <p class="ml-16 text-lg ml-16 text-lg leading-6 font-medium text-gray-900">Become apart of a community</p>
        </dt>
        <dd class="mt-2 ml-16 text-base text-gray-500 dark:text-gray-200">
        Hack Club gives you a worldwide community of thousands of other young makers to talk to. We’re artists, writers, engineers, tinkerers, campers, filmmakers, volunteers. We make things. We help one another. We have fun. Join us.
        </dd>
      </div>

      

      <div class="relative">
        <dt>
        <div class="absolute flex items-center justify-center text-white">
          </div>
          <p class="ml-16 text-lg  leading-6 font-medium text-gray-900">Learn as you build</p>
        </dt>
        <dd class="mt-2 ml-16 text-base text-gray-500 dark:text-gray-200">
        Just as the best carpenters didn’t learn in the classroom, neither did the best programmers. Through our workshops, you’ll be walked through building projects. Starting out, you won’t understand how the code works, but you’ll build understanding as you go. You’ll get stuck along the way, but we’re here to help.
        </dd>
      </div>


      <div class="relative">
        <dt>
        <div class="absolute flex items-center justify-center text-white">
          </div>
          <p class="ml-16 text-lg  leading-6 font-medium text-gray-900 dark:color-white">Start building</p>
        </dt>
        <dd class="mt-2 ml-16 text-base text-gray-500 dark:text-gray-200">
        Most coding classes teach you programming concepts instead of how to write real code—it’s like trying to learn carpentry without any wood. So at Hack Club, you learn to code entirely through building things. You start with no experience and build and ship a project every meeting.
        </dd>
      </div>



      <div class="relative">
        <dt>
        <div class="absolute flex items-center justify-center text-white">
          </div>
          <p class="ml-16 text-lg  leading-6 font-medium text-gray-900">Coding is the future</p>
        </dt>
        <dd class="mt-2 ml-16 text-base text-gray-500 dark:text-gray-200">
        Learning to code is uniquely like gaining a superpower: it converts you from a consumer to a creator. Suddenly, computers become a tool for creating.
        </dd>
      </div>
    </dl>
  </div>
</div></div> 
<h1>Made with 💖 by <a href={`https://abbyfischler.com`}> Abby Fischler </a></h1>
</div>
   
  )
}



const MyImage = (props) => {
  return (
    <Image
      src={mypic}
      alt="Picture of the author"
      width={900}
        height={500}
     
    
  />
  )
  }


