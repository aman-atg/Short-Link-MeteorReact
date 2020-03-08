import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";
import "../imports/apis/users";
import "../imports/apis/links";
import "../startup/simpl-schema-config";
import { Links } from "../imports/apis/links";

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const ourLink = Links.findOne({ _id });
    if (ourLink) {
      res.statusCode = 302;
      res.setHeader("Location", ourLink.url);
      res.end();
    }
    next();
  });
});
