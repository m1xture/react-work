import css from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.statistics__title}>{title}</h2>}
      <ul className={css.statistics__list}>
        {stats.map((obj) => (
          <li key={obj.id} className={css.statistics__item}>
            <span className={css.statistics__label}>{obj.label}</span>
            <span className={css.statistics__text}>{obj.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
