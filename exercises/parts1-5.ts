// URL for the instructions:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html
// Part 1: Declare (5) Variables With Type
let SpacecraftName: string = 'Determination';
let speedMph: number = 17_500;
let kilometersToMars: number = 225_000_000;
let kilometersToTheMoon: number = 384_400;
let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars
let milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;

// Code an output statement here (use a template literal):

// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway: number): number {
	let daysToLocation: number =
		(kilometersAway * milesPerKilometer) / speedMph / 24;
	return daysToLocation;
}

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
function outputDaysTo(
	spacecraftName: string,
	location: string,
	kilometersToLocation: number
): string {
	return `${spacecraftName} would take ${getDaysToLocation(
		kilometersToLocation
	)} days to get to ${location}.`;
}

console.log(outputDaysTo(SpacecraftName, 'Mars', kilometersToMars));
console.log(outputDaysTo(SpacecraftName, 'The Moon', kilometersToTheMoon));
// Part 4: Create a Spacecraft Class

// Create an instance of the class here:

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.

// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
