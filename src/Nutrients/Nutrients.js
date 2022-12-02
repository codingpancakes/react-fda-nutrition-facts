import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

export const styles = {
  root: {
    textAlign: 'left',
    marginTop: 6
  },
  headline: {
    fontSize: props => props.headlineSize,
    fontWeight: 800,
    borderBottom: '1px solid black'
  },
  calorieSummary: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    borderBottom: '3px solid black',
    fontSize: props => props.calorieSummarySize,
    whiteSpace: 'nowrap',
    '& > span:first-of-type': {
      marginRight: 8
    }
  },
  periodIndication: {
    fontSize: 11,
    textAlign: 'right',
    marginTop: 3
  },
  nutrients: {
    marginTop: 6,
    borderBottom: '5px solid black',
    '& ul': {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      '& ul': {
        paddingLeft: 8
      }
    },
    '& li': {
      borderTop: '1px solid black'
    }
  },
  attribute: {
    fontWeight: 800
  }
};

class Nutrients extends React.Component {
  render() {
    const { classes, calories, caloriesFromFat, children } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.headline}>Amount Per Serving</div>
        <div className={classes.calorieSummary}>
          <span>
            <b className={classes.attribute}>Calories</b> {calories}
          </span>
          <span>{`Calories from Fat ${caloriesFromFat}`}</span>
        </div>
        <div className={classes.periodIndication}>% Daily Value*</div>
        <div className={classes.nutrients}>{children}</div>
      </div>
    );
  }
}

Nutrients.defaultProps = {
  headlineSize: 13,
  calorieSummarySize: 14
};

Nutrients.propTypes = {
  headlineSize: PropTypes.number,
  calorieSummarySize: PropTypes.number,
  calories: PropTypes.number,
  caloriesFromFat: PropTypes.number,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Nutrients);
