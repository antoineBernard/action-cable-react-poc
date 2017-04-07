import React, { PropTypes } from 'react';

export default class Candidates extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      candidates: this.props.candidates
    };
  }

  render() {
    return (
      <div className="recruitment">
        <div className="to-book">
          { (this.state.candidates).map((candidate) => {
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
      </div>
    );
  }
}
