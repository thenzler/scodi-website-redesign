import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Products } from '../components/home/Products';
import { CTA } from '../components/home/CTA';
import { Layout } from '../components/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>SCODi - Quality Management Software Solutions</title>
        <meta name="description" content="Professional quality management and process management software solutions. SCODi offers efficient tools for quality management, process documentation, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Features />
        <Products />
        <CTA />
      </main>
    </Layout>
  );
};

export default Home;