// import React , {useEffect, useState} from 'react';
// import classes from './Counter.module.css';


// function Counter() {
//   const [count, setCounter] = useState(0);
//   const [color, setColor] = useState('rgb(97, 255, 255)');
//   let divStyle = {backgroundColor: color};

//   function handleClick() {
//     setCounter( (prevCount) => {
//       return prevCount + 1
//     })
//     if ((count + 1) % 5 === 0 && count > 1) {
//       const randomColor = "#"+((1<<24) * Math.random()|0).toString(16);
//       setColor(randomColor) ;
//     }
//   };
  
//   useEffect( () => {
//     console.log('ComponentDidMount')
//   },[])

//   return (
//     <div>
//       <button onClick={handleClick} className={`btn btn-info ${classes.buttonStyle}`} style={divStyle}>{count}</button>
//     </div>);
 
// };

//  export {Counter}


 

// ..........Here is the old code with classes....................................................................................................
import React from 'react';
import classes from './Counter.module.css';

export class Counter extends React.Component {
  state = {
    count:0,
    backgroundColor: '#B3CCFF',
  };

  constructor(props){
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps');
  //   if (!state.count) {
  //     return {
  //       ...state,
  //       count: props.count,
  //     }
  //   }

  //   return state;
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  handleClick = () => {

    this.setState(prevState => ({
      count: prevState.count + 1
    }));

    if ((this.state.count + 1) % 5 === 0 && this.state.count > 1) {
      const randomColor = "#"+((1<<24) * Math.random()|0).toString(16);

      this.setState({backgroundColor: randomColor});
    }

  };

  render() {
    console.log('render');
    return (
      <button
        className={classes.button}
        style={{backgroundColor: this.state.backgroundColor}}
        onClick={this.handleClick}>
         {this.state.count} 
      </button>
    )
  }
}
