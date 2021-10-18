import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import PrivateRoute from '../components/PrivateRoute';
import EditNotePage from './EditNotePage';
import Favorites from './Favorites';
import Home from './Home';
import MyNotes from './MyNotes';
import NewNote from './NewNote';
import NotePage from './NotePage';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/myNotes" component={MyNotes} />
        <PrivateRoute path="/favorites" component={Favorites} />
        <PrivateRoute path="/newNote" component={NewNote} />
        <PrivateRoute path="/edit/:id" component={EditNotePage} />
        <Route path="/note/:id" component={NotePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Layout>
    </Router>
  );
};

export default Pages;
