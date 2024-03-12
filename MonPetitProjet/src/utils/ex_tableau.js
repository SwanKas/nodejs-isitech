// Exo Tableau
export function returnEachValueOfArray(array_1_to_10) {
    console.log("Voici chaque valeur de mon tableau");
    array_1_to_10.forEach(element => {
        console.log(element);
    });
    
}
export function returnFirstDayOfWeek() {
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    console.log(days[0]);
}
export function returnSumOfEachValue(array_even_1_to_10) {
    let result_event_calcul = 0;
    array_even_1_to_10.forEach(element => {
        result_event_calcul += element;
    });
    return ("Voici le resultat de toutes les valeur de mon tableau additionner " + result_event_calcul);
}
export function addFruitToArray(array, value) {
    array.push(value);
    return array;
}
export function average(array) {
    let sum = 0; 
    for (let i = 0; i < array.length; i++)  
        sum += array[i]; 
    const average = sum / array.length; 
    return average; 
}

export function birdExist(array_bird, bird) {
    for (let i = 0; i < bird.length; i++) {
        if (array_bird[i] === bird) {
            return true;
        }
    }
    return false;
}

export function sortCountry(array_string) {
    return array_string.sort();
}

export function returnThirdValue(array_string) {
    return array_string[2];
}
export function minAndMaxValue(array_number) {
    let minValue = array_number[0];
    let maxValue = array_number[0];
    
    for (let i = 1; i < array_number.length; i++) {
        if (array_number[i] < minValue) {
            minValue = array_number[i]; 
        }
        if (array_number[i] > maxValue) {
            maxValue = array_number[i]; 
        }
    }
    
    return [minValue, maxValue];
}

export function findLongestPhrase(array_phrases) {
    let longestPhrase = array_phrases[0];
    for (let i = 1; i < array_phrases.length; i++) {
        if (array_phrases[i].length > longestPhrase.length) {
            longestPhrase = array_phrases[i];
        }
    }
    return longestPhrase; 
}