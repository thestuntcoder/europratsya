import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function UkrExpertiseExplained() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Ukraine expertise explained | Europratsya</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="bg-white overflow-hidden">
        <StaticImage
          className="h-56 w-full object-cover"
          src="../images/expertise/banner.jpg"
          alt="Banner"
          loading="auto"
        />

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-black font-bold text-3xl tracking-wide">
                Ukraine expertise FAQ
              </h1>
              <div className="prose prose-indigo text-gray-500 text-lg mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <h2 className="text-base text-black font-bold text-xl tracking-wide">
                  I’ve heard of Ukrainian IT, software and web design?
                </h2>
                <p>
                  There are over 166,000 software developers in Ukraine, which
                  alongside Poland is a leading European supplier of global tech
                  expertise. A total of 55% of the positions are middle and
                  senior levels of experience, which come with English fluency
                </p>
                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  How developed is their aerospace engineering?
                </h2>
                <p>
                  Ukraine is one of nine countries with a full cycle of
                  aerospace hardware engineering and production. Besides the
                  design and production of passenger and transportation
                  aircraft, Ukraine also boasts a network of aircraft repair
                  enterprises, including companies involved in recovery of
                  military planes and helicopters.
                </p>
                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  I know about the natural resources - what is the mining
                  expertise?
                </h2>
                <p>
                  With 5% of the world’s mineral reserves Ukraine has developed
                  a sophisticated mining industry. The country exports
                  fuel-coke, fertilisers and sulphuric acid around the world as
                  well as extracting iron, manganese ores, titanium and
                  aluminium.
                </p>
                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Their medical schools are famous - does Ukraine have life
                  sciences too?
                </h2>
                <p>
                  Ukraine has attracted international students to its medical
                  schools for decades. Interest in a high-quality yet low-cost
                  medical education has made Ukraine a popular destination in
                  English-speaking African countries like Nigeria and Ghana,
                  where Ukraine is currently the third most popular study
                  destination worldwide. Because of the historically strong
                  engineering and technology facilities in Ukraine, the country
                  is in the vanguard of innovative diagnostic and therapeutic
                  methods. GlobalLink software serves over 20 million patients
                  in 70 countries worldwide, and employ 5000 Ukrainian
                  engineers.
                </p>
                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Automotive industry - what is the scope?
                </h2>
                <p>
                  Ukraine’s cluster of 12 automobile manufacturers produce
                  buses, tractors, trucks, passenger cars, trams and rail
                  engines.
                </p>
                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  There’s a lot of wheat fields!
                </h2>
                <p>
                  Ukraine sits on a third of the world’s rich black soil, which
                  accounts for its #1 global status as a sunflower oil exporter,
                  #2 in barley and #3 in wheat. Recent investment in
                  eco-technologies to increase yields and sustainability have
                  created a cluster of agricultural science centres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
