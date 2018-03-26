import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  // actually need three states to not see loginForm when waiting for firebase api
  // to determine if logged in. So need true, false and null.
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB54TNNDBzYkXqHfDg0Mbt6oZ6mm-f-5zM",
      authDomain: "auth-a7e91.firebaseapp.com",
      databaseURL: "https://auth-a7e91.firebaseio.com",
      projectId: "auth-a7e91",
      storageBucket: "auth-a7e91.appspot.com",
      messagingSenderId: "7495121089"
    });

    // add an event watcher on user log in or log out
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: "row", padding: 5 }}>
            <Button handlePress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      case null:
        return (
          <View style={{ flexDirection: "row", padding: 5 }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
