import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";
import styles from "./components/chart/Chart.module.css"

const items = [
  {
    id: 1,
    title: 'Фрукты',
    price: 100,
    date: new Date(2021, 0, 28)
  },
  {
    id: 2,
    title: 'еда',
    price: 800,
    date: new Date(2021, 1, 12)
  },
  {
    id: 3,
    title: 'чай',
    price: 900,
    date: new Date(2022, 2, 12)
  },{
    id: 4,
    title: 'Туалетная бумага',
    price: 80,
    date: new Date(2022, 3, 28)
  },
  {
    id: 5,
    title: 'Молоко',
    price: 950,
    date: new Date(2019, 4, 17)
  },
  {
    id: 6,
    title: 'Ноут бук',
    price: 28300,
    date: new Date(2022, 4, 28)
  },
  {
    id: 7,
    title: 'Вода',
    price: 350,
    date: new Date(2019, 5, 28)
  },
  {
    id: 8,
    title: 'Книги',
    price: 800,
    date: new Date(2020, 6, 28)
  },
  {
    id: 9,
    title: 'Ручки',
    price: 150,
    date: new Date(2019, 7, 28)
  },
   {
    id: 10,
    title: 'Зарядники',
    price: 700,
    date: new Date(2020, 8, 18)
  },
  {
    id:11,
    title: "Телефоны",
    price: 2600,
    date: new Date(2023, 9, 18)
  },
  {
    id:12,
    title: 'Сумки для ноутбука',
    price: 900,
    date: new Date(2023, 10, 14)
  },{
    id:13,
    title: 'кофе',
    price: 500,
    date: new Date(2019, 11, 28)
  },{
    id:14,
    title: 'проектор',
    price: 2700,
    date: new Date(2020, 6, 20)
  },{
    id:15,
    title: 'Удлинитель',
    price: 1000,
    date: new Date(2021, 4, 18)
  },
]

function App() {
  const [expenses , setExpenses] = useState(items)
   const addNewExpenseHandler = (data) => {
   const upExpenses = [...expenses];
   upExpenses.push(data)
   setExpenses(upExpenses)
   }                                    

  return <div className="apps">   
    <div className="items">
    <NewExpense onNewExpenseAdd={addNewExpenseHandler}/>
    <Expenses expenses={expenses}/>
    </div>
  </div>
}

export default App;