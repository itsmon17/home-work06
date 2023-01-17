import React, { useState } from "react";
import Button from "../../UI/button/Button";
import FormInput from "../../UI/form-input/FormInput";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrise] = useState("");
  const [date, setDate] = useState("");
  const enabled =
  title.length > 0 &&
  price.length > 0 &&
  date.length > 0;
  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title,
      price,
      date,
    };
    props.onNewExpenseAdd(expenseDate);
    setTitle("");
    
    setPrise("");
    setDate("");
  };
  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  
  const priceInputChangeHandler = (event) => {
    setPrise(event.target.value);
  };
  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

 
  return (
    <form className="form">
      <FormInput
        id="name"
        labelName="Название"
        inputType="text"
        placeholder="Введите название"
        value={title}
        onChange={titleInputChangeHandler}
      />

      <FormInput
        labelName="Количество денег
      "
        inputType="number"
        id="money"
        value={price}
        onChange={priceInputChangeHandler}
      />

      <FormInput
        labelName="Date"
        inputType="date"
        placeholder="дд.мм.гггг"
        id="date"
        value={date}
        onChange={dateInputChangeHandler}
      />
      <div className="button_div">
        <Button title="Отмена" onClick={cancelHandler} />
        <Button title="Сохранить" onClick={saveHandler} disabled={!enabled}/>
      </div>
    </form>
  );
};

export default ExpenseForm;


// GIT vcs
// GITHUB 
// EACH COMPONENT HAS OWN STATE
// LIFTING STATE UP 
// CHILDREN
// KEYS 
// commit push 
// branches 
// local end remote branches/ changes 