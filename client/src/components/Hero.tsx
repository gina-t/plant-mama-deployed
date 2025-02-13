'use client'
import hero from '../assets/hero.jpg'
import dragonfly from '../assets/dragonfly.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-50">
      <header className="absolute inset-x-0 top-0 z-50">
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={dragonfly}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          src={hero}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-48">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-50 sm:text-7xl">
                Plant Mama
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-50 sm:text-xl/8">
                Just can't get enough of plants? Neither can we. Join our community of plant lovers in the heart of Newtown.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to ="/plants" className="rounded-md bg-[#FF8A8A] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#FFB0B0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
        </div>
      </div>
    </div>
  )
}
