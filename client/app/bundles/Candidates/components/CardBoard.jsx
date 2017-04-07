import React, { PropTypes } from 'react';

export default class CardBoard extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div className={`${this.props.status}`}>
        <h2>{`${this.props.status}`}</h2>
        { (this.props.candidates).map((candidate) => {
            return (
              <div key={candidate.id}>
                <div className="full-name">    { `${candidate.first_name} ${candidate.last_name}` } </div>
                <div className="job-title">    { candidate.job_title } </div>
                <div className="average-rate"> { candidate.average_rate } </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
