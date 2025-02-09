import Hero from "../assets/hero-unsplash.jpg";
import dragonfly from "../assets/dragonfly.svg";

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-50 px-6 py-12 sm:py-16 lg:px-8">
      <img
        alt="dew drops on a leaf"
        src={Hero}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* First decorative shape */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 bg-linear-to-tr w-[68.5625rem] from-[#FEFFAC] to-[#45FFCA] opacity-20"
        />
      </div>
      {/* Second decorative shape */}
      {/* <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-20 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 bg-linear-to-tr w-[68.5625rem] from-[#fEFFAC] to-[#45FFCA] opacity-20"
        />
      </div> */}
      <div className="mx-auto max-w-2xl text-center">
        <img
          alt="dragonfly"
          src={dragonfly}
          className="mx-auto h-20 w-20 sm:h-20 sm:w-20 animate-pulse"
        />
        <h2 className="header text-5xl tracking-tight text-emerald-600 sm:text-7xl">
          Plant Mama
        </h2>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
          Just can't get enough of plants? Neither can we. Join our community of
          plant lovers in the heart of Newtown.
        </p>
      </div>
    </div>
  );
}
