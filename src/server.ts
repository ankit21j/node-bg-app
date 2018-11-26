import app from "./app"

import * as logger from "winston"

const PORT = 3000

app.listen(PORT, () => {
  logger.info("Express server listening on port " + PORT)
})