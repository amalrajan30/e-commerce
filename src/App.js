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
      <div className="App">
      <Row style={{ width: "40%", margin: 'auto', padding: '20px' }}>
        <Col style={{ height: '20px' }} xs={6} lg={18}></Col>
        <Col lg={6} xs={18} style={{ background: "#4834d4", height: '20px' }}></Col>
      </Row>
      <Row style={{ width: "40%", margin: 'auto' }}>
        <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequuntur illo debitis, soluta quos tempora libero minima nihil, voluptates exercitationem reprehenderit iusto! Aperiam sit reiciendis incidunt corrupti dolorem ea deserunt.
        Animi aliquid ad, vero quia hic odio. Necessitatibus, facilis ratione hic tenetur incidunt ea vitae minus architecto fugit alias explicabo ut exercitationem placeat? Et, molestias veritatis! Sunt repudiandae aliquam fugit.
        Esse mollitia fugiat nulla voluptatem explicabo harum amet delectus asperiores natus inventore, veniam praesentium nostrum ratione voluptate qui minima nesciunt, non minus, consectetur unde nam? Odio provident cupiditate velit voluptate.
        Consequuntur aut ratione, et ipsam modi vero placeat asperiores atque rerum quibusdam maiores, facilis, similique aliquam? Explicabo odio aliquid culpa suscipit dicta error fugiat mollitia esse laboriosam! Debitis, ad! Sint.
        Enim, reiciendis sit impedit tenetur dolorem corrupti ad asperiores minima quam laborum voluptatibus at suscipit saepe atque natus sapiente placeat officiis doloremque. Eaque sint molestiae nostrum amet optio iste rerum.</Col>
      </Row>
      <Row style={{ width: "40%", margin: 'auto', padding: '20px' }}>
        <Col style={{ height: '20px' }} xs={6} lg={18}></Col>
        <Col lg={6} xs={18} style={{ background: "#4834d4", height: '20px' }}></Col>
      </Row>
    </div>
    );
  }
}

export default App;
