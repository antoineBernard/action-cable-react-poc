import React, { PropTypes } from 'react';
import Card from './Card.jsx'

export default class CardBoard extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div className={`${this.props.status} ui cards`}>
        <h2>{`${this.props.status} (${this.props.candidates.length})`}</h2>
        {
          (this.props.candidates).map((candidate, index) => {
            return <Card candidate={candidate} key={index} />
          })
        }
      </div>
    );
  }
}
