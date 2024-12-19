import { Mago } from "./Mago";

export class MagoAvanzado extends Mago {
    constructor(nombre: string, nivel: number) {
        super(nombre, nivel);
        this.vida = 120;
        this.poder = 50;
    }

    atacar(): void {
        console.log(`${this.nombre} lanza un hechizo y causa ${this.poder} de daño.`);
    }
}