import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { UrlSchema } from "../apis/url";
import shortId from "shortid";
import SimpleSchema from "simpl-schema";
export const Links = new Mongo.Collection("links");
if (Meteor.isServer) {
  Meteor.publish("links", () => {
    return Links.find({ userId: Meteor.userId() });
  });
}

Meteor.methods({
  "links.insert"(url) {
    const userId = Meteor.userId();
    const _id = shortId();
    if (!userId)
      throw new Meteor.Error(
        "unauthorize",
        "You don't have permission to do that"
      );
    UrlSchema.validate({ url });

    Links.insert({ _id, url, userId, visible: true }, err => {
      console.log("links form : ", err);
    });
  },
  "link.setVisibility"(_id, visible) {
    //validation
    if (!Meteor.userId())
      throw new Meteor.Error(
        "unauthorize",
        "You don't have permission to do that"
      );
    new SimpleSchema({
      _id: { type: String, min: 4 },
      visible: { type: Boolean }
    }).validate({ _id, visible });
    //main task
    Links.update(
      { _id, userId: Meteor.userId() },
      { $set: { visible: !visible } }
    );
  }
});
