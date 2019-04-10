import React, { Component } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from './components/Main';
import Category from './layouts/Category';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Category />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
