// checked 128
import React, { Component } from 'react';
import './index.css';
import Layout from './components/layout/layout.js'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
         <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}
export default App