import React from 'react';
import "../expense-item/ExpenseItem.css"
const ExpenseItem = ({  date, title, price }) => {
    return (
        <div className='elements'>
            <p className='date'>{new Date(date).toString()}</p>
            <p className='title'>{title}</p>
            <p className='price'>$ {price}</p>
        </div>
    );
};

export default ExpenseItem;