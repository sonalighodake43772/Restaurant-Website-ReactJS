import React, { Fragment } from "react";
import HeaderCart from "./HeaderCart";
import  classes from './Header.module.css';
import meals from '../../images/meals.jpg';

const Header=()=>
{
    
    return(
        <Fragment>
        <header className={classes['header']}>
            <h1>ReactMeals</h1>
         
<HeaderCart/>
</header>
<div className={classes['main-image']}>
        <img src={meals} alt='A table full of delicious food!' />
      </div>

        
        </Fragment>


    );
}
export default Header;