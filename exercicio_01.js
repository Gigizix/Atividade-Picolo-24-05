/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Animal {
    constructor(nome, idade, especie) {
      this.nome = nome;
      this.idade = idade;
      this.especie = especie;
    }
  
    mostrarAtributos(){
      return this.atributos();
    } 
  
    atributos() {
      if(this.nome != "" & this.idade != "" & this.especie != ""){
        return this.nome + this.idade + this.especie;
        } else if (this.nome == "") {
           throw new Error("Ta faltando nome e sobrenome :)")
        }
      } else if (this.idade == "") {
        throw new Error("Ta faltando nome e sobrenome :)")
     }
     else if (this.especie == "") {
      throw new Error("Ta faltando nome e sobrenome :)")
   }
  
  
  const meuAnimal = new Animal("Fido", 3, "cachorro");
  const atributos = meuAnimal.mostrarAtributos();
  
  // Imprimindo os atributos
  console.log(atributos.nome);   
  console.log(atributos.idade);  
  console.log(atributos.especie); 
  
           