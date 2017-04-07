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
      .filter((c) => { return c.status == status.status })
      .value()
  }

  render() {
    return (
      <div className="recruitment">
        {
          ["À Rencontrer", "Entretien"].map((status, index) => {
            return (<CardBoard candidates={(this.filterByStatus({status}))} status={status} key={index} />)
          })
        }
      </div>
    );
  }
}
