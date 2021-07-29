import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredItems, setFilteredItems] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);

    const resultExpenses = props.items.filter(item => item.date.getFullYear().toString() === selectedYear);
    setFilteredItems(resultExpenses);
  
  };

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredItems.map((expense) => (
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
