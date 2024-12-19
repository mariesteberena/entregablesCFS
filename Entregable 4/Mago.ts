import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    constructor(nombre: string, nivel: number) {
        super(nombre, nivel, 80, 30);
    }

    atacar(): void {
        console.log(`${this.nombre} lanza un hechizo y causa ${this.poder} de daño.`);
    }

    puedeEvolucionar(): boolean {
        return this.nivel >= 8;
    }

    protected crearEvolucion(): Personaje {
        const { MagoAvanzado } = require("./MagoAvanzado");
        return new MagoAvanzado(this.nombre, this.nivel);
    }
}