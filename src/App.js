import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  { id: 1, title: "shower", amount: "299.90", date: new Date(2022, 1, 28) },
  { id: 2, title: "bathtub", amount: "199.90", date: new Date(2021, 2, 18) },
  { id: 3, title: "toilet", amount: "129.90", date: new Date(2020, 3, 22) },
  { id: 4, title: "mirror", amount: "109.90", date: new Date(2021, 1, 21) },
  { id: 5, title: "bicycle", amount: "299.90", date: new Date(2019, 5, 10) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previous) => {
      return [expense, ...previous];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
