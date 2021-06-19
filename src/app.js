import React from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Results from "./components/results/Results";
import Footer from "./components/footer/Footer";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      count: 0
    }
  }

  updateState = (results, count) => {
    this.setState({results: results, count: count});
  }
  render () {
    return (
      <React.Fragment>
        <Header/>
        <Form handler={this.updateState}/>
        <Results data={this.state}/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
