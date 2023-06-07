/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/

class Estudante {
    constructor(nome, idade, turma) {
      this.nome = nome;
      this.idade = idade;
      this.turma = turma;
    }
  
    mostrarAtributos() {
      return this.atributos();
    }catch (erro){
      console.log(erro.Stake)
  }
    } 
    
  
    atributos() {
      if(this.nome != "" & this.idade != "" & this.turma != ""){
        return this.nome + this.idade + this.especie;
        } else if (this.nome == "") {
           throw new Error("Ta faltando nome e sobrenome :)")
        }
      } else if (this.idade == "") {
        throw new Error("Ta faltando nome e sobrenome :)")
     }
     else if (this.turma == "") {
      throw new Error("Ta faltando nome e sobrenome :)")
   }
  
  
  
  const estudante = new Estudante("João", 16, "3A");
  
  const atributos = estudante.mostrarAtributos();
  
  console.log(atributos.nome);   
  console.log(atributos.idade);  
  console.log(atributos.turma); 
  
  