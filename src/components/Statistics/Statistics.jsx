const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map((obj) => (
          <li key={obj.id}>
            <span className="label">{obj.label}</span>
            <span className="percentage">{obj.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
