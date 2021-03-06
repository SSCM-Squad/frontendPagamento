export interface IFuncionario {
  id: number,
  nome: string,
  salario: number,
  funcao: string,
  cpf: string,
  adicionalPericulosidade: boolean,
  jornadaDeTrabalho: number,
  horasExtras: number,
  dependentes: number,
  ajudaDeCusto: number,
  valorPlanoDeSaude: number,
  tipoFuncionario: string
}
