import './app.css';
import AppInfo from '../app-info/app-info';
import AppFilterSearch from '../app-filter-search/app-filter-search';
import AppFilterTypes from '../app-filter-types/app-filre-types';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
  const data = [
    { id: 'av-1', name: 'Тор Одинсон', salary: 800, increase: false },
    { id: 'av-2', name: 'Тони Старк', salary: 9000, increase: true },
    { id: 'av-3', name: 'Брюс Баннер', salary: 1000, increase: false },
    { id: 'av-4', name: 'Наташа Романофф', salary: 2000, increase: true },
    { id: 'av-5', name: 'Стивен Роджерс', salary: 2000, increase: false },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="app__filter">
        <AppFilterSearch />
        <AppFilterTypes />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
