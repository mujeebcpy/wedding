import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
// import Resepsi from '../public/assets/icons/resepsi.svg';
import Ring from '../public/assets/icons/ring.svg';

import Location from '../public/assets/icons/location.svg';
import Letter from '/components/Layout/Letter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Header Mobile */}
        <section
          id="home"
          className="flex lg:hidden bg-cover bg-center  w-full h-screen  items-start py-14"
          style={{ backgroundImage: 'url(/assets/prewedding-home.png)' }}
        >
          <div className="flex flex-col  w-full relative">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10">
              <p className="font-habibi ">Wedding of</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Saranya & Mujeeb
              </h4>
              <p className="font-habibi ">20 August 2023</p>
            </div>
          </div>
        </section>
        <Letter />

        {/* End Header Mobile */}
        <section
          id="home-dekstop"
          className="hidden lg:grid bg-dark-500 py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
            <div className="flex flex-col text-center my-auto">
              <p>
                “സുഹൃത്തേ, ഈ വരുന്ന ഓഗസ്റ്റ് 18 ന് ഞങ്ങൾ സ്പെഷ്യൽ മാരേജ് ആക്ട്
                പ്രകാരം വിവാഹിതരാവുകയാണ്. തുടർന്ന് ഓഗസ്റ്റ് 20 ന് വട്ടേക്കാട്
                ആത്രേയ കല്ല്യാണമഹലിൽ വെച്ച് പകൽ 11.00 മുതൽ 2.00 മണിവരെ നടക്കുന്ന
                കല്യാണസൽക്കാരത്തിലേക്ക് നിങ്ങളെ സ്നേഹത്തോടെ സ്വാഗതം ചെയ്യുന്നു.
                ”
              </p>
              <p>സ്നേഹപൂർവ്വം</p>
              <p>ശരണ്യ & മുജീബ്.</p>
            </div>
            <div className="flex flex-col ">
              <p className="font-habibi">Wedding of</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Saranya & Mujeeb
              </h4>
              <p className="font-habibi ml-auto">20 August 2023</p>
            </div>
          </div>
          <div className="flex w-full relative">
            <Image
              src="/assets/prewedding-home-dekstop.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>
        <section
          id="reception"
          className="bg-dark-500 py-14  mb:pb-6 grid grid-flow-row gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col  w-full relative lg:h-full">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px lg:hidden"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10 lg:my-auto">
              <p className="font-habibi lg:hidden">Wedding</p>
              <h4 className="font-great-vibes text-5xl lg:text-7xl mb-4 mt-6 ">
                Saranya & Mujeeb
              </h4>
              <p className="lg:hidden font-habibi ">20 August 2023</p>
            </div>
          </div>

          <div className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8">
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
                <Ring className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto" />
                <div className="flex flex-col text-white font-habibi justify-between h-full">
                  <p className="text-base md:text-lg lg:text-3xl">
                    Registration{' '}
                  </p>
                  <p className="text-xs md:text-base lg:text-lg">
                    On Aug 18th at kollengode sub registar office
                  </p>
                </div>
              </div>

              <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
                <img
                  src="/assets/icons/resepsi.svg"
                  className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto"
                />
                <div className="flex flex-col text-white font-habibi justify-between h-full">
                  <p className="text-base md:text-lg lg:text-3xl">Reception </p>
                  <p className="text-xs md:text-base lg:text-lg">
                    On Aug 20 at Athreya Kalyana mahal, vattekkad
                  </p>
                </div>
              </div>
            </div>
            <p className="hidden md:block mt-12 lg:mt-auto mx-auto text-lg text-white font-habibi">
              Reception will be from 11am to 2pm
            </p>
          </div>
          <a href="https://maps.app.goo.gl/Mx7haYVW2F5ShcNdA" target="_blank">
            <div className="flex mx-auto h-32 lg:h-full items-start lg:items-end justify-start w-full px-8">
              <button className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm md:text-base">
                <Location className="h-8 md:h-10 w-8 md:w-10 mr-4" />
                see location
              </button>
            </div>
          </a>
        </section>
        <section
          id="gallery"
          className="bg-dark-500 pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 grid grid-flow-row gap-4 grid-rows-7 lg:grid-rows-5 grid-cols-2 lg:grid-cols-3 h-screen px-4 lg:px-8"
        >
          <h1 className="col-span-2  text-5xl font-great-vibes my-auto mx-auto text-white lg:hidden">
            Gallery
          </h1>
          <div className="flex row-span-3 ">
            <Image
              src="/assets/gallery-mobile/photo-1.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="none"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex  row-start-3 col-start-2 row-span-3 lg:row-span-5 bg-white">
            <Image
              src="/assets/gallery-mobile/photo-2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="none"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-1 col-start-2 lg:col-start-3 row-start-2  lg:row-span-2">
            <Image
              src="/assets/gallery-mobile/photo-3.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="none"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-1 lg:row-span-3">
            <Image
              src="/assets/gallery-mobile/photo-4.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="none"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-2 lg:row-span-2 col-span-2 lg:col-span-1 w-full relative">
            <Image
              src="/assets/gallery-mobile/photo-5.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="none"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}
