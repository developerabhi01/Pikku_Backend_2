import { Document, Schema, Model, model, Error } from "mongoose";
import { stringify } from "querystring";

export interface IBusiness extends Document {
  businessId: String;
  businessName: String;
  businessCategory: String;
  address1: String;
  address2: String;
  locality: String;
  state: String;
  pincode: Number;
  contactNumber: String;
  openTime: String;
  closeTime: String;
  breakTime: String;
}

export const businessSchema = new Schema({
  businessId: {
    type: String, required: false,
    unique: true
  },
  businessName: String,
  businessCategory: String,
  address1: String,
  address2: String,
  locality: String,
  state: String,
  pincode: Number,
  contactNumber: String,
  openTime: String,
  closeTime: String,
  breakTime: String
});


export const Business: Model<IBusiness> = model<IBusiness>("Business", businessSchema);