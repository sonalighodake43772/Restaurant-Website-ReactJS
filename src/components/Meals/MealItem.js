import React from 'react';
import classes from './MealItem.module.css'

const MealItem=(props)=>
{
    const price=`$${props.price}`;

    return(
       
            <li className={classes.mealitem}>
                 <div>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
                
                </div>
                <div></div>
            </li>

       

    );
}
export default MealItem;
