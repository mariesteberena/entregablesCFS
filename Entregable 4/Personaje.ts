export abstract class Personaje {
    constructor(
        protected nombre: string,
        protected nivel: number,
        protected vida: number,
        protected poder: number
    ) { }

    abstract atacar(): void;

    mostrarEstado(): void {
        console.log(
            `${this.nombre} - Nivel: ${this.nivel} | Vida: ${this.vida} | Poder: ${this.poder}`
        );
    }

    abstract puedeEvolucionar(): boolean;

    evolucionar(): Personaje {
        if (this.puedeEvolucionar()) {
            console.log(`${this.nombre} está evolucionando...`);
            return this.crearEvolucion();
        } else {
            console.log(`${this.nombre} no puede evolucionar aún.`);
            return this;
        }
    }

    protected abstract crearEvolucion(): Personaje;
}