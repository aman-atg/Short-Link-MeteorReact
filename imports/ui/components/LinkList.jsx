import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Links } from "../../apis/links";
import ListItem from "./ListItem";
import { Session } from "meteor/session";
class LinkList extends Component {
  state = { links: [] };
  componentDidMount() {
    Meteor.subscribe("links");
    this.linkTracker = Tracker.autorun(() => {
      const links = Links.find({ visible: Session.get("showVisible") }).fetch();
      this.setState({ links });
    });
  }
  componentWillUnmount() {
    this.linkTracker.stop();
  }
  renderListItems = () => {
    const links = this.state.links.map(link => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <ListItem key={link._id} shortUrl={shortUrl} {...link} />;
    });
    return links;
  };
  render() {
    return (
      <div>
        <div>{this.renderListItems()}</div>
      </div>
    );
  }
}

export default LinkList;
