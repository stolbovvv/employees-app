const AppFilterTypes = ({ type, onChangeFilterType }) => {
  const filters = [
    { id: 'fb-1', type: 'all', label: 'Все сотрудники' },
    { id: 'fb-2', type: 'rise', label: 'Сотрудники на повышение' },
    { id: 'fb-3', type: 'salary', label: 'З/П больше 1000$' },
  ];

  const buttons = filters.map((item) => {
    const classList = type === item.type ? 'btn btn-light' : 'btn btn-outline-light';
    return (
      <button key={item.id} className={classList} type="button" onClick={() => onChangeFilterType(item.type)}>
        {item.label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilterTypes;
