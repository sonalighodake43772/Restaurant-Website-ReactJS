import React, { Fragment } from 'react';
import MealList from './MealList';
import MealSummery from './MealSummery';
const Meals =()=>
{
return(
    <Fragment>
    < MealSummery/>
    <MealList/>
    </Fragment>

);
}
export default Meals;
