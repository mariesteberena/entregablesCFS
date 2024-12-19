export class Auto{
    private cantPuertas: number;
    private marca: string;
    private tipoV: string;
    private patente: string;
    
    public constructor(puertas: number, marca: string, patente: string){
        this.cantPuertas = puertas;
        this.marca = marca;
        this.tipoV = 'auto';
        this.patente = patente;
    }

    public getPatente(): string{
        return this.patente;
    }

    public getTipoVehiculo(): string {
        return this.tipoV;
    }
    
    public getCantPuertas(): number {
        return this.cantPuertas;
    }

    public setCantPuertas(cantPuertas: number): void {
        this.cantPuertas = cantPuertas;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }
}