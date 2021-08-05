/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue',
    },
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  },
});

function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>
      <Button
        onClick={() => {
          console.log('ok');
        }}
        type="submit"
        color="primary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}

export default Create;
