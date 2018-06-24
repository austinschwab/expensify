import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
    onSubmit={(expense) => {
    props.dispatch(addExpense(expense));
    props.history.push('/');
    }}
    />
  </div>
);

// connect component to store so it can dispatch
//dont need anything from state, leave fist () empty
// now we have access to props.dispatch
export default connect()(AddExpensePage);
