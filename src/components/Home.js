import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from "./common/Header";
import SearchPanel from "./common/SearchPanel";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Home extends React.Component {
  
  componentWillMount() {
    // this.props.dispatch({type: 'FETCH_HOTELS'});
  }

  constructor(props) {
    super(props);
  }
  render() {
    const { classes,hotels } = this.props;
    return (
      <div className="homePage">
        <Header></Header>
        <div className="searchContainer">
          <div className={classes.root}>
            <Grid container >
              <Grid item   md={2} >
              </Grid>
              <Grid item  md={8}>
                  <Paper >
                    <div className="searchPanel">
                      <SearchPanel></SearchPanel>
                    </div>
                  </Paper>
              </Grid>
              <Grid item   md={2}>
                
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hotels: state.hotels || [],
  };
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(Home));
