import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import { useState } from 'react';

const DUMMY_EXPENSES_DATA = [
  {
    date:new Date(2021,5,15),
    title:"Car Insurance",
    amount:'$45'
  },
  {
    date:new Date(2022,7,11),
    title:"Bus Insurance",
    amount:'$78'
  },
  {
    date:new Date(2019,9,21),
    title:"Train Insurance",
    amount:'$23'
  }
]

function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES_DATA)

  const saveExpenseDataHandler = (saveExpenseData) => {

    const displayedExpensesData = [
      saveExpenseData,
      ...expenses
    ]
    setExpenses(displayedExpensesData)
    console.log(expenses);
    console.log(displayedExpensesData);

  }



  const [filteredYear,setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear)
  }

  return (
    <div className="App">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      { 
      expenses.map(expensesDisplayed => (
        <ExpenseItem date={expensesDisplayed.date} title={expensesDisplayed.title} amount={expensesDisplayed.amount}></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
