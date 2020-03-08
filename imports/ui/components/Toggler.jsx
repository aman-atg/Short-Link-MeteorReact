import React from "react";
import { Session } from "meteor/session";
import { Tracker } from "meteor/tracker";
class Toggler extends React.Component {
  state = {
    showVisible: true
  };
  componentDidMount() {
    this.myTracker = Tracker.autorun(() => {
      this.setState({ showVisible: Session.get("showVisible") });
    });
  }
  componentWillUnmount() {
    this.myTracker.stop();
  }
  render() {
    const { state } = this;
    return (
      <div>
        <label>
          Show Hidden Links :{" "}
          <input
            type="checkbox"
            onChange={e => {
              Session.set("showVisible", !e.target.checked);
            }}
            checked={!state.showVisible}
          />
        </label>
      </div>
    );
  }
}

export default Toggler;
