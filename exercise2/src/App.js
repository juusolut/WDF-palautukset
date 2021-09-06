import React ,{ useState } from "react";
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

    const addMilk = () => {
      let copy = [...food]
      copy[0].qty += getRandomNumber()
      console.log(copy[0].qty)
      return (
        setFood(copy)
      )
    }

    const addBananas = () => {
      let copy = [...food]
      copy[1].qty += getRandomNumber()
      console.log(copy[1].qty)
      return (
        setFood(copy)
      )
    }

    const addBread = () => {
      let copy = [...food]
      copy[2].qty += getRandomNumber()
      console.log(copy[2].qty)
      return (
        setFood(copy)
      )
    }

    const addEggs = () => {
      let copy = [...food]
      copy[3].qty += getRandomNumber()
      console.log(copy[3].qty)
      return (
        setFood(copy)
      )
    }

    const getRandomNumber = () => Math.floor(Math.random() * 10)

    return (
      <div className={ styles.shoppingList }>
        <Title applicationDescription={ applicationDescription } applicationName={ applicationName }>
        </Title>
        <ShoppingList items={ food }></ShoppingList>
        <button onClick={addMilk}>Add Milk</button>
        <button onClick={addBananas}>Add Bananas</button>
        <button onClick={addBread}>Add Bread</button>
        <button onClick={addEggs}>Add Eggs</button>
      </div>
    )
}

export default App;