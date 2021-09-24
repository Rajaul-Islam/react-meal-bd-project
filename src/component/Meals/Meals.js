import React, { lazy, useEffect, useState } from 'react';
import Error from '../Error/Error';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [name, setName] = useState([])
    // const [searchMeals, setSearchMeals]=useState([]);
    const [searchValue, setSearchValue] = useState([])
    // console.log(searchValue)
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then(res => res.json())
            .then(data => {
                if (!null) { setMeals(data.meals) }
                else {
                    console.log('from else condition')
                }
                // console.log(data.meals.length);

                // setSearchMeals(data.meals)
            })
    }, [searchValue])
    const showDetails = mealName => {
        setName(mealName)
    }
    const handelSearch = event => {
        const searchText = event.target.value;
        setSearchValue(searchText)
        const matchMeals = meals.filter(product => product.strMeal.toLowerCase().includes(searchText.toLowerCase()))
        // console.log(matchMeals)
        setMeals(matchMeals)


        // console.log(searchText)
    }
    const string = 'no product found';
    return (
        <div className='main'>
            <input onChange={handelSearch} placeholder='Search Meal' type="text" />
            <div>
                
            </div>
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
        </div>
    );
};

export default Meals;