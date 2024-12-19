import { RegistroAutomotor } from "./registroAutomotor";
import { Auto } from "./vehiculo/Auto";
import { Camion } from "./vehiculo/Camion";
import { Moto } from "./vehiculo/Moto";

let registroAutomotor : RegistroAutomotor = new RegistroAutomotor('Registro de Autos Demian');

let auto1 : Auto = new Auto(4, 'Ford', '123456');
let moto1 : Moto = new Moto('Honda', '123456',150);
let camion1 : Camion = new Camion(2000, 'Fiat', '123456');

// Registro 3 vehículos
registroAutomotor.agregarVehiculo(auto1);
registroAutomotor.agregarVehiculo(moto1);
registroAutomotor.agregarVehiculo(camion1);

// Listado de todos los vehículos disponibles
registroAutomotor.listarTodosLosVehiculos();

registroAutomotor.bajaVehiculo(moto1);

// Listado vehículos luego de dar de baja
registroAutomotor.listarTodosLosVehiculos();

auto1.setMarca('Chevrolet');

registroAutomotor.modificarVehiculo(auto1);

// Listado vehículos luego de modificar
registroAutomotor.listarTodosLosVehiculos();
