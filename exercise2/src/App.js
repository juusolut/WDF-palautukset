import React, { useState } from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

const App = (props) => {

  const foodObject = {
    items: [
      { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
      { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
      { id: 3, value: 'Bread', qty: 3, unit: 'x' },
      { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
    ]
  }

  const [food, setFood] = useState(foodObject.items)

  const { applicationDescription, applicationName } = props

  const addProduct = (foodItem) => {
    let foodCopy = [...food]
    const index = foodCopy.findIndex(food => food.value === foodItem)
    console.log(foodCopy.findIndex(food => food.value === foodItem))

    // luodaan uusi objekti arrayhin, koska ruokaa ei vielä ole siellä
    if (index === -1) {
      //console.log('here')
      const newFood = {
        id: foodCopy.length + 1,
        value: foodItem,
        qty: getRandomNumber(),
        unit: 'x'
      }
      foodCopy.push(newFood)
      setFood(foodCopy)
    } else {
      foodCopy[index].qty += getRandomNumber();
      //console.log(foodCopy[index].qty)
      setFood(foodCopy)
    }
    console.log(foodCopy)
  }

  const getRandomNumber = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

  return (
    <div className={styles.shoppingList}>
      <Title applicationDescription={applicationDescription} applicationName={applicationName}>
      </Title>
      <ShoppingList items={food}></ShoppingList>
      {/* <button onClick={() => addProduct('Milk')}>Add Milk</button> */}
      <button onClick={() => addProduct('Strawberries')}>Add Strawberries 🍓</button>
      <button onClick={() => addProduct('Pizzas')}>Add Pizzas 🍕</button>
      <button onClick={() => addProduct('Hamburgers')}>Add Hamburgers 🍔</button>
      <button onClick={() => addProduct('Pears')}>Add Pears 🍐</button>
    </div>
  )
}

export default App;