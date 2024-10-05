import { openDb } from "../configDB.js";

// função de criar tabela esta sendo exportada (criou a tabela Pessoas)
export  async function createTable(){
    openDb().then(db=>(
        db.exec("CREATE TABLE IF NOT EXISTS     Pessoas (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)" )
    ))
}

// função de inserir dados na tabela Pessoa
export  async function insertPessoa(req, res){

    let pessoa = req.body;
    openDb().then(db=>(
        db.run("INSERT INTO Pessoas (nome, idade) VALUES (?,?)", [pessoa.nome, pessoa.idade])
    ));
    res.json({
        "statusCode": 200 
    })

}

// função  de atualizar dados de uma tabela através do id
export  async function updatePessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>(
        db.run("UPDATE Pessoas SET nome=?, idade=? WHERE id=? ", [pessoa.nome, pessoa.idade, pessoa.id])
    ))
    res.json({
        "statusCode": 200 
    })
}


// função de exibir todos os dados que estão na tabela Pessoa
export async function selectPessoas(req, res) {
   openDb().then(db => db.all('SELECT * FROM Pessoas')).then(pessoas => res.json(pessoas))
}


//função de exibir os dados de acordo  com o id inserido
export async function selectPessoa(req, res) {
    let id = req.body.id;


     openDb().then(db => db.all('SELECT * FROM Pessoas WHERE id=? ', [id])).then(pessoa=>res.json(pessoa))

  }


  //função de deletar dados 
export async function deletePessoa(req, res) {
    let id = req.body.id;
     openDb().then(db => db.all('DELETE FROM Pessoas WHERE id=? ', [id]));

    res.json({
        "statusCode": 200 
    })

  }