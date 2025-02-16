// import react from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import flower from '../assets/flower.svg'
import{ useState, useEffect } from 'react'

const messages = [
  "FREE SHIPPING",
  "FREE SAMPLES WITH ORDERS OVER $100",
  "CHOOSE YOUR FREE GIFT HERE"
]

export default function Banner() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-[#FFB0B0] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#FEFFAC] to-[#FFB0B0] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#FEFFAC] to-[#FF8A8A] opacity-30"
        />
      </div>
      <p className="text-sm/6 text-gray-900">
        {messages[currentMessageIndex] === "CHOOSE YOUR FREE GIFT HERE" ? (
          <a href="/special-offers" className="whitespace-nowrap">
          {messages[currentMessageIndex]}&nbsp;
          <img
            src={flower}
            alt=""
            className="inline-block h-5 w-5"
          />
          </a>
        
        ) : (
          messages[currentMessageIndex]
        )}
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
        </button>
      </div>
    </div>
  )

}
