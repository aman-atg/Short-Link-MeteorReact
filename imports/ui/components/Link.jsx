import React from "react";
import LinkList from "./LinkList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
const Link = () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <LinkList />
      <AddLink />
    </div>
  );
};

export default Link;
