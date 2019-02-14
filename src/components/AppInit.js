import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { alreadyLogin, notLoginYet } from '../actions'
import Main from './Main';



class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyDQAAsYiGiVGnbue3eBimw_jAeKHsIQMA0',
      authDomain: 'managerapp-84816.firebaseapp.com',
      databaseURL: 'https://managerapp-84816.firebaseio.com',
      projectId: 'managerapp-84816',
      storageBucket: 'managerapp-84816.appspot.com',
      messagingSenderId: '369346300985'
    };
    firebase.initializeApp(config);
      
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            this.props.alreadyLogin(user);
        }
        else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return(
          <Main />
    );
  }
}



export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
