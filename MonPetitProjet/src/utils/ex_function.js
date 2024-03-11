// Exo fonction
export function returnLargestNumber(array) {
    let larget_number = array.length > 0 ? array[0] : -Infinity; 
    array.forEach(number => {
        if (number > larget_number) {
            larget_number = number;
        }
    });
    return larget_number;
    
}

export function deleteVowel(string) {
    return string.replace(/[aeiouAEIOU]/g, "");
}

export function sortArrayOfString(array_string) {
    return array_string.sort();
}

export function returnNumberInString(number) {
    const array_convertion = {1: "un",2: "deux",3: "trois",4: "quatre",5: "cinq",6: "six",7: "sept",8: "huit",9: "neuf",10: "dix",11: "onze",12: "douze",13: "treize",14: "quatorze",15: "quinze",16: "seize",17: "dix-sept",18: "dix-huit",19: "dix-neuf",20: "vingt",21: "vingt-et-un",22: "vingt-deux",23: "vingt-trois",24: "vingt-quatre",25: "vingt-cinq",26: "vingt-six",27: "vingt-sept",28: "vingt-huit",29: "vingt-neuf",30: "trente",31: "trente-et-un",32: "trente-deux",33: "trente-trois",34: "trente-quatre",35: "trente-cinq",36: "trente-six",37: "trente-sept",38: "trente-huit",39: "trente-neuf",40: "quarante",41: "quarante-et-un",42: "quarante-deux",43: "quarante-trois",44: "quarante-quatre",45: "quarante-cinq",46: "quarante-six",47: "quarante-sept",48: "quarante-huit",49: "quarante-neuf",50: "cinquante",51: "cinquante-et-un",52: "cinquante-deux",53: "cinquante-trois",54: "cinquante-quatre",55: "cinquante-cinq",56: "cinquante-six",57: "cinquante-sept",58: "cinquante-huit",59: "cinquante-neuf",60: "soixante",61: "soixante-et-un",62: "soixante-deux",63: "soixante-trois",64: "soixante-quatre",65: "soixante-cinq",66: "soixante-six",67: "soixante-sept",68: "soixante-huit",69: "soixante-neuf",70: "soixante-dix",71: "soixante-et-onze",72: "soixante-douze",73: "soixante-treize",74: "soixante-quatorze",75: "soixante-quinze",76: "soixante-seize",77: "soixante-dix-sept",78: "soixante-dix-huit",79: "soixante-dix-neuf",80: "quatre-vingts",81: "quatre-vingt-un",82: "quatre-vingt-deux",83: "quatre-vingt-trois",84: "quatre-vingt-quatre",85: "quatre-vingt-cinq",86: "quatre-vingt-six",87: "quatre-vingt-sept",88: "quatre-vingt-huit",89: "quatre-vingt-neuf",90: "quatre-vingt-dix",91: "quatre-vingt-onze",92: "quatre-vingt-douze",93: "quatre-vingt-treize",94: "quatre-vingt-quatorze",95: "quatre-vingt-quinze",96: "quatre-vingt-seize",97: "quatre-vingt-dix-sept",98: "quatre-vingt-dix-huit",99: "quatre-vingt-quatorze",100: "100"}
    return array_convertion[number];
 
}

export function returnObjectPropertyValue(array_objects, property_name) {
    return array_objects.map(objet => objet[property_name]);
}

export function sortArrayOfNumber(array_number) {
    array_number.sort(function(a, b) {
        return a - b;
      });
    return array_number.reverse();
}
export function replaceVowelToCaps(string) {
    return string.replace(/[aeiou]/g, function(vowel) {
        return vowel.toUpperCase();
    });
}
export function countVowels(string) {
    const regex = /[aeiou]/gi; 
    const correspondances = string.match(regex);
    return correspondances ? correspondances.length : 0;
}

export function replaceConsonantToCaps(string) {
    return string.replace(/[^aeiouAEIOU]/g, function(consonant) {
        return consonant.toUpperCase();
    });
}
