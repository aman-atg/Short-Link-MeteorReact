import SimpleSchema from "simpl-schema";

export const UrlSchema = new SimpleSchema({
  url: {
    label: "Your link",
    type: String,
    regEx: SimpleSchema.RegEx.Url
  }
});
