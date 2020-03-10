import React from "react";
import LinkList from "./LinkList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import Toggler from "./Toggler";
const Link = () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <div className="page-content">
        <Toggler />
        <AddLink />
        <LinkList />
      </div>
    </div>
  );
};

export default Link;
