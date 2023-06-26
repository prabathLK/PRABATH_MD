const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: "@pp *HEY,* @user \n*Welcome in* @gname \n*Member count* : @count th" },
goodbye:{ type: String, default: "@pp *Member left*\nUser: @user" },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "false" },
antibot: { type: String, default: "false" },
autovoice: { type: String, default: "false" },
autosticker: { type: String, default: "false" },
rdmsj: { type: String, default: "true" },
botstatus: { type: String, default: "false" },
antilink_action: { type: String, default: "nandelete" },
economy: { type: String, default: "false" },
mute: { type: String },
unmute: { type: String },
disablepm: { type: String, default: "false" },
autovoice: { type: String, default: "false" }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }
