import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = ({ showIncome = false, showExpense = false }) => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      {showIncome && (
        <div>
          <h4>Income</h4>
          <p className="money plus">Ksh{numberWithCommas(income)}</p>
        </div>
      )}

      {showExpense && (
        <div>
          <h4>Expense</h4>
          <p className="money minus">Ksh{numberWithCommas(expense)}</p>
        </div>
      )}
    </div>
  )
}
