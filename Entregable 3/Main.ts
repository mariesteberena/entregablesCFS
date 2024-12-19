import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { RegistroAutomotor } from "./RegistroAutomotor";

const moto = new Moto(1,"Motomel","2010", "ibh213","ROJO", 110);
const moto3 = new Moto(3, "Mondial", "2005", "ehd345", "rojo",150);

const camion = new Camion(1,"Scania", "2013", "abs232", "gris","privado");
const registro = new RegistroAutomotor();

const moto4 = new Moto(5,"Motomel","2010", "abc323","ROJO", 110);
const moto5 = new Moto(1,"Motomel","2010", "abc323","AZul", 110);

registro.addVehiculo(moto);
registro.addVehiculo(moto3);
registro.addVehiculo(camion);

console.log("Motos: ");
console.log(registro.getMotos())
console.log("Camiones: ");
console.log(registro.getCamiones())

console.log("MODIFICAR")
console.log(registro.getMotos());
registro.modifyVehiculo(moto4);
console.log("modificar moto");
console.log(registro.getMotos());

registro.modifyVehiculo(moto5);
console.log("modificar moto");
console.log(registro.getMotos());

registro.deleteVehiculo(moto);
console.log("delete moto");
console.log(registro.getMotos());