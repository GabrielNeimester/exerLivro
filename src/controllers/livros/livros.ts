import Livros from "../../models/Livros";
import { Request, Response } from 'express'

export default class LivrosController {


    static async index (req: Request, res: Response) {
        const livro = await Livros.find()
        return res.json(livro)
      }
}

