import mongoose from "mongoose";
import config from "./config/index.js";

mongoose
 .connect(config.DB)
 .then(()=>console.log('La DB de Local esta conectada'))
 .catch(error=>console.log(error))
 