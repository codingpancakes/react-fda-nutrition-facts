import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

export const styles = {
  root: {},
  table: {
    width: '100%',
    fontStyle: 14,
    borderCollapse: 'collapse',
    '& tr': {
      borderBottom: '1px solid black'
    },
    '& tr > td': {
      textAlign: 'center',
      '&:first-of-type': {
        textAlign: 'left'
      },
      '&:last-of-type': {
        textAlign: 'right'
      }
    }
  },
  footNotes: {
    fontSize: 11,
    textAlign: 'left',
    marginTop: 3
  }
};

class Vitamins extends React.Component {
  render() {
    const { classes, collection } = this.props;

    return (
      <div className={classes.root}>
        <table className={classes.table}>
          <tbody>
            {collection.map((columns, idx) => (
              <tr key={idx.toString()}>
                {columns.map((column, idx) => (
                  <React.Fragment key={idx.toString()}>
                    <td>{column}</td>
                    {idx + 1 !== columns.length && <td>&#x25cf;</td>}
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className={classes.footNotes}>
          * Percentage Daily Values are based on a 2,000 calorie diet. Your Daily Values may be
          higher or lower depending on your calorie needs.
        </div>
      </div>
    );

    return <div className={classes.root} />;
  }
}

Vitamins.defaultProps = {
  collection: []
};

Vitamins.propTypes = {
  collection: PropTypes.array,
  seperator: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Vitamins);
