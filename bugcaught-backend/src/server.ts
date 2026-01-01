import app from "./app.js";
import { connectDB } from "./Utils/Database/db.js";
import { PORT, SERVER_URL } from "./Utils/Secrates/enviorment.js";

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} - ${SERVER_URL}`);
  });
})();
