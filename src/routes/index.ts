import { Request, Response } from "express"
import { ContactController } from "../controllers/index"

export class Routes {
  public contactController: ContactController = new ContactController()

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "This application is up and running!"
      })
    })

    app.route("/contact")
      .get(this.contactController.getContacts)
      .post(this.contactController.addNewContact)
  }
}
