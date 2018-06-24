import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// HOC
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
        return <ExpenseListItem key = {expense.id} {...expense}/>
    }
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};



// define thingss we want to get off of store, then define component we want to create connected version of

export default connect(mapStateToProps)(ExpenseList);
