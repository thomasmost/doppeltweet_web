import React from 'react';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import StatsBox from '../components/StatsBox';
import HeroImage from '../svg/HeroImage';

import 'react-toastify/dist/ReactToastify.css';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Tweet like yourself
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            A Twitter app that uses GPT-3 to tweet exactly like you.
          </p>
          <p className="mt-8 md:mt-12">
            <Button onClick={() => toast.info('Coming soon...')} size="lg">
              Get Started
            </Button>
          </p>
          <p className="mt-4 text-gray-600">This is your Twitter on GPT-3</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="what" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">
          Can GPT-3 learn to tweet like you?
        </LabelText>
        <div style={{ fontSize: '2em', textAlign: 'center' }}>Let&apos;s find out!</div>
        {/* <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
          </div> */}
      </div>
    </section>
    <section id="why" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Why is this a good experiment?</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="500m" secondaryText="Tweets Sent Daily" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="330m" secondaryText="Active Twitter Users" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="553" secondaryText="Average Tweets per User-Year" />
          </div>
        </div>
      </div>
    </section>
    <section id="how" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">How it&apos;ll work</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Step One</p>
              <p className="mt-4">Authorize Doppeltweet to review your tweets</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Step Two</p>
              <p className="mt-4">Review a queue of suggested &apos;doppeltweets&apos;</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Step Three</p>
              <p className="mt-4">Post your doppelganger&apos;s tweet with a click</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    {/* <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section> */}
  </Layout>
);
