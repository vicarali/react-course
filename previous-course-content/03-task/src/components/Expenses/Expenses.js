import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  let [expenses, setExpenses] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    filterExpenses(selectedYear);
  };

  function filterExpenses(selectedYear) {
    const filteredExpenses = props.items.filter(
      (expense) => expense.date.getFullYear() === parseInt(selectedYear)
    );

    setExpenses(filteredExpenses);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
