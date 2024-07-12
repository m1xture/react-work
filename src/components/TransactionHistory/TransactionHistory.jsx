import TransactionsHistoryItem from "../TransactionsHistoryItem/TransactionsHistoryItem";

const TransactionsHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <TransactionsHistoryItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsHistory;
