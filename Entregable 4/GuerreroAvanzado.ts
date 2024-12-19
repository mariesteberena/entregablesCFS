import { Guerrero } from "./Guerrero";

export class GuerreroAvanzado extends Guerrero {
    constructor(nombre: string, nivel: number) {
        super(nombre, nivel);
        this.vida = 150;
        this.poder = 40;
    }

    atacar(): void {
        console.log(`${this.nombre} realiza un ataque poderoso y causa ${this.poder} de daño.`);
    }
}