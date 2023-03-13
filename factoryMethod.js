// Classe abstrata Pessoa
class Pessoa {
    constructor(nome) {
      this.nome = nome;
    }
    // Método abstrato para criar instâncias de RelacaoInstituicao
    criarRelacaoInstituicao() {}
  }
  
  // Subclasse Aluno
  class Aluno extends Pessoa {
    criarRelacaoInstituicao() {
      return new RelacaoInstituicao('Aluno');
    }
  }
  
  // Subclasse Professor
  class Professor extends Pessoa {
    criarRelacaoInstituicao() {
      return new RelacaoInstituicao('Professor');
    }
  }
  
  // Subclasse Coordenador
  class Coordenador extends Pessoa {
    criarRelacaoInstituicao() {
      return new RelacaoInstituicao('Coordenador');
    }
  }
  
  // Subclasse Diretor
  class Diretor extends Pessoa {
    criarRelacaoInstituicao() {
      return new RelacaoInstituicao('Diretor');
    }
  }
  
  // Subclasse Administrativo
  class Administrativo extends Pessoa {
    criarRelacaoInstituicao() {
      return new RelacaoInstituicao('Administrativo');
    }
  }
  
  // Subclasse Vestibulando
  class Vestibulando extends Pessoa {
    criarRelacaoInstituicao() {
      return new RelacaoInstituicao('Vestibulando');
    }
  }
  
  // Classe RelacaoInstituicao
  class RelacaoInstituicao {
    constructor(relacao) {
      this.relacao = relacao;
    }
  }

  class RelacaoInsituicao{
    constructor(instituicao){
       this.instituicao = instituicao; 
    }
  }
  
  // Executar a função principal
    document.getElementById("submit").addEventListener("click",function(event){
      event.preventDefault(); // Nao enviar o formulario
      const nome = document.getElementById('name').value;
      const instituicao = document.getElementById('instituicao').value;
      const relacao = document.getElementById('relacao').value;
      main(nome, instituicao, relacao);
    })
    

// Função para exibir o modal 
  function exibirModal(nome, instituicao, relacao){
    if(nome == "" || instituicao == "" || relacao == ""){
        document.getElementById('modal_title').innerHTML = 'Erro ao consultar'
        document.getElementById('modal_titulo_div').className = 'modal-header text-sucess'
        document.getElementById('modal_conteudo').innerHTML = nome +' não tem nenhuma relação com a ' +instituicao + ' , acompanhar até a secretaria'
        document.getElementById('modal_btn').innerHTML = 'Voltar'
        document.getElementById('modal_btn').className = 'btn btn-danger'
       //comando jquary
       $('#modalRegistraDespesa').modal('show')
       novaPesquisa()
    }else{
      document.getElementById('modal_title').innerHTML = 'Consulta com sucesso'
      document.getElementById('modal_titulo_div').className = 'modal-header text-sucess'
      document.getElementById('modal_conteudo').innerHTML = nome +' tem  relação com a ' + instituicao + ' como ' + relacao
      document.getElementById('modal_btn').innerHTML = 'Voltar'
      document.getElementById('modal_btn').className = 'btn btn-success'
     $('#modalRegistraDespesa').modal('show')
    }
  }

  //Recarrega a pagina apos 15 segundos
    setTimeout(function novaPesquisa() {
      location.reload()
    }, 15000);


  // Função principal ( Metodo factory)
  function main(nome, instituicao, relacao) {
    let pessoa;
    switch (relacao.toLowerCase()) {
      case 'aluno':
        pessoa = new Aluno(nome);
        break;
      case 'professor':
        pessoa = new Professor(nome);
        break;
      case 'coordenador':
        pessoa = new Coordenador(nome);
        break;
      case 'diretor':
        pessoa = new Diretor(nome);
        break;
      case 'administrativo':
        pessoa = new Administrativo(nome);
        break;
      case 'vestibulando':
        pessoa = new Vestibulando(nome);
        break;
      default:
        //alert(`${nome} não tem nenhuma relação com a ${instituicao}, acompanhar até a secretaria`);
        exibirModal(nome, instituicao, relacao)
        return ;
    }
   const relacaoInstituicao = pessoa.criarRelacaoInstituicao();
   exibirModal(nome, instituicao, relacao)
    //alert(`${nome} tem relação com a ${instituicao} como ${relacaoInstituicao.relacao}`);
  }
  
