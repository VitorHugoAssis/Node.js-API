require("express");
const connecToDataBase = require("./src/database/connect");

connecToDataBase();

require("./express");
