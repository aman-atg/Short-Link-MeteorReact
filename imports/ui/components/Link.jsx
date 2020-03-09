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
      <AddLink />
      <LinkList />
    </div>
  );
};

export default Link;
