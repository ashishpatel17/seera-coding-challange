import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
import moment from "moment";

const styles = {
}

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromDate: new Date("10/26/2020"),
            toDate: new Date("10/31/2020")
        };
    }


    onFromDateChange = (e) => {
        this.setState({ fromDate: e });
    }

    onToDateChange = (e) => {
        this.setState({ toDate: e });
    }

    onSearchBtnClick = (e) => {
        let startDate = moment(this.state.fromDate, "DD.MM.YYYY");
        let endDate = moment(this.state.toDate, "DD.MM.YYYY");
        if(endDate.isBefore(startDate)){
            alert("Checkout Date should be after the Checkin Date");
        }else{
            browserHistory.push('/hotelSearch/' + this.state.fromDate.getTime() + '/' + this.state.toDate.getTime());
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="SearchPanelComponent">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container >
                        <Grid item sm={5} md={5} >
                            <div className="datePickerContainer">
                                <DatePicker
                                    clearable
                                    margin="normal"
                                    label="Check In"
                                    value={this.state.fromDate}
                                    format="dd/MM/yyyy"
                                    views={["year", "month", "day"]}
                                    onChange={this.onFromDateChange}
                                />
                            </div>
                        </Grid>
                        <Grid item sm={5} md={5} >
                            <div className="datePickerContainer">
                                <DatePicker
                                    clearable
                                    margin="normal"
                                    label="Check Out"
                                    value={this.state.toDate}
                                    format="dd/MM/yyyy"
                                    views={["year", "month", "day"]}
                                    onChange={this.onToDateChange}
                                />
                            </div>
                        </Grid>
                        <Grid item sm={2} md={2} >
                            <div className="searchBtnContainer">
                                <Button variant="contained" color="primary" onClick={this.onSearchBtnClick}>
                                    Search
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>

        );
    }
}

SearchPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {};
}

export default withStyles(styles)(connect(mapStateToProps)(SearchPanel));