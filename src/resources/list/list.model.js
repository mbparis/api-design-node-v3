import { Schema, SchemaTypes, model } from 'mongoose'

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    description: String,
    createdBy: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
)

listSchema.index({ user: 1, name: 1 }, { unique: true })

export const List = model('list', listSchema)
