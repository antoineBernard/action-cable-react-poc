import React, { PropTypes } from 'react';
import CardBoard from './CardBoard.jsx'

export default class Candidates extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      candidates: this.props.candidates
    }

    this.filterByStatus = this.filterByStatus.bind(this)
  }

  filterByStatus(status) {
    var candidates = this.state.candidates

    return _.chain(candidates)
      .filter((c) => { return c.status == status })
      .value()
  }

  render() {
    return (
      <div className="recruitment">
        <CardBoard candidates={(this.filterByStatus("À Rencontrer"))} status="À Rencontrer" />
        <CardBoard candidates={(this.filterByStatus("Entretien"))}    status="Entretien" />
      </div>
    );
  }
}
