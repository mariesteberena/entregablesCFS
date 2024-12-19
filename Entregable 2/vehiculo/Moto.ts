export class Moto {
    private marca: string;
    private tipoV: string;
    private patente: string;
    private cilindrada: number;

    public constructor(marca: string, patente: string, cilindrada: number) {
        this.marca = marca;
        this.tipoV = 'moto';
        this.patente = patente;
        this.cilindrada = cilindrada;
    }

    public getPatente(): string {
        return this.patente;
    }

    public getTipoVehiculo(): string {
        return this.tipoV;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getCilindrada(): number {
        return this.cilindrada;
    }

    public setCilindrada(cilindrada: number): void {
        this.cilindrada = cilindrada;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }
}
