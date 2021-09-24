import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [name, setName] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals)
            })
    }, [])
    const showDetails = mealName => {
        setName(mealName)
    }
    return (
        <div className='meals-conponent'>
            <div className='meals'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} showDetails={showDetails} meal={meal}></Meal>)
                }
            </div>
            <div className='box'>
                <div className='meal-details'>
                    <h2>Meal Name</h2>
                    <h4 className='show-name'>{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default Meals;