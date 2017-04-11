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

  componentDidMount() {
    this.setupSubscription();
  }

  filterByStatus(status) {
    var candidates = this.state.candidates

    return _.chain(candidates)
      .filter((c) => { return c.status == status.status })
      .value()
  }

  updateCandidateList(candidate) {
    this.setState({ candidates: candidates });
  }

  setupSubscription() {
    App.Candidates = App.cable.subscriptions.create("CandidatesChannel", {
      candidate_id: this.state.candidate.id,

      connected: function () {
        setTimeout(() => this.perform('follow', { message_id: this.candidate_id }), 1000);
      },

      received: function (data) {
        this.updateCandidateList(data.candidate);
      },

      updateCandidateList: this.updateCandidateList.bind(this)
    });
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
