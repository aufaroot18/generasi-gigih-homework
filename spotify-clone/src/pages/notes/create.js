/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    margin: '1.5rem 0',
    display: 'block',
  },
});

function Create() {
  /* state */
  const classes = useStyles();

  const history = useHistory();

  const [field, setField] = useState({
    title: '',
    detail: '',
    category: 'male',
  });

  const [error, setError] = useState({
    title: false,
    detail: false,
  });

  /* handler */
  const handleField = (e) => {
    const { name, value } = e.target;

    setField({
      ...field,
      [name]: value,
    });
  };

  const handleError = () => {
    setError({
      title: false,
      detail: false,
    });

    if (field.title === '') {
      setError((prev) => ({
        ...error,
        title: true,
      }));
    }

    if (field.detail === '') {
      setError((prev) => ({
        ...prev,
        detail: true,
      }));
      return true;
    }

    return false;
  };

  const addNote = async () => {
    const { title, detail, category } = field;
    const data = { title, detail, category };

    const result = await fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    history.push('/notes');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isError = handleError();

    if (!isError) {
      addNote();
    }
  };

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
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={handleField}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          name="title"
          error={error.title}
        />
        <TextField
          onChange={handleField}
          className={classes.field}
          label="Detail"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          required
          name="detail"
          error={error.detail}
        />
        <FormControl className={classes.field}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup value={field.category} onChange={handleField}>
            <FormControlLabel
              name="category"
              value="work"
              control={<Radio color="primary" />}
              label="Work"
            />
            <FormControlLabel
              name="category"
              value="money"
              control={<Radio color="primary" />}
              label="Money"
            />
            <FormControlLabel
              name="category"
              value="todos"
              control={<Radio color="primary" />}
              label="Todos"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Create;
