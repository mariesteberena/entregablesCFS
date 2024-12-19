export class Camion {
    private capacidadCarga: number;
    private marca: string;
    private tipoV: string;
    private patente: string;

    public constructor(capacidadCarga: number, marca: string, patente: string) {
        this.capacidadCarga = capacidadCarga;
        this.marca = marca;
        this.tipoV = 'camion';
        this.patente = patente;
    }

    public getPatente(): string {
        return this.patente;
    }

    public getTipoVehiculo(): string {
        return this.tipoV;
    }

    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    public setCapacidadCarga(capacidadCarga: number): void {
        this.capacidadCarga = capacidadCarga;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }
}
