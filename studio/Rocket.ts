import Astronaut from './Astronaut';
import Cargo from './Cargo';
import { Payload } from './Payload';

export default class Rocket {
	name: string;
	totalCapacityKg: number;
	cargoItems: Cargo[];
	astronauts: Astronaut[];

	constructor(name: string, totalCapacityKg: number) {
		this.name = name;
		this.totalCapacityKg = totalCapacityKg;
		this.cargoItems = [];
		this.astronauts = [];
	}

	sumMass(items: Payload[]): number {
		let sum: number = 0;
		for (let item of items) {
			sum += item.massKg;
		}
		return sum;
	}

	currentMassKg(): number {
		let massKg: number = 0;
		massKg += this.sumMass(this.cargoItems);
		massKg += this.sumMass(this.astronauts);
		return massKg;
	}

	canAdd(item: Payload): boolean {
		return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
	}

	addPayload(payload: Payload, array: Payload[]): boolean {
		let canAdd = this.canAdd(payload);
		if (canAdd) array.push(payload);
		return canAdd;
	}

	addCargo(cargo: Cargo): boolean {
		return this.addPayload(cargo, this.cargoItems);
	}

	addAstronaut(astronaut: Astronaut): boolean {
		return this.addPayload(astronaut, this.astronauts);
	}
}
