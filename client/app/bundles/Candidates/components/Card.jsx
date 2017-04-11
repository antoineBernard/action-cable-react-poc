import React, { PropTypes } from 'react';

export default class Card extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    this.nextStep     = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
  }

  nextStep () {
    $.post(`/next_step/${this.props.candidate.id}`);
  }

  previousStep () {
    $.post(`/previous_step/${this.props.candidate.id}`);
  }

  render() {
    var candidate = this.props.candidate
    return (
      <div className="card" key={candidate.id}>
        <div className="ui bottom attached button" onClick={this.previousStep}>
          <i className="add icon"></i>
          étape précédente !
        </div>
        <div className="content">
          <div className="header">{`${candidate.first_name} ${candidate.last_name}`}</div>
          <div className="description">
            {candidate.job_title}
          </div>
          <span className="right floated">
            <i className="heart outline like icon"></i>
            {candidate.average_rate}
          </span>
        </div>
        <div className="ui bottom attached button" onClick={this.nextStep}>
          étape suivante !
          <i className="add icon"></i>
        </div>
      </div>
    );
  }
}
