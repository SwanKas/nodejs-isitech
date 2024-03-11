import { divide, add } from "./src/utils/math.js"
import { returnLargestNumber, deleteVowel, sortArrayOfString, returnNumberInString, returnObjectPropertyValue, sortArrayOfNumber, replaceVowelToCaps, countVowels, replaceConsonantToCaps } from "./src/utils/ex_function.js"
import { returnEachValueOfArray,returnFirstDayOfWeek, returnSumOfEachValue, addFruitToArray } from "./src/utils/ex_tableau.js"

const echo_exo_function = false;
const echo_exo_tableau = true;

if(echo_exo_function === true){
    const a = 45;
    const b = 42;
    const array_number = [12,156,98,32,5,654];
    const string_with_vowel = "Je mange des pizzas wesh";
    const array_string = ["je", "mange","BBBB", "des", "pizza", "wesh", "AAAA"];
    const property = "age";
    const user = [
        { nom: 'Swan', age: 19 },
        { nom: 'Balthi', age: 26},
        { nom: 'Maxou', age: 45 }
    ];
  
    console.log("La division de " + a + " par " + b + " = " + divide(a,b));
    console.log("La somme de " + a + " et " + b + " = " + add(a,b));
    console.log("Le nombre le plus grand du tableau "+array_number+" est " + returnLargestNumber(array_number));
    console.log("La phrase '"+string_with_vowel+"' sans voyelles donne '"+deleteVowel(string_with_vowel) + "'");
    console.log("Le tableau de string '"+array_string+"' trier alphabetiquement donne '"+sortArrayOfString(array_string) + "'");
    console.log("Le nombre '"+ a +"' donne en lettre '"+returnNumberInString(a) + "'");
    console.log("Il y a ces valeur [" + returnObjectPropertyValue(user,property) + "] avec la proprieté " + property);
    console.log("Le tableau de nombre '"+array_number+"' trier dans l'ordre decroissant donne '"+sortArrayOfNumber(array_number) + "'");
    console.log("La phrase '"+string_with_vowel+"' avec des voyelles en majuscule donne  '"+replaceVowelToCaps(string_with_vowel) + "'");
    console.log("La phrase '"+string_with_vowel+"' contient  '"+countVowels(string_with_vowel) + "' de voyelles");
    console.log("La phrase '"+string_with_vowel+"' avec des consonnes en majuscule donne  '"+replaceConsonantToCaps(string_with_vowel) + "'");
}

if(echo_exo_tableau === true){
    const array_1_to_10 = [1,2,3,4,5,6,7,8,9,10];
    const array_even_1_to_10 = [2,4,6,8,9,10];
    const array_fruits = ["Pomme", "Big banana", "Big pasteque", "Petite Tomate"];

    console.log(returnEachValueOfArray(array_1_to_10));
    console.log(returnFirstDayOfWeek());


    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    console.log(days[0]);

    console.log(returnSumOfEachValue(array_even_1_to_10));

    console.log(addFruitToArray(array_fruits, "Little champignon"));
}