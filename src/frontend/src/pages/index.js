import React from 'react';

import PageBase from './PageBase';
import Banner from '../components/Banner';
import Posts from '../components/Posts';
import BackToTopButton from '../components/BackToTopButton';
import { useFavIcon } from '../components/Favicon/FaviconProvider.jsx';

export default function IndexPage() {
  useFavIcon('../components/Favicon/favicon-dot.svg');
  return (
    <PageBase title="Home">
      <Banner />
      <BackToTopButton />
      <main className="main">
        <Posts />
      </main>
    </PageBase>
  );
}
