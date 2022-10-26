import './app.css';
import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import AppFilterSearch from '../app-filter-search/app-filter-search';
import AppFilterTypes from '../app-filter-types/app-filre-types';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 'av-1', name: 'Тор Одинсон', salary: 800, increase: false, rise: false },
        { id: 'av-2', name: 'Тони Старк', salary: 9000, increase: true, rise: true },
        { id: 'av-3', name: 'Брюс Баннер', salary: 1000, increase: false, rise: false },
        { id: 'av-4', name: 'Наташа Романофф', salary: 2000, increase: true, rise: false },
        { id: 'av-5', name: 'Стивен Роджерс', salary: 2000, increase: false, rise: false },
      ],
      filter: {
        type: 'all',
        term: '',
      },
      uid: 'av-6',
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  appendItem = (item) => {
    this.setState(({ data, uid }) => ({
      data: [...data, { id: uid, increase: false, rise: false, ...item }],
      uid: `av-${+uid.match(/\d/g).join('') + 1}`,
    }));
  };

  toggleDataProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => (item.id === id ? { ...item, [prop]: !item[prop] } : item)),
    }));
  };

  changeFilterTerm = (term) => {
    this.setState(({ filter }) => ({ filter: { type: filter.type, term } }));
  };

  changeFilterType = (type) => {
    this.setState(({ filter }) => ({ filter: { term: filter.term, type } }));
  };

  filterByTerm = (term, arr) => {
    if (term.length === 0) return arr;

    return arr.filter((item) => {
      return item.name.match(new RegExp(term, 'giu'));
    });
  };

  filterByType = (type, arr) => {
    switch (type) {
      case 'rise':
        return arr.filter((item) => item.rise);

      case 'salary':
        return arr.filter((item) => item.salary > 1000);

      default:
        return arr;
    }
  };

  render() {
    const { data, filter } = this.state;
    const filteredData = this.filterByType(filter.type, this.filterByTerm(filter.term, data));

    return (
      <div className="app">
        <AppInfo allEmployees={data.length} increaseEmployees={data.filter((item) => item.increase).length} />

        <div className="app__filter">
          <AppFilterSearch onChangeFilterTerm={this.changeFilterTerm} />
          <AppFilterTypes type={filter.type} onChangeFilterType={this.changeFilterType} />
        </div>

        <EmployeesList data={filteredData} onDelete={this.deleteItem} onToggleDataProp={this.toggleDataProp} />
        <EmployeesAddForm onAppendItem={this.appendItem} />
      </div>
    );
  }
}

export default App;
