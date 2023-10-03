import React from 'react';
import Home from './component/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Note the removal of 'Routes'
import Footer from './component/Footer';
import CoursesInfo from './component/CoursesInfo';

const App = () => {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} /> 
        <Route path="/courses" component={CoursesInfo} />
        <Footer />
      </>
    </Router>
  );
};

export default App;
