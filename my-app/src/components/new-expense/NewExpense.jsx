import React, { useState } from "react";
import Button from "../../UI/button/Button";
import ExpenseForm from "../expense-form/ExpenseForm";
import "./NewExpense.css"

const NewExpense = ({onNewExpenseAdd}) => {
  const [showForm, setShowForm] = useState(false);
  const showExpenseForm = () => {
    setShowForm((prevState) => {
    return ! prevState
    });
  };
  return (
    <div className="container">
      {showForm ? (
        <ExpenseForm onShowForm={showExpenseForm} 
        onNewExpenseAdd={onNewExpenseAdd}/>
      ) : (
        <Button 
        title="Добавить новый расход"
        onClick={showExpenseForm} />
      )}
    </div>
  );
};

export default NewExpense;