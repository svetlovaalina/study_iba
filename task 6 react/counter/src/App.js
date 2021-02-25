import React, {Component} from 'react';
import classes from './App.module.css';
import {Counter} from './components/Counter';


class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <h1 className={classes.Header}>При каждом пятом нажатии на кнопку она меняет цвет:</h1>
        < Counter />
     
      </div>  
    );
  }
}

export default App;


// .............После тега h1...................................................................
  {/* {this.state.isVisible && <Counter count={2} />}
        <button onClick={() => this.setState({isVisible: false})}>Hide</button> 
        */}