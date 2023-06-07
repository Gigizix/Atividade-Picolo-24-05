class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    mostrar(){
        try{
        retur this.atributos();
    }catch (erro){
        console.log(erro.Stake)
    } 
}

    atributos(){
        if(this.nome != "" && this.sobrenome != ""){
        return this.nome + this.sobrenome;
        } else {
           throw new Error("Ta faltando nome e sobrenome :)")
        }
    } 
}

const pessoa = new Pessoa  ("","Caroline");
console.log(pessoa.mostrar())