import React , {useEffect, useState, useRef} from 'react';
import classes from './List.module.css';


function List() {
 const [list, setList] = useState([]);
    
    useEffect( () => {
    fetch("http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json")
    .then(response => response.json())
    .then(result => {
        setList(result) 
        console.log(result)
    })
    },[])   


    return (
        <div> 
          <ol className={classes.phone}>
          {list.map((item,i) => 
        <li key={i}>
            <div className={classes.mobileContainer}> 
                <img src={'http://angular.github.io/angular-phonecat/step-14/app/'+ item.imageUrl}/> 
                <div className={classes.mobileDescription}>
                    <a href="#" className={classes.mobileName}>{item.name} </a>
                    <p className={classes.mobileSnippet}>{item.snippet}</p>
                </div>
            </div>
        </li>)}
          </ol>
        </div>);
   
  };
  
   export {List}
  