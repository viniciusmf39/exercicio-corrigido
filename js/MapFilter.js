document.getElementById('AddFuncionario').onclick = InserirFuncionario;
document.getElementById('salarioAlto').onclick = salarioAlto;
document.getElementById('salarioBaixo').onclick = salarioBaixo;

const funcionarioEmpresa=[]
let listaFuncionariosRecebeMais2k = [] ;
let listaFuncionariosRecebeMenos2k = [] ;

function InserirFuncionario(){
    const funcionario = {
        nome: document.getElementById('txtNome').value ,
        tempoEmpresa: parseFloat(document.getElementById('txtTempoEmpresa').value),
        salario: parseFloat(document.getElementById('txtSalario').value)
    }
    if ( funcionarioEmpresa.nome & funcionario.tempoEmpresa & funcionario.salario ){
            funcionarioEmpresa.push(funcionario);
                console.log(funcionarioEmpresa);
    }else{
        alert('preencha todos os campos');
    }
}

function funcionarioSalarioAlto (){
    listaFuncionariosRecebeMais2k= funcionarioEmpresa.filter(function(funcionario){
        return funcionario.salario >= 2000 ;
    })
    
}

function funcionarioSalarioBaixo (){
    listaFuncionariosRecebeMenos2k = funcionarioEmpresa.filter(function(funcionario){
        return funcionario.salario < 2000 ;
    })
    
    
}
