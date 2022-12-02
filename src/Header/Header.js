import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

export const styles = {
  root: {
    borderBottomStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: props => props.borderWidth,
    textAlign: 'left'
  },
  headline: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    fontSize: props => props.headlineSize,
    fontWeight: 800,
    '& > span:first-of-type': {
      marginRight: 8
    }
  },
  servingSummary: {
    fontSize: props => props.servingSummarySize
  }
};

class Header extends React.Component {
  render() {
    const { classes, servingSize, servingsPerContainer } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.headline}>
          <span>Nutrition</span>
          <span>Facts</span>
        </div>
        <div className={classes.servingSummary}>
          {typeof servingSize !== 'undefined' && <div>{`Serving Size ${servingSize}`}</div>}
          {typeof servingsPerContainer !== 'undefined' && (
            <div>{`Serving Size ${servingsPerContainer}`}</div>
          )}
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  headlineSize: 38,
  servingSummarySize: 14,
  borderWidth: 8
};

Header.propTypes = {
  headlineSize: PropTypes.number,
  servingSummarySize: PropTypes.number,
  borderWidth: PropTypes.number,
  servingSize: PropTypes.string,
  servingsPerContainer: PropTypes.number,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Header);
