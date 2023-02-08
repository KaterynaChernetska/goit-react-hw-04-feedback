import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.btnWrap}>
        {options.map(item => (
          <button
            key={item}
            type="button"
            className={css.btn}
            name={item}
            onClick={() => {
              onLeaveFeedback(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}
