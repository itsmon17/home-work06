import React, { useState } from "react";
import Button from "../../UI/button/Button";
import FormInput from "../../UI/form-input/FormInput";
import "./ExpenseForm.css";
import styled from "styled-components";

const DeleteButton = styled.button`
  margin-top: 3rem;

  display: flex;
  padding-top: 80px;
  padding: 15px 30px;
  height: 51px;
  background: #4a026b;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

const SaveButton = styled.button`
  /* background: #4a026b;
  border-radius: 10px;
  margin-top: 2rem;
  
  display: flex;
  justify-content: space-evenly;
  padding-top: 50px;
  margin-left: 120px; */
  padding: 15px 30px;
  height: 51px;
  background: #4a026b;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-top: 3rem;
  /* margin-left: 163px; */
`;

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrise] = useState("");
  const [date, setDate] = useState("");
  const enabled = title.length > 0 && price.length > 0 && date.length > 0;
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
      {/* <territoryButton> */}
      <DeleteButton title="Отмена" onClick={cancelHandler}>
        Отмена
      </DeleteButton>
      <SaveButton title="Сохранить" onClick={saveHandler} disabled={!enabled}>
        Сохранить
      </SaveButton>
      {/* </territoryButton> */}
    </form>
  );
};

const territoryButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; ;
`;

export default ExpenseForm;
