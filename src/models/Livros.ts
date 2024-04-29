import mongoose, { Schema, Document, Model } from 'mongoose';

export interface LivrosDocument extends Document {
  nome: string;
  autor: string;
  isbn: string;
  paginas: number;
  ano: number;
}

const LivrosSchema: Schema = new Schema({
  nome: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  paginas: {
    type: Number,
    required: true
  },
  ano: {
    type: Number,
    required: true
  }
});

const LivrosModel: Model<LivrosDocument> = mongoose.model<LivrosDocument>('Livros', LivrosSchema);

export default LivrosModel;