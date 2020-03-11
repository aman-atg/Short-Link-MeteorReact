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
        else 
          {
            this.setState({ err: err.reason });
            handleModalClose();
          }
      });
    };

    const urlRef = React.createRef();
    return (
      <Fragment>
        <button
          className=" button"
          onClick={() => this.setState({ isOpen: true })}
        >
          + Add Link
        </button>

        <ReactModal
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal"
          ariaHideApp={false}
          isOpen={this.state.isOpen}
          contentLabel="Add Links"
          onAfterOpen={() => {
            urlRef.current.focus();
          }}
          onRequestClose={() => this.handleModalClose()}
        >
          {this.state.err ? <p>{this.state.err}</p> : undefined}

          <h1>Add Link</h1>
          <form className="boxed-view__form" onSubmit={onFormSubmit}>
            <input
              ref={urlRef}
              type="text"
              name="url"
              onChange={this.onUrlChange}
              value={this.state.url}
            />
            <button className="button">Submit</button>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => this.handleModalClose()}
            >
              Cancel
            </button>
          </form>
        </ReactModal>
      </Fragment>
    );
  }
}

export default AddLink;
