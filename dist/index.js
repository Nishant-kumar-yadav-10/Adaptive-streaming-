import express from "express";
import { PORT } from './config/sever.config.js';
const app = express();
app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
});
//# sourceMappingURL=index.js.map