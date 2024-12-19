export class Vehiculo{
    protected id: number;
    protected marca: string;
    protected modelo: string;
    protected patente: string;
    protected color: string;

    constructor (id: number, marca: string, modelo: string, patente: string, color: string){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.color = color;
    }
    public getId(){
        return this.id;
    }
}