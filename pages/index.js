import HeadObject from "../components/head";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="bg-white text-black dark:bg-red dark:text-white">
      <HeadObject />
      <Nav />
      <main className="flex flex-col gap-10">
        <section className="flex flex-col gap-3 px-5 md:px-20 py-10 dark:text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h1 className="text-6xl md:text-8xl font-semibold">Charlotte Coding Club</h1>
          <h1 className="text-lg">
            Charlotte Coding Club will be for 5th-12th graders, and will start
            March 1, 3:30-4:30pm, and run every Tuesday for 6 weeks. In class
            we’ll be building websites, games and art using many popular coding
            languages such as HTML, CSS, Javascript, Python and more. Kids will
            get to know their way around the hardware. We may start off by
            hacking Minecraft, designing Instagram filters, or just making some
            silly websites. Beginners are welcome. Advanced coders who want to
            move into Rust, Python, C++, and other trickier projects should
            definitely join.{" "}
          </h1>
        </section>
        <section className="flex flex-col gap-7 px-5 md:px-20 py-10">
          <div className="flex flex-wrap place-items-center gap-5 mx-auto">
            <img
              src="/christina.png"
              alt="Picture of the author"
              className="w-48 h-48 md:w-72 md:h-72"
            />
            <img
              src="/jessica.png"
              alt="Picture of the author"
              className="w-48 h-48 md:w-72 md:h-72"
            />
          </div>
          <p>
            Jessica (on the right) is a professional software engineer and
            Christina (on the left) is new to coding. We both live in Charlotte.
            Drop by and try out one club meeting. Coding is a wonderful skill
            that leads to the high-paying jobs that will help build our future
            economy, Coding also teaches problem solving, cooperation and
            critical thinking. Coding is a lot of fun, and something everyone
            can learn to do.
          </p>
        </section>
        <section className="flex flex-col gap-7">
          <h1 className="text-5xl font-bold text-red dark:text-white">
            Why join the club?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-10 lg:mx-36">
            <div className="flex flex-col">
              <h1 className="font-3xl font-bold">Become apart of a community</h1>
              <p>
                Hack Club gives you a worldwide community of thousands of other
                young makers to talk to. We’re artists, writers, engineers,
                tinkerers, campers, filmmakers, volunteers. We make things. We
                help one another. We have fun. Join us.
              </p>
            </div>

            <div className="flex flex-col">
              <h1 className="font-3xl font-bold">Learn as you build</h1>
              <p>
                Just as the best carpenters didn’t learn in the classroom,
                neither did the best programmers. Through our workshops, you’ll
                be walked through building projects. Starting out, you won’t
                understand how the code works, but you’ll build understanding as
                you go. You’ll get stuck along the way, but we’re here to help.
              </p>
            </div>

            <div className="flex flex-col">
              <h1 className="font-3xl font-bold">Start building</h1>
              <p>
                Most coding classes teach you programming concepts instead of
                how to write real code—it’s like trying to learn carpentry
                without any wood. So at Hack Club, you learn to code entirely
                through building things. You start with no experience and build
                and ship a project every meeting.
              </p>
            </div>

            <div className="flex flex-col">
              <h1 className="font-3xl font-bold">Coding is the future</h1>
              <p>
                Learning to code is uniquely like gaining a superpower: it
                converts you from a consumer to a creator. Suddenly, computers
                become a tool for creating.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4 px-5 md:px-20 py-10">
          <h1 className="text-5xl font-bold text-red dark:text-white gap-7">
            Ready to signup?
          </h1>
          <p>
            Please email:{" "}
            <a href="mailto:christinaasquith@yahoo.com" className="underline hover:underline-offset-2 hover:font-bold">christinaasquith@yahoo.com.</a>
            With the students name, age, and if they have a laptop (no worries
            if not just let us know)!We can offer support around
            transportation/devices. Any questions? If you are a software
            engineer in town, please reach out to volunteer!
          </p>
        </section>
      </main>
      <footer className="py-4">
        Made with 💖 by{" "}
        <a href={`https://abbyfischler.com`}> Abby Fischler </a>
      </footer>
    </div>
  );
}
