import './employees-list-item.css';

const EmployeesListItem = ({ name, salary, increase, rise, onDelete, onToggleDataProp }) => {
  let classNames = 'list-group-item d-flex justify-content-between';

  if (rise) classNames += ' like';
  if (increase) classNames += ' increase';

  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={() => onToggleDataProp('rise')}>
        {name}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm" onClick={() => onToggleDataProp('increase')}>
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
