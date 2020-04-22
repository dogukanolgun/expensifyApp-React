import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummmary from './ExpensesSummary';

const ExpenseDashboardPage = (props) => (
  <div>
    <ExpensesSummmary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
