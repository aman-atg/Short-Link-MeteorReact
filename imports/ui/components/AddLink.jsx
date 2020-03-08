import React from "react";
// import { Meteor } from "meteor/meteor";
const AddLink = () => {
  const onFormSubmit = e => {
    e.preventDefault();
    const url = e.target.url.value.trim();
    Meteor.call("links.insert", url);
    e.target.url.value = "";
    console.log(Meteor);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" name="url" />
      <button>Submit</button>
    </form>
  );
};

export default AddLink;
