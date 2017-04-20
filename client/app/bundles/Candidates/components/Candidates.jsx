import React, { PropTypes } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CardBoard from './CardBoard.jsx';

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
      .sortBy((c) => { return c.updated_at })
      .value()
  }

  setupSubscription() {
    App.candidate = App.cable.subscriptions.create("CandidateChannel", {
      connected: () => {
        console.log("User connected !")
      },

      received: (data) => {
        this.setState({ candidates: data.candidates })
      },
    });
  }

  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="recruitment">
          {
            ["À Rencontrer", "Entretien"].map((status, index) => {
              return (
                <CardBoard candidates={(this.filterByStatus({status}))} status={status} key={index} />
              );
            })
          }
        </div>
      </DragDropContextProvider>
    );
  }
}
