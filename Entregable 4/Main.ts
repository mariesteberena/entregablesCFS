import { Guerrero } from './Guerrero';
import { Personaje } from "./Personaje"
import { Mago } from "./Mago";

let guerrero = new Guerrero("Thor", 10);
let mago = new Mago("Merlin", 8);

guerrero.mostrarEstado();
guerrero.atacar();

mago.mostrarEstado();
mago.atacar();

guerrero = guerrero.evolucionar() as Guerrero;
mago = mago.evolucionar() as Mago;

guerrero.mostrarEstado();
guerrero.atacar();

mago.mostrarEstado();
mago.atacar();