import Hero from "../components/Hero";
// import butterfly from "../assets/butterfly.svg"
import { Link } from "react-router-dom";
import flower from "../assets/flower.svg";


export default function StoreFrontPage() {
  return (
    <div className="bg-white">
      <Hero />
      <div className="relative bg-[#D3F1DF] py-24">

        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            alt="flower"
            src={flower}
            className="w-full h-full object-cover opacity-8"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-[#85A98F] opacity-50" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
          <p className="mt-4 text-xl text-white">
            Check out the latest options from our summer small-batch release.
          </p>
          <Link to ="/new-arrivals" className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100">
            Shop New Arrivals
          </Link>
            
        </div>
      </div>
    </div>
  )
}
