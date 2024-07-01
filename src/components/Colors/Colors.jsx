const Colors = ({ arr }) => (
  <ul>
    {arr.map((color) => (
      <li key={color}>{color}</li>
    ))}
  </ul>
);
export default Colors;
