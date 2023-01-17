import React, { useState } from "react";
import ExpenseItem from "../../UI/expense-item/ExpenseItem";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import "./Expenses.css";
import Chart from "../chart/Chart";
const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredItems = expenses.filter((elem) => {
    const stringifiedYear = new Date(elem.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });
  return (
      <ul className="ul-list">
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart items={filteredItems}/>
        {filteredItems.map((elem) => {
          return (
            <ExpenseItem
              title={elem.title}
              date={elem.date}
              price={elem.price}
              key={elem.id + new Date().getTime}
            />
          );
        })}
      </ul>
  );
};

export default Expenses;
