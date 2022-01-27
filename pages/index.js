import HeadObject from '../components/head'
import Nav from '../components/nav';
import Image from 'next/image'



export default function Home() {
  return (
    <><><div className=" dark:bg-black ">
      <Nav />
    </div>
    
    <Image
        src="/https://assets.hackclub.com/icon-square.svg"
        alt="Hack club logo"
        width={500}
        height={500} /><p>Welcome to my homepage!</p></>
        
        <div class="py-12 bg-white">

          
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Join the club?
            </p>
            
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center text-white">
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Meet new friends</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>
      
              

              <div class="relative">
                <dt>
                <div class="absolute flex items-center justify-center text-white">
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Meet new friends</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>


              <div class="relative">
                <dt>
                <div class="absolute flex items-center justify-center text-white">
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Meet new friends</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>



              <div class="relative">
                <dt>
                <div class="absolute flex items-center justify-center text-white">
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Meet new friends</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div></>

  
  )
}

