import { Personaje } from "./Personaje";

export class Guerrero extends Personaje {
    constructor(nombre: string, nivel: number) {
        super(nombre, nivel, 100, 20);
    }

    atacar(): void {
        console.log(`${this.nombre} ataca con su espada y causa ${this.poder} de daño.`);
    }

    puedeEvolucionar(): boolean {
        return this.nivel >= 10;
    }

    protected crearEvolucion(): Personaje {
        const { GuerreroAvanzado } = require("./GuerreroAvanzado");
        return new GuerreroAvanzado(this.nombre, this.nivel);
    }
}