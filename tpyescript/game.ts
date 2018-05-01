/**
 * Gets an integer random value between 2 specified numbers
 * @param minValue Minimum value passed in, inclusive
 * @param maxValue Maximum value passed in, inclusive
 */
function randomIntegerVal(minValue:number, maxValue:number){
    return Math.floor(Math.random() * 6 + 1);
}