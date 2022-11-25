import * as React from 'react';

import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex flex-col justify-center'>
            <div className='text-sm text-gray-800'>
              <p className='mt-2'>hi! - i&#39;m Sam. welcome my website </p>
              <p className='mt-4'>
                i&#39;m an avid learner interested in all problems tech. I&#39;m
                looking for 2023 SWE opportunities! Here&#39;s my{' '}
                <PrimaryLink
                  className='font-bold'
                  href='https://drive.google.com/file/d/1ja2uMp4tFJgt2bhSVaiIO0iAx0qjm6MJ/view'
                >
                  Resume
                </PrimaryLink>{' '}
              </p>
              <p className='mt-4'>
                i currently work at Coinbase on the{' '}
                <PrimaryLink
                  className='font-bold'
                  href='https://docs.cloud.coinbase.com/exchange/docs/welcome'
                >
                  Coinbase Exchange
                </PrimaryLink>{' '}
                focusing on load-testing exchange services, cost optimization of
                infrastructure, and release engineering of exchange services.
              </p>
              <p className='mt-4'>
                outside of school/work, i like exercising, playing
                badminton/volleyball, and playing video games!
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
