// Task 1

/*
დაწერე ფუნქცია expo, რომელიც იქნება
რეკურსიული ფუნქცია და მიიღებს
არგუმენტად:
● ა) ციფრს ბ) ხარისხს და გ) callback - ს და
დააბრუნებს მიღებული ციფრის ხარისხს
მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5
*5)
*/

const expo = (number, power, callback) => {
    if (power === 0) {
        return callback(1);
    } 
    else {
        return expo(number, power - 1, (result) => {
            return callback(result * number);
        });
    }
}

const result = expo(2, 8, (result) => {
    console.log(`Result: ${result}`);
});
