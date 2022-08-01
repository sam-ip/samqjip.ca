import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function IntroPage() {
  return (
    <Layout>
      <Seo templateTitle='intro' />
      <main>
        <section className='bg-white'>
          <div className='layout flex flex-col justify-center'>
            <div className='text-sm text-gray-800'>In development!</div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
