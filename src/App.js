import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div style={{ display: "flex", gap: "5rem" }}>
        <div className="container">
          <Balance />
          <IncomeExpenses showIncome />
          <TransactionList />
          <AddTransaction />
        </div>
        <div className="container">
          <Balance />
          <IncomeExpenses showExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
