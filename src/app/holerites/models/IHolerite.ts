import { Cabecalho } from "./cabecalho";
import { Detalhe } from "./detalhe";
import { Rodape } from "./rodape";

export interface IHolerite {

  id: number,
  cabecalho : Cabecalho,
  detalhes : Detalhe[],
  rodape : Rodape
}
