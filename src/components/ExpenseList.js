import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList(props) {

  if (props.filteredExpenses.length === 0) {
    return "Found no expenses";
  }

  return (
    <ul>
      {props.filteredExpenses.map((expensesDisplayed) => (
        <ExpenseItem
          key={expensesDisplayed.id}
          date={expensesDisplayed.date}
          title={expensesDisplayed.title}
          amount={expensesDisplayed.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
}
