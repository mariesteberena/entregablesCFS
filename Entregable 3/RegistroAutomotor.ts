import { Vehiculo } from "./Vehiculo";
import { Moto } from "./Moto";
import { Camion } from "./Camion";

export class RegistroAutomotor {
  private vehiculos: Vehiculo[] = [];

  constructor(vehiculos?: Vehiculo[]) {
    if (vehiculos) {
      this.vehiculos = vehiculos;
    }
  }

  public addVehiculo(vehiculo: Vehiculo): void {
    if (this.vehiculos.some((v) => v.getId() === vehiculo.getId())) {
      console.log("Vehiculo existente en el registro de automotor.");
    } else {
      this.vehiculos.push(vehiculo);
      console.log(
        "Se agrego el vehiculo con id " + vehiculo.getId() + "correctamente"
      );
    }
  }

  public modifyVehiculo(vehiculo: Vehiculo): void {
    if (this.existeVehiculo(vehiculo)) {
      this.vehiculos.forEach((v, index) => {
        if (v.getId() === vehiculo.getId()) {
          this.vehiculos[index] = vehiculo; 
          return;
        }
      });
    } else {
      console.log("Vehiculo no encontrado");
    }
  }

  public deleteVehiculo(vehiculo: Vehiculo): void {
    if (this.existeVehiculo(vehiculo)) {
      this.vehiculos = this.vehiculos.filter(
        (v) => v.getId() !== vehiculo.getId()
      );
      console.log("Vehiculo eliminado correctamtnte");
    } else {
      console.log("El vehiculo no existe");
    }
  }

  public getMotos(): Moto[] {
    let response: Moto[] = [];
    this.vehiculos.forEach((moto) => {
      if (moto instanceof Moto) {
        response.push(moto);
      }
    });

    return response;
  }

  public getCamiones(): Camion[] {
    let response: Camion[] = [];
    this.vehiculos.forEach((camion) => {
      if (camion instanceof Camion) {
        response.push(camion);
      }
    });

    return response;
  }

  public existeVehiculo(vehiculo: Vehiculo): boolean {
    if (this.vehiculos.find((v) => v.getId() === vehiculo.getId())) {
      return true;
    }
    return false;
  }
}