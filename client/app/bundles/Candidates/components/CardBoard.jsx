import React, { PropTypes } from 'react';
import Card from './Card.jsx';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

const cardTarget = {
  drop(props: Props) {
    var status = ''

    if(props.status == "À Rencontrer") {
      status = 'to_book'
    } else {
      status = 'interview'
    }

    return { status: status };
  },
};

@DropTarget(ItemTypes.CARD, cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))

export default class CardBoard extends React.Component<Props> {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;


    return connectDropTarget(
      <div className={`${this.props.status} ui cards`}>
        <h2>{`${this.props.status} (${this.props.candidates.length})`}</h2>
        {
          (this.props.candidates).map((candidate, index) => {
            return <Card candidate={candidate} key={index} />
          })
        }
        { isActive?
          'Release to drop' : 'drag a card here'
        }
      </div>
    );
  }
}
