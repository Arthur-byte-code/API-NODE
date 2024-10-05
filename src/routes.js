import { Router } from "express";
import {createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './Controller/Pessoa.js';

const router = Router();


router.get("/", (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg":"Api Rodando  com sucesso"
    })
} )

router.get("/pessoas", selectPessoas);
router.get("/pessoa/:id", selectPessoa);
router.post("/pessoa", insertPessoa);
router.put("/pessoa/:id", updatePessoa);
router.delete("/pessoa/:id", deletePessoa);


export default router;