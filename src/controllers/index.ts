import * as mongoose from "mongoose"
import { ContactSchema } from "../models/index"
import { Request, Response } from "express"

const Contact = mongoose.model("Contact", ContactSchema)
export class ContactController {
  public addNewContact(req: Request, res: Response) {
    const newContact = new Contact(req.body)

    newContact.save((err, contact) => {
      if (err) {
        res.send(err)
      }
      res.json(contact)
    })
  }

  public getContacts(req: Request, res: Response) {
    Contact.find({}, (err, contact) => {
      if (err) {
        res.send(err)
      }
      res.json(contact)
    })
  }
}
