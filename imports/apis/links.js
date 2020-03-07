import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { UrlSchema } from "../apis/url";
export const Links = new Mongo.Collection("links");
if (Meteor.isServer) {
  Meteor.publish("links", () => {
    return Links.find({ userId: Meteor.userId() });
  });
}

Meteor.methods({
  "links.insert"(url) {
    const userId = Meteor.userId();
    if (!userId)
      throw new Meteor.Error(
        "unauthorize",
        "You don't have permission to do that"
      );
    UrlSchema.validate({ url });
    Links.insert({ url, userId }, err => {
      console.log("links form : ", err);
    });
  }
});
