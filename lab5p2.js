let list = [];
let min = 0;
let max = 0;

function readInput() {
    while (true) {
        const input = Number(prompt('Enter an integer (a negative integer to quit)'));
        if (input % 1 == 0 && input >= 0) {
            console.log('pos');
            list.push(Number(input));
        } else if (input < 0) {
            console.log('neg');
            console.log(list);
            break;
        } else {
            console.log('not defined');
        }
    }
    return list;
}

function displayStats(list) {
    let theList = list.length > 0 ? list : 'empty';
    let stats = list.length > 0 ? list.length : 0;
    console.log(stats);
    min = stats > 0 ? Math.min(...(list)) : 0;
    max = stats > 0 ? Math.max(...(list)) : 0;
    let sum = list.reduce((accumulate, currentValue) => accumulate + currentValue,0);
    console.log('Min:' + min);
    console.log('Max:' + max);
    console.log('Sum:' + sum);
    let average = sum > 0 ? sum / list.length : 0;
    console.log('Average:' + average.toFixed(2));
    alert(
        'For the list ' + theList + ' the average is ' + average.toFixed(2) + ' the minimum is ' + min + ' and the maximum is ' + max
    )
}

list = readInput();
displayStats(list);