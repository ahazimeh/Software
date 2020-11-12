import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
var b = ""
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    this.state = { brands: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}
Brands() {
  fetch("http://localhost:9000/testAPI/brands")
        .then(res => res.text())
        .then(res => this.setState({ brands: res }));
      
}
componentWillMount() {
    this.Brands();

}
render(){
  // for(let i=0;i<this.state.brands.length;i++)
  // alert(i);
  var a="";
  var icon = [];
  if(this.state.brands!=""){
  a = JSON.parse(this.state.brands);
  for(let i = 0;i<a.length;i++);
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className="App-intro">{this.state.apiResponse}</p>
      <p className="App-intro">{this.state.brands}</p>
      {/* src={`${process.env.PUBLIC_URL}/logo.svg`}  */}
      <img src={require('./logo.svg')} />

    </div>
  );
}
}

export default App;
