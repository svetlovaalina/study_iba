import React from 'react';
import classes from './PhoneCard.module.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';
// import PropTypes from 'prop-types';

export const PhoneCard = ({ name, snippet, imageUrl, id, className }) => {
  return (
    <div key={id} className={cn(className, classes.container)}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={'https://angular.github.io/angular-phonecat/step-14/app/' + imageUrl} alt="Phone " />
      </div>
      <div className={classes.mobileDescription}>
        <Link to={'/phonePage/' + id} className={classes.mobileName}>
          {name}
        </Link>
        <p className={classes.mobileSnippet}>{snippet}</p>
      </div>
    </div>
  );
};

// PhoneCard.propTypes = {
//   name: PropTypes.string,
//   snippet: PropTypes.string,
//   imageUrl: PropTypes.string,
//   id: PropTypes.string,
//   className: PropTypes.object,
// };
