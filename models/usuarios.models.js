const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	nombre: {
        type: String,
        require:[true, "Campo obligatorio"]},
    apellido: {
        type: String,
        require:[true, "Campo obligatorio"]},
	edad: {
        type: Number,
        require:[true, "Campo obligatorio"]}
    });
    // ,{versionKey: false}

const User = mongoose.model("usuarios", UserSchema);

module.exports = User;