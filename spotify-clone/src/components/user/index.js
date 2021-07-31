import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  loading: false,
  users: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'fetchDataStart':
      return {
        ...state,
        loading: true,
        users: null,
        error: null,
      };
    case 'fetchDataSuccess':
      return {
        ...state,
        loading: false,
        users: action.users,
        erro: false,
      };
    case 'fetchDataFail':
      return {
        ...state,
        loading: false,
        users: null,
        error: true,
      };
    default: return false;
  }
}

function ListItem({ user }) {
  return (
    <li>{user.name}</li>
  );
}

ListItem.defaultProps = {
  user: PropTypes.string,
};

ListItem.propTypes = {
  user: PropTypes.string,
};

function List({ users }) {
  return (
    <ul>
      {users.map((user) => <ListItem key={user.id} user={user} />)}
    </ul>
  );
}

List.defaultProps = {
  users: PropTypes.instanceOf(Array),
};

List.propTypes = {
  users: PropTypes.instanceOf(Array),
};

function Users() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'fetchDataStart' });

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();

      if (res.status === 200) {
        dispatch({ type: 'fetchDataSuccess', users });
      } else {
        dispatch({ type: 'fetchDataFail' });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: 'fetchDataFail' });
    }
  };

  return (
    <>
      <button onClick={fetchData} type="button">Klik</button>
      {
        state.loading && <p>Loading ...</p>
      }
      {
        state.users && <List users={state.users} />
      }
      {
        state.error && <p>Maaf error</p>
      }
    </>
  );
}

export default Users;
