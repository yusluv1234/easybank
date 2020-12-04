import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './components/pages/homePage/HomePage';
import SignIn from './components/pages/sign-in/sign-in.component';
import SignUp from './components/pages/sign-up/sign-up.component';
// import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
// import Navbar from './components/navbar/Navbar';

class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount() {
      const { setCurrentUser } = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

  render() {
    return (
      <div className='App'>
        <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          {/* // render={() => this.props.currentUser ? ( 
          <Redirect to='/'
          ) : ( <SignInAndSignUpPage />
          )}
           /> */}
        </Switch>
        </Router>
      </div>
    );
  }
  
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const mapDistpatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDistpatchToProps)(App);
