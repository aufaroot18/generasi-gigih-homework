import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  cardImage: {
    height: 300,
    objectFit: 'cover',
  },
  cardTitle: {
    marginBottom: '1rem',
  },
});

function CardItem({ gif }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={3}>
      <Card>
        <CardMedia
          className={classes.cardImage}
          image={gif.images.original.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h2" color="primary" gutterBottom>
            {gif.title}
          </Typography>
          <Typography color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi
            iste animi dolorem aperiam dolores quisquam consequuntur non, saepe
            eum.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

CardItem.defaultProps = {
  gif: PropTypes.objectOf(PropTypes.any),
};

CardItem.propTypes = {
  gif: PropTypes.objectOf(PropTypes.any),
};

export default CardItem;
