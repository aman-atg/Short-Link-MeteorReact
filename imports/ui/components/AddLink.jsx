import React from "react";
import { Meteor } from "meteor/meteor";

class AddLink extends React.Component {
  state = {
    url: ""
  };
  onUrlChange = e => {
    const url = e.target.value;
    this.setState({ url });
  };
  render() {
    const onFormSubmit = e => {
      e.preventDefault();
      const { url } = this.state;
      Meteor.call("links.insert", url.trim(), (err, res) => {
        if (!err) this.setState({ url: "" });
      });
    };

    return (
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="url"
          onChange={this.onUrlChange}
          value={this.state.url}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddLink;
