import { Component } from 'react';

class AppFilterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  changeTerm = (e) => {
    this.setState({ term: e.target.value });
    this.props.onChangeFilterTerm(e.target.value);
  };

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Найти сотрудника"
        onChange={this.changeTerm}
      />
    );
  }
}

export default AppFilterSearch;
