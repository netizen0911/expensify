import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'jsnngjsyrenu',
    description: 'January Rent',
    note: 'This was the final payment for that adress',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};