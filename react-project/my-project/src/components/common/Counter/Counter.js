import React , {useState} from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import classes from './Counter.module.css'



export const Counter = () =>  {
    const [counter, setCounter] = useState(1);
 
    const handleIncrement = () => {
      setCounter(counter + 1);
    };
  
    const handleDecrement = () => {
     if (counter > 1) {
        setCounter( counter - 1 )
    }};


    return ( 
          <div className={classes.counter}>
        <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={handleDecrement}>-</Button>
        <Button disabled>{counter}</Button>
        <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>  
        </div>
      );
    
 }
   