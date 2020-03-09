import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import ReactModal from "react-modal";
class AddLink extends React.Component {
  state = {
    url: "",
    isOpen: false,
    err: ""
  };
  onUrlChange = e => {
    const url = e.target.value;
    this.setState({ url });
  };
  handleModalClose = () => {
    this.setState({ isOpen: false, url: "", err: "" });
  };
  render() {
    const onFormSubmit = e => {
      e.preventDefault();
      const { url } = this.state;
      Meteor.call("links.insert", url.trim(), (err, res) => {
        if (!err) this.setState({ url: "", err: "" });
        else this.setState({ err });
      });
    };

    const urlRef = React.createRef();
    return (
      <Fragment>
        {this.state.err ? <p>{this.state.err}</p> : undefined}
        <button onClick={() => this.setState({ isOpen: true })}>
          + Add Link
        </button>

        <ReactModal
          ariaHideApp={false}
          isOpen={this.state.isOpen}
          contentLabel="Add Links"
          onAfterOpen={() => {
            urlRef.current.focus();
          }}
          onRequestClose={() => this.handleModalClose()}
        >
          <form onSubmit={onFormSubmit}>
            <input
              ref={urlRef}
              type="text"
              name="url"
              onChange={this.onUrlChange}
              value={this.state.url}
            />
            <button>Submit</button>
          </form>
          <button onClick={() => this.handleModalClose()}>Cancel</button>
        </ReactModal>
      </Fragment>
    );
  }
}

export default AddLink;
