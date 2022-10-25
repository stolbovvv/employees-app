import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            className="form-control new-post-label"
            name="name"
            value={name}
            type="text"
            placeholder="Как его зовут?"
            onChange={this.onValueChange}
          />
          <input
            className="form-control new-post-label"
            name="salary"
            value={salary}
            type="number"
            placeholder="З/П в $?"
            onChange={this.onValueChange}
          />

          <button className="btn btn-outline-light" type="submit">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
