const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map((obj) => (
          <li key={obj.id}>
            <span class="label">{obj.label}</span>
            <span class="percentage">{obj.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
