import Image from "next/image";
import microsoft from "../../image/microsoft.png";
import slack from "../../image/Slack.png";
import Google from "../../image/Google.png";

export default function Home() {
  return (
    <div className="bg-blue-950 w-screen h-screen">
      {/* SECTION 1 */}
      <div className="h-screen flex justify-center items-center">
        <div className="flex h-[465px] w-11/12">
          {/* Text Section */}
          <div className="flex flex-col flex-1 gap-4 justify-center px-4">
            <h2 className="w-[656px] h-[154px] font-inter font-bold text-[64px] leading-[77px] tracking-[-0.02em] text-white">
              Get More Done With Whitepace
            </h2>
            <p className="w-[656px] h-[60px] font-inter font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-white">
              Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
            </p>
            <button className="flex items-center justify-center p-5 gap-2 w-[219px] h-[63px] bg-[#4F9CF9] rounded-[8px]">
              Try Whitepace free
            </button>
          </div>
          {/* Image Container */}
          <div className="flex flex-col items-start p-0 gap-1 w-[824px] h-[549px] bg-[#C4DEFD]">
            {/* Placeholder for image or content */}
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="bg-white w-screen h-screen">
        <div className="h-screen flex justify-center items-center">
          <div className="flex h-[465px] w-11/12">
            {/* Text Section */}
            <div className="flex flex-col flex-1 gap-4 justify-center px-4">
              <h2 className="font-inter font-bold text-[64px] leading-[77px] tracking-[-0.02em] text-black">
                Project Management
              </h2>
              <p className="font-inter font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-[#212529]">
                Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
              </p>
              <button className="flex items-center justify-center p-5 gap-2 w-[201px] h-[63px] bg-[#4F9CF9] rounded-[6px]">
                Get Started
              </button>
            </div>
            {/* Image Container */}
            <div className="flex-none w-[748px] h-full bg-[#C4DEFD]">
              {/* Placeholder for image or content */}
            </div>
          </div>
        </div>
      </div>

    

 

      {/* SECTION 4 */}
      <div className="bg-blue-950 w-screen h-screen">

  <div className="h-screen flex justify-center items-center">
    <div className="flex h-[465px] w-11/12">
      {/* Text Section */}
      <div className="flex flex-col flex-1 gap-4 justify-center px-4">
        <h2 className="w-[656px] h-[154px] font-inter font-bold text-[64px] leading-[77px] tracking-[-0.02em] text-white">
          Use as Extensions
        </h2>
        <p className="w-[656px] h-[60px] font-inter font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-white">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
        </p>
        <button className="flex items-center justify-center p-5 gap-2 w-[171px] h-[63px] bg-[#4F9CF9] rounded-[6px]">
          Let’s Go
        </button>
      </div>
      {/* Image Container */}
      <div className="flex flex-col items-start p-0 gap-1 w-[686px] h-[479px] bg-[#C4DEFD]">
        {/* Placeholder for image or content */}
      </div>
    </div>
</div>
</div>
 
      {/* SECTION 5 */}
      <div className="bg-white min-h-screen flex flex-col items-center justify-center py-14">
        <div className="flex flex-row items-center justify-center w-screen px-20 space-x-20 bg-white">
          {/* Left Image Section */}
          <div className="bg-[#C4DEFD] flex items-center justify-center w-[714px] h-[532px]">
            {/* You can add an image here if needed */}
          </div>

          {/* Right Text Section */}
          <div className="flex flex-col space-y-4 max-w-md text-left">
            <h1 className="text-[55px] font-bold text-[#212529] w-[669px] h-[174px]">
              Customize it to your needs
            </h1>
            <p className="text-lg text-[#212529]">
              Customize the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
            <button className="flex items-center justify-center p-5 gap-2 w-[171px] h-[63px] bg-[#4F9CF9] rounded-[6px]">
              Let’s Go
            </button>
          </div>
        </div>
      </div>
      
      {/* SECTION 6: Choose Your Plan */}
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#212529]">
            Choose <span className="text-yellow-500">Your Plan</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
            Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
            {/* Free Plan */}
            <div className="w-full md:w-1/3 bg-white border border-gray-300 rounded-lg p-6 text-left shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Free</h2>
              <p className="text-3xl font-bold text-gray-900 mt-4">$0</p>
              <p className="text-sm text-gray-600 mt-2">Capture ideas and find them quickly</p>
              <ul className="text-gray-700 mt-4 space-y-2">
                <li>✔ Sync unlimited devices</li>
                <li>✔ 10 GB monthly uploads</li>
                <li>✔ 200 MB max. note size</li>
                <li>✔ Customize Home dashboard and access extra widgets</li>
                <li>✔ Connect primary Google Calendar account</li>
                <li>✔ Add due dates, reminders, and notifications to your tasks</li>
              </ul>
              <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md">
                Sign Up
              </button>
            </div>

            {/* Premium Plan */}
            <div className="w-full md:w-1/3 bg-white border border-gray-300 rounded-lg p-6 text-left shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Premium</h2>
              <p className="text-3xl font-bold text-gray-900 mt-4">$7.99</p>
              <p className="text-sm text-gray-600 mt-2">Take productivity to the next level</p>
              <ul className="text-gray-700 mt-4 space-y-2">
                <li>✔ 20 GB monthly uploads</li>
                <li>✔ 200 MB max. note size</li>
                <li>✔ Access notes and notebooks offline</li>
                <li>✔ Search text inside Office docs and attachments</li>
              </ul>
              <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md">
                Subscribe Now
              </button>
            </div>

            {/* Business Plan */}
            <div className="w-full md:w-1/3 bg-white border border-gray-300 rounded-lg p-6 text-left shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Business</h2>
              <p className="text-3xl font-bold text-gray-900 mt-4">$12.99</p>
              <p className="text-sm text-gray-600 mt-2">All the features your team needs to do their best work</p>
              <ul className="text-gray-700 mt-4 space-y-2">
                <li>✔ 30 GB monthly uploads</li>
                <li>✔ 200 MB max. note size</li>
                <li>✔ Centralized account administration</li>
                <li>✔ Data ownership for company admin</li>
              </ul>
              <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md">
                Try for Free
              </button>
            </div>
          </div>
        </div>
      </div>












       {/* Your content here */}
  <div className="flex flex-col items-center justify-center p-[140px] w-full h-[550px] bg-white relative">

<h2 className="font-inter font-extrabold text-[48px] leading-[58px] text-black text-center mx-auto">
Our sponsors
</h2>
{/* Sponsors Section */}
<div className="flex flex-col items-center gap-4 w-full mt-10 h-full">
<div className="flex flex-row gap-12 mt-6 justify-center">
{/* Sponsor Logos */}
<Image src={microsoft} alt="microsoft" width={287} height={62} />
<Image src={slack} alt="slack" width={280} height={71} />
<Image src={Google} alt="Google" width={211} height={69.81} />
</div>
</div>
</div>





































<div className="bg-blue-950 w-screen h-screen">
        <div className="h-screen flex justify-center items-center">
          <div className="flex h-[465px] w-11/12">
            {/* Text Section */}
            <div className="flex flex-col flex-1 gap-4 justify-center px-4">
              <h2 className="w-[656px] h-[154px] font-inter font-bold text-[64px] leading-[77px] tracking-[-0.02em] text-white">
              Work with Your Favorite Apps Using whitepace
              <p className="w-[656px] h-[60px] font-inter font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-white">
              Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
              </p>
              
              </h2>
              </div>
            {/* Image Container */}
            <div className="flex flex-col items-start p-0 gap-1 w-[686px] h-[479px] bg-[#C4DEFD]">
              {/* Placeholder for image or content */}
            </div>
          </div>
        </div>
      </div>






















































































      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Dashboard</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Landing Page</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Mobile Apps</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Framing</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Ui-kits</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Prototyping</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">WireFraming</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Health care</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Design</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Layout</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Componenet</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Style</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          SUBSCRIBE
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
              Placeholder
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
          Bitters chicharrones fanny pack
          <br className="lg:block hidden" />
          waistcoat green juice
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        © 2020 Syeda Nameera..🤍
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          @SYEDA
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

     </div>
  )
}