import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";

const styles = {
  card: {
    maxWidth: 300
  },
  media: {
    height: 180,
  },
};

class HotelDetail extends React.Component {
  
  componentWillMount() {
    this.setState ({
      cardData:this.props.cardData
   });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cardData !== this.state.cardData) {
      this.setState({
        cardData: nextProps.cardData
      });
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
       cardData:{}
    };
  }
  render(){
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/media/no-image-available.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {this.state.cardData.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Price : {this.state.cardData.price}  AED
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              City : {this.state.cardData.city}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

HotelDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {};
}

export default withStyles(styles)(connect(mapStateToProps)(HotelDetail));

