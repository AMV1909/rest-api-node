import { Schema, model } from "mongoose";

export const user = model(
    "user",
    new Schema(
        {
            _id: {
                type: Number,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
                unique: true,
            },
            password: {
                type: String,
                required: true,
            },
        },
        {
            timestamps: false,
            versionKey: false,
        }
    )
);
