import React from "react";
import LinkList from "./LinkList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import Toggler from "./Toggler";
const Link = () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <Toggler />
      <LinkList />
      <AddLink />
    </div>
  );
};

export default Link;
