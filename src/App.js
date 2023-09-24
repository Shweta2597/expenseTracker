import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import { useState } from 'react';

const DUMMY_EXPENSES_DATA = [
  {
    id:'1',
    date:new Date(2021,5,15),
    title:"Car Insurance",
    amount:'45'
  },
  {
    id:'2',
    date:new Date(2022,7,11),
    title:"Bus Insurance",
    amount:'78'
  },
  {
    id:'3',
    date:new Date(2020,9,21),
    title:"Train Insurance",
    amount:'23'
  }
]

function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES_DATA)
  const [filteredYear,setFilteredYear] = useState('2020')

  const filteredExpenses = expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  })

  const saveExpenseDataHandler = (saveExpenseData) => {

    setExpenses((prevExpenses)=>{
      return[saveExpenseData, ...prevExpenses]
    })

  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear)
  }

  return (
    <div className="App">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      <ExpenseList filteredExpenses={filteredExpenses}></ExpenseList>
    </div>
  );
}

export default App;
