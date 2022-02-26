import React from 'react';
import Layout from '../components/Layout2.js'
import Team from '../sections/our-team'
import SEO from 'components/seo';

export default function members() {
  return (
    <Layout>
      <SEO title="members"></SEO>
      <Team/>
    
    </Layout>
  );
}
