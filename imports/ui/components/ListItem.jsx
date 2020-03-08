import { Meteor } from "meteor/meteor";
import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
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
  render() {
    const { props, state } = this;
    return (
      <Fragment>
        <p>{props.shortUrl}</p>
        <p>{props.url}</p>
        <button ref={this.copyBtn} data-clipboard-text={props.shortUrl}>
          {state.copyBtnValue}
        </button>
        <button
          onClick={() => {
            Meteor.call("link.setVisibility", props._id, props.visible);
          }}
        >
          {props.visible ? "Hide" : "UnHide"}
        </button>
      </Fragment>
    );
  }
}

export default ListItem;
ListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};
