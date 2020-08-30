import React from 'react';

import Layout from './Layout/Layout';
import SEO from './Layout/SEO';

const Season = () => (
  <Layout>
    <SEO title="Library" />
    Default Season Component
  </Layout>
);

Season.displayName = 'MKSeason';

export default Season;
