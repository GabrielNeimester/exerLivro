import { Router } from 'express'
import LivrosController from "../../controllers/livros/livros"

const express = require("express");

const livrosRoutes = Router()

livrosRoutes.get("/:pagina", LivrosController.index);


export default livrosRoutes