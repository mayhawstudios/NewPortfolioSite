import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import SplashPage from './splashpage.js';
import About from './about.js';
import Projects from './projects.js';
import Resume from './resume.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SplashPage/>
        <About/>
        <Projects/>
        <Resume/>
        <Footer/>
      </div>
    );
  }
}
