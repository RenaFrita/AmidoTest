import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
  }

  setQuery(event) {
      this.setState({query: event.target.value});
      this.props.search(event.target.value);
  }

  render() {
    return (
      <form style={{paddingTop: 1 +'em'}}>
        <input
          className="form-control"
          type="text"
          value={this.state.query}
          onChange={(evt) => this.setQuery(evt)}
        />
      </form>
    )
  }
}
