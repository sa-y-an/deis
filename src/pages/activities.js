import React from 'react';
import Layout from '../components/Layout2.js';
import Services from '../sections/why-us.js'
import Banner from '../sections/activitiesBanner.js'
import SEO from 'components/seo';

export default function activities() {
  return (
        <Layout>
          <SEO title="Home" />
          <Banner/>
          <Services/>
        </Layout>      
      
  );
}

