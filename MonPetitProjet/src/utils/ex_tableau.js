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
