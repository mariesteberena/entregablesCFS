import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
  private uso: string;

  constructor (id: number, marca: string, modelo: string, patente: string, color: string,uso: string){
    super(id,marca,modelo,patente,color);
    this.uso = uso;
}

  public getUso(): string {
    return this.uso;
  }

  public setCantEjes(uso: string) {
    this.uso = uso;
  }
}