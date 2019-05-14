import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import _ from "lodash";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Header from "./common/Header";
import { connect } from "react-redux";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import HotelDetail from './common/HotelDetail';
import RangeSlider from './common/RangeSlider';
import { browserHistory } from 'react-router';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  backButton: {
    margin: "20px 20px 0px 0px"
  }
});

class HotelListing extends React.Component {
  componentWillMount = () => {
    this.props.dispatch({ type: 'FETCH_HOTELS' });
    this.setState({ hotelList: this.props.hotels });
    if (this.props.params.fromDate && this.props.params.toDate) {
      let fromDate = moment(new Date(parseInt(this.props.params.fromDate))).format('DD/MM/YYYY');
      let toDate = moment(new Date(parseInt(this.props.params.toDate))).format('DD/MM/YYYY');
      fromDate = moment(fromDate, 'DD.MM.YYYY');
      toDate = moment(toDate, 'DD.MM.YYYY');
      this.setState({ fromDate: fromDate });
      this.setState({ toDate: toDate });
      this.setState({
        totalNights: toDate.diff(fromDate, 'days')
      })
    }
  }

  handleSortChange = (event) => {
    this.setState({ sortBy: event.target.value });
  }

  onBackButton() {
    browserHistory.push('/');
  }

  onHotelNameSearch = (event) => {
    this.setState({ hotelTextSearch: event.target.value });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.hotels !== this.state.hotelList) {
      this.setState({
        hotelList: nextProps.hotels
      });
    }
  }



  constructor(props) {
    super(props);
    this.state = {
      totalNights: 0,
      sortBy: "name",
      hotelTextSearch: "",
      hotelList: "",
      fromDate: undefined,
      toDate: undefined
    };
  }

  filterHotelList = (fromDate, toDate) => {
    let filteredList = [];
    this.state.hotelList.map(function (data) {
      for (var i = 0; i < data.availability.length; i++) {
        var startDate = moment(data.availability[i].from, "DD.MM.YYYY");
        var endDate = moment(data.availability[i].to, "DD.MM.YYYY");
        if ((fromDate.isAfter(startDate) && toDate.isAfter(startDate) || fromDate.isSame(startDate) && toDate.isSame(startDate)) &&
          (fromDate.isBefore(endDate) && toDate.isBefore(endDate) || fromDate.isSame(endDate) && toDate.isSame(endDate))) {
          filteredList.push(data);
        }
      }
    });
    if (filteredList.length > 0 && this.state.hotelTextSearch.length > 0) {
      let textSearch = [];
      filteredList.map((o) => {
        let regex = new RegExp(this.state.hotelTextSearch, "i");
        if (regex.exec(o.name)) {
          textSearch.push(o);
        }
      });
      return _.sortBy(textSearch, [this.state.sortBy]);
    }
    return _.sortBy(filteredList, [this.state.sortBy]);
  }

  render() {
    let filteredList = [];
    if (this.state.fromDate && this.state.toDate) {
      filteredList = this.filterHotelList(this.state.fromDate, this.state.toDate);
    }
    const { classes, hotels } = this.props;
    return (
      <div className="hotelListingPage">
        <Header></Header>
        <Grid container >
          <Grid item md={3} >
            <div >
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField id="SearchByHotelName"
                    label="Search By Hotel Name"
                    value={this.state.hotelTextSearch}
                    onChange={this.onHotelNameSearch}
                    margin="normal" />
                </Grid>
              </Grid>
            </div>
            {/* <RangeSlider>

                    </RangeSlider> */}

          </Grid>
          <Grid item md={9}>
            <div className="listHeader">
              <Grid container >
                <Grid item md={6} >
                  <div className="listHeaderLeftPane">
                    <Typography variant="h6" color="inherit">
                      Total Nights : {this.state.totalNights}
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div className="listHeaderRightPane">
                    <Button className={classes.backButton} onClick={this.onBackButton} variant="contained" color="primary" >
                      Back to search
                                </Button>
                    <FormControl className={classes.formControl}>
                      <InputLabel shrink htmlFor="sort-dropdown-placeholder">
                        Sort By
                                    </InputLabel>
                      <Select
                        value={this.state.sortBy}
                        onChange={this.handleSortChange}
                        input={<Input name="age" id="sort-dropdown-placeholder" />}
                        displayEmpty
                        name="sortBy"
                      >
                        <MenuItem value="price">Price</MenuItem>
                        <MenuItem value="name">Name</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div>
              {this.state.hotelList.length > 0 ? (
                <Grid container >
                  {filteredList.length > 0 ? (
                    filteredList.map((data, i) => (
                      <Grid key={i} item md={4}>
                        <div className="detailCard">
                          <HotelDetail cardData={data}></HotelDetail>
                        </div>
                      </Grid>
                    ))
                  ) : (
                      <p className="noRecordFound">
                        No Hotel Found
                      </p>
                    )}
                </Grid>
              ) : (
                  <p></p>
                )}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hotels: state.hotels || [],
  };
}

HotelListing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(HotelListing));
