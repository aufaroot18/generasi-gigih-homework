import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import CardItem from './CardItem';

function CardList({ data }) {
  const cardItems = data.map((gif) => <CardItem gif={gif} key={gif.id} />);

  return (
    <Container>
      <Grid container spacing={3}>
        {cardItems}
      </Grid>
    </Container>
  );
}

CardList.defaultProps = {
  data: PropTypes.instanceOf(Array),
};

CardList.propTypes = {
  data: PropTypes.instanceOf(Array),
};

export default CardList;
