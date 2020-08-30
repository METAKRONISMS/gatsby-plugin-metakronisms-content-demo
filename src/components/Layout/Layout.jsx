import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import LayoutBase from 'gatsby-plugin-metakronisms-content/dist/Layout';

import './reset.css';

import Link from '../Link';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, noHeader = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [visible, setVisible] = useState(1);
  const handleMouseMove = () => !visible && setVisible(true);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove, { passive: true });
    };
  });

  const styles = {};

  return (
    <LayoutBase data={data}>
      <div className={styles.rootOverlay} />

      <div
        className={[
          styles.innerlay,
          visible && styles.innerlayVisible,
        ].filter(Boolean).join(' ')}
      >
        <div
          className={[
            styles.overlay,
            visible && styles.overlayVisible,
          ].filter(Boolean).join(' ')}
        >
          {!noHeader && (
          <Header
            className={styles.haeder}
            siteTitle={data.site.siteMetadata.title}
          />
          )}

          <div className={styles.menu}>
            <nav>
              <ul className={styles.menuLinks}>
                <li className={styles.menuLink}>
                  <Link color="secondary" to="/episodes">
                    Episodes
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <Footer />
        </div>
      </div>

      <main className={styles.main}>{children}</main>

      <div className={styles.rootUnderlay} />
    </LayoutBase>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noHeader: PropTypes.bool,
};

Layout.defaultProps = {
  noHeader: false,
};

export default Layout;
