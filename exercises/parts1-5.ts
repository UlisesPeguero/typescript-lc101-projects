const kilometersToMars: number = 225_000_000;
const kilometersToTheMoon: number = 384_400;
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

	outputDaysTo(location: string, kilometersToLocation: number): string {
		return `${this.name} would take ${this.getDaysToLocation(
			kilometersToLocation
		)} days to get to ${location}.`;
	}
}
// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17_500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log(spaceShuttle.outputDaysTo('Mars', kilometersToMars));
console.log(spaceShuttle.outputDaysTo('The Moon', kilometersToTheMoon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.

// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
