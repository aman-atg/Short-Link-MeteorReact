import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Links } from "../../apis/links";

class LinkList extends Component {
  state = { links: [] };
  componentDidMount() {
    Meteor.subscribe("links");
    this.linkTracker = Tracker.autorun(() => {
      const links = Links.find().fetch();
      this.setState({ links });
    });
  }
  componentWillUnmount() {
    this.linkTracker.stop();
  }
  renderListItems = () => {
    const links = this.state.links.map(link => (
      <li key={link._id}>{link.url}</li>
    ));
    return links;
  };
  render() {
    return (
      <div>
        <p>Links List</p>
        <div>{this.renderListItems()}</div>
      </div>
    );
  }
}

export default LinkList;
