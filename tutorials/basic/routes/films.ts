import { Router } from "express";
import path from "node:path";

import {Films} from "../types";
import { parse } from "../utils/json";

const router = Router();

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultsFilms : Films[] = [
   {
    id: 1,
    title: "4 fromages",
    director: "philippe echebest",
    duration : 66
  },
  {id: 2,
    title: "leche",
    director: "thomas finois",
    duration : 60
  },
  {id: 3,
    title: "moi l'oeil",
    director: "Angelica samia",
    duration : 71
}
];

router.get("/", (req, res) => {
    if (req.query.title && typeof req.query.order !== "string") {
        return res.sendStatus(400);
    }
    const tableau = parse(jsonDbPath,defaultsFilms);

    return res.json(tableau);
});




export default router;