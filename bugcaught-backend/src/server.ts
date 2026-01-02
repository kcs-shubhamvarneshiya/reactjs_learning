import app from "./app";
import { connectDB } from "./Utils/Database/db";
import { PORT, SERVER_URL } from "./Utils/Secrates/enviorment";

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} - ${SERVER_URL}`);
  });
})();
