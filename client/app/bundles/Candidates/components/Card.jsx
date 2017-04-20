import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';


const cardSource = {
  beginDrag(props) {
    return {
      candidate_id: props.candidate.id,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log(`You dropped ${item.candidate_id} vers ${dropResult.status} !`);
      $.post(`/update_status/${item.candidate_id}/${dropResult.status}`);
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
  }

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;
    const opacity = isDragging ? 0 : 1;

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
