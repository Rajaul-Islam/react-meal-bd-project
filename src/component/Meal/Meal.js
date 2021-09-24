import React from 'react';
import './Meal.css'
const Meal = (props) => {
    const {strMeal,strArea,idMeal,strMealThumb,strInstructions }=props.meal;
    // console.log(props.meal)
    return (
        <div onClick={()=>props.showDetails(strMeal)} className='meal'>
            <div>
               <img className='img-fluid' src={strMealThumb} alt="" />
            </div>
            <div>
                <h3>{strMeal}</h3>
                <h5>{strArea}</h5>
                <p>{strInstructions.slice(0,200)}</p>
            </div>
        </div>
    );
};

export default Meal;