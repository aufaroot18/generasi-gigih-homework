/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SubjectOutlined from '@material-ui/icons/SubjectOutlined';
import AddCircleOutlineOutlined from '@material-ui/icons/AddCircleOutlineOutlined';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    padding: theme.spacing(3),
  },
  drawer: {
    width: '280px',
  },
  drawerPaper: {
    width: '280px',
  },
  active: {
    backgroundColor: '#f4f4f4',
  },
  title: {
    padding: theme.spacing(2),
  },
  appbar: {
    width: 'calc(100% - 280px)',
  },
  toolbar: theme.mixins.toolbar,
  date: {
    flex: 1,
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

function getDate() {
  const date = new Date();
  return date.toLocaleString();
}

function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const [isActive, setIsActive] = useState(null);

  const menuItem = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/notes/',
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/notes/create',
    },
  ];

  return (
    <div className={classes.root}>
      {/* appbar */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>Today is {getDate()}</Typography>
          <Typography>Aufa Billah</Typography>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
            className={classes.avatar}
          />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        <List>
          {menuItem.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => {
                history.push(item.path);
                setIsActive(item.text);
              }}
              className={item.text === isActive && classes.active}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
