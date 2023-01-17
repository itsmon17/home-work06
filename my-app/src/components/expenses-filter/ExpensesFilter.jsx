import "./ExpensesFilter.css";
const ExpensesFilter = ({value, onChange}) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="label">Фильтр по году</label>
        <select value={value} onChange={onChange} className="select">
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;