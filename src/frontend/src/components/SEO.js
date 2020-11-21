import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';
import { FavIconProvider } from './Favicon/FaviconProvider.jsx';
import usePageLifecycle from './Favicon/usePageLifecycle';
import favicon from '../../public/favicon.svg';
import faviconDot from './Favicon/favicon-dot.svg';

function SEO({ description, lang, meta, title }) {
  const siteMetadata = useSiteMetadata();
  const metaDescription = description || siteMetadata.description;
  const [favIcon, setIcon] = React.useState(null);
  const isVisible = usePageLifecycle();
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      >
        <link rel="icon" id="dynamic" href={favIcon || favicon} />
      </Helmet>
      <FavIconProvider value={setIcon} />
    </>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
