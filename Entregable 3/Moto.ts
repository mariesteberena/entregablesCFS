import {Vehiculo} from "./Vehiculo"

export class Moto extends Vehiculo{
    private cilindrada: number;

    constructor (id: number, marca: string, modelo: string, patente: string, color: string,cilindrada: number){
        super(id,marca,modelo,patente,color);
        this.cilindrada = cilindrada;
    }
    public getCilindrada(): number{
        return this.cilindrada;
    }
    public setCilindrada(cilindrada: number){
        this.cilindrada = cilindrada;
    }
}