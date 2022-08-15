import { SpaceLocation } from './SpaceLocation';
class Spacecraft {
	milesPerKilometer: number = 0.621;
	name: string;
	speedMph: number;

	constructor(name: string, speedMph: number) {
		this.name = name;
		this.speedMph = speedMph;
	}

	getDaysToLocation(kilometersAway: number): number {
		let daysToLocation: number =
			(kilometersAway * this.milesPerKilometer) / this.speedMph / 24;
		return daysToLocation;
	}

	printDaysToLocation({ kilometersAway, name }: SpaceLocation): void {
		console.log(
			`${this.name} would take ${this.getDaysToLocation(
				kilometersAway
			)} days to get to ${name}.`
		);
	}
}
// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17_500);
let marsLocation = new SpaceLocation('Mars', 225_000_000);
let theMoonLocation = new SpaceLocation('The Moon', 384_400);

spaceShuttle.printDaysToLocation(marsLocation);
spaceShuttle.printDaysToLocation(theMoonLocation);
