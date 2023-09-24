import React, { useState } from "react";

export default function ExpenseForm(props) {
  const [changetitle, setChangeTitle] = useState("");
  const [changeamount, setChangeAmount] = useState("");
  const [changedate, setChangeDate] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [disabledvalue, setDisabledValue] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: changetitle,
      amount: changeamount,
      date: new Date(changedate),
      id: Math.random(),
    };
    console.log(expenseData);
    setChangeTitle("");
    setChangeAmount("");
    setChangeDate("");
    setShowForm(false)

    props.onSaveExpenseData(expenseData);
  };

  const onChangeTitleHandler = (event) => {
    console.log(event.target.value);
    setChangeTitle(event.target.value);
  };
  const onChangeAmountHandler = (event) => {
    console.log(event.target.value);
    setChangeAmount(event.target.value);
  };
  const onChangeDateHandler = (event) => {
    console.log(event.target.value);
    setChangeDate(event.target.value);
    setDisabledValue(false);
  };
  const onNewExpenseHandler = () => {
    setShowForm(true)
  };
  const onCancelExpenseHandler = () => {
    setShowForm(false)
    setChangeTitle("");
    setChangeAmount("");
    setChangeDate("");
  };

  return (
    <div>
      {showForm ? (
        <form
          style={{ width: "50%", marginLeft: "25%" }}
          className="align-items-center my-4"
          onSubmit={submitHandler}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChangeTitleHandler}
              value={changetitle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              onChange={onChangeAmountHandler}
              value={changeamount}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputPassword1"
              onChange={onChangeDateHandler}
              value={changedate}
            />
          </div>
          <button
            type="reset"
            className="btn btn-primary mx-4"
            onClick={onCancelExpenseHandler}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={
              !(changetitle && changeamount && changedate) ?? disabledvalue
            }
            className="btn btn-primary"
          >
            Add Expense
          </button>

        </form>
      ):
      <button
      type="button"
      className="btn btn-primary mb-3 align-items-center my-4"
      onClick={onNewExpenseHandler}
    >
      Add new expense
    </button>}
    </div>
  );
}
