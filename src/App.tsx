import React, { useEffect, useState } from 'react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>{tx.description}: ${tx.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
