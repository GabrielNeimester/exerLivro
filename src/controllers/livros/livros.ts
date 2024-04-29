import Livros from "../../models/Livros";
import { Request, Response } from 'express'

export default class LivrosController {


    static async index (req: Request, res: Response) {
        const { pagina } = req.params
        const limite = 10

        if(!pagina || isNaN(Number(pagina))) {
          return res.status(400).json({ error: 'o campo pagina é obrigatório' })
        }

        const totalLivros = await Livros.countDocuments();
        const livro = await Livros.find().skip((Number(pagina) - 1)*limite).limit(limite)

        const indiceInicial = ((Number(pagina) - 1)) * limite + 1
        const indiceFinal = Math.min((Number(pagina) * limite), totalLivros)

        return res.json({
          livro,
          totalLivros: totalLivros,
          pagina: pagina,
          indiceInicial: indiceInicial,
          indiceFinal: indiceFinal

      })
      }
}

