import React, {
  Component
} from 'react';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends React.Component {
  state = {
    count: 0,
    
     divStyle: {
       backgroundColor: '#B3CCFF',
       fontSize: '38pt'
      }
  };

  
  handleClick = () => {
   
      this.setState((prevState, {
          count
        }) => ({
          count: prevState.count + 1
        }));
      if ((this.state.count+1) % 5 === 0 && this.state.count>1) {
        var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
          this.setState((state)=> {
            return {divStyle:{backgroundColor: randomColor, fontSize:"38pt"} }
          });
        };
    };

  render() { return <button style={this.state.divStyle} onClick={this.handleClick}>{this.state.count}</button>; }
  }

export default App;