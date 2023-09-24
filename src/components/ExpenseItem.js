import React from "react";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {

    // const [title,setTitle] = useState(props.title);
    // const clickHandler = () => {
    //     setTitle("Updated")
    //     console.log("Clicked")
    // }

  return (
    <div className="container">
      <div className="row align-items-start">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="col">{props.title}</div>
        <div className="col">${props.amount}</div>
        {/* <div className="col"><button onClick={clickHandler}>Click me</button></div> */}
      </div>
    </div>
  );
}
