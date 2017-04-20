import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';


const cardSource = {
  beginDrag(props) {
    return {
      name: props.candidate.last_name,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert( // eslint-disable-line no-alert
        `You dropped ${item.name} into ${dropResult.name}!`,
      );
    }
  },
};

@DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))

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
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    var candidate = this.props.candidate;

    return (
      connectDragSource(
        <div className="card" key={candidate.id} style={{opacity}}>
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
        </div>
      )
    );
  }
}
