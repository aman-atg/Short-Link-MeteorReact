import { Meteor } from "meteor/meteor";
import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import moment from "moment";
class ListItem extends Component {
  state = {
    copyBtnValue: "Copy"
  };
  copyBtn = React.createRef();
  componentDidMount() {
    this.copyClipboard = new Clipboard(this.copyBtn.current);
    this.copyClipboard
      .on("error", () => {
        alert("Something is wrong with your browser.");
      })
      .on("success", () => {
        this.setState({ copyBtnValue: "Copied" });
        setTimeout(() => {
          this.setState({ copyBtnValue: "Copy" });
        }, 3000);
      });
  }
  componentWillUnmount() {
    this.copyClipboard.destroy();
  }
  renderStats = () => {
    const visitMsg = this.props.visitedCount === 1 ? "visit" : "visits";
    let visitedMsg = null;
    if (!!this.props.lastVisitedAt)
      visitedMsg = ` (visited ${moment(this.props.lastVisitedAt).fromNow()})`;
    return (
      <p className="item__message">
        {this.props.visitedCount} {visitMsg}
        {visitedMsg}
      </p>
    );
  };
  render() {
    const { props, state } = this;
    return (
      <div className="item">
        <h2>{props.url}</h2>
        <p className="item__message">{props.shortUrl}</p>
        {this.renderStats()}
        <a
          className=" button button--pill button--link"
          href={props.shortUrl}
          target="_blank"
        >
          Visit
        </a>

        <button
          className=" button button--pill"
          ref={this.copyBtn}
          data-clipboard-text={props.shortUrl}
        >
          {state.copyBtnValue}
        </button>
        <button
          className=" button button--pill"
          onClick={() => {
            Meteor.call("link.setVisibility", props._id, props.visible);
          }}
        >
          {props.visible ? "Hide" : "UnHide"}
        </button>
      </div>
    );
  }
}

export default ListItem;
ListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVisitedAt: PropTypes.number
};
