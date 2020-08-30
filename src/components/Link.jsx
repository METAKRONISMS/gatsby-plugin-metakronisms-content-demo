import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import theme from '../themes/data';

const Link = ({
  to,
  color,
  className,
  children,
}) => (
  <AniLink
    data-mk-link
    paintDrip
    hex={theme[color] || color}
    to={to}
    className={className}
  >
    {children}
  </AniLink>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  color: 'primary',
  className: null,
};

export default Link;
