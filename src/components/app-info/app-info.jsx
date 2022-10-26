import './app-info.css';

const AppInfo = ({ allEmployees, increaseEmployees }) => {
  return (
    <div className="app-info">
      <h1 className="app-info__title">Учет сотрудников компании</h1>
      <h2 className="app-info__subtitle">Общее количество сотрудников: {allEmployees}</h2>
      <h2 className="app-info__subtitle">Количество премированных сотрудников: {increaseEmployees}</h2>
    </div>
  );
};

export default AppInfo;
