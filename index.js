// Code your solution in this file!
const headquarters = 42;
const manhattanBlock = 264;

function distanceFromHqInBlocks(street) {
       if(street > headquarters) {
           return street - headquarters
       }else if (street < headquarters) {
           return headquarters - street
       }
}

function distanceFromHqInFeet (street) {
    return distanceFromHqInBlocks(street) * manhattanBlock;
}
function distanceTravelledInFeet (start, destination) {
    if (destination > start) {
        return (destination - start) * manhattanBlock
    } else if (destination < start) {
        return (start -destination) * manhattanBlock
    }
}

function calculatesFarePrice (start, destination) {
    let calculatesFarePrice;
    let calculatesFeet = distanceTravelledInFeet (start, destination);
    if (calculatesFeet < 400) {
        return calculatesFarePrice = 0;
    }else if (calculatesFeet > 400 && calculatesFeet < 2000) {
        calculatesFarePrice = calculatesFeet - 400;
        return (calculatesFarePrice * 0.02);
    }else if (calculatesFeet > 2000 && calculatesFeet < 2500) {
        calculatesFarePrice = calculatesFeet - 400;
        return (calculatesFarePrice = 25);
    }else if (calculatesFeet > 2500) {
        return 'cannot travel that far';
    }
}