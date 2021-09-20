import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

const Spinner = () => (
  <div className="spinnerLoader">
      <svg className="spinnerLoader__svg" width="89" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M83.861 65.745C80.4541 72.2759 75.3718 77.7833 69.1349 81.7026C62.8981 85.6219 55.7312 87.8121 48.3689 88.0486C41.0066 88.2851 33.7139 86.5594 27.2383 83.0485C20.7628 79.5376 15.3374 74.3678 11.5185 68.069C7.69948 61.7703 5.62429 54.5692 5.50563 47.204C5.38698 39.8389 7.22915 32.5748 10.8433 26.1562C14.4573 19.7377 19.7134 14.3958 26.0724 10.6781C32.4315 6.96042 39.6649 5.00076 47.031 5"
                stroke="#1278E2" strokeWidth="10"/>
      </svg>

      <span className="spinnerLoader__text">
            Loading...
        </span>
  </div>
);

Spinner.propTypes = {};

Spinner.defaultProps = {};

export default Spinner;
