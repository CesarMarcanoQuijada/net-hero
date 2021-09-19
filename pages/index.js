import Head from 'next/head'
import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import Loading from '../assets/screens/Loading';
import AppBar from '../assets/components/AppBar';
import YoutubeVideo from '../assets/components/YoutubeVideo';

export default function Home() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar />
      {/* <Loading /> */}
      <div className="bg-gray-900 h-screen flex items-center">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <img src="/logo.svg" className="w-40 h-40 mr-3 rounded-full" />
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-white">Are you ready to code?</span>
            <span className="block text-indigo-600">Net Hero.</span>
          </h2>
        </div>
      </div>

      <YoutubeVideo id="Ja9sbrFglPo" title="Curso javascript parte 1" />

    </div>
  )
}
