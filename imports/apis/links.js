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

    validateUser();

    UrlSchema.validate({ url });

    Links.insert(
      { _id, url, userId, visible: true, visitedCount: 0, lastVisitedAt: null },
      err => {
        console.log("Error from Links.insert : ", err);
      }
    );
  },
  "link.setVisibility"(_id, visible) {
    //validation
    validateUser();
    new SimpleSchema({
      _id: { type: String, min: 4 },
      visible: { type: Boolean }
    }).validate({ _id, visible });
    //main task
    Links.update(
      { _id, userId: Meteor.userId() },
      { $set: { visible: !visible } }
    );
  },
  "links.trackVisit"(_id) {
    Links.update(
      { _id },
      {
        $inc: { visitedCount: 1 },
        $set: { lastVisitedAt: new Date().getTime() }
      }
    );
  }
});

const validateUser = () => {
  if (!Meteor.userId())
    throw new Meteor.Error(
      "unauthorize",
      "You don't have permission to do that"
    );
};
