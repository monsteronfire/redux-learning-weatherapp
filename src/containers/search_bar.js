import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <form className='search-form input-group'>
        <input
          placeholder='Get a five-day forecase in your favourite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar;
