export default function ratingAverage(params) {
    let sum = 0;
    for (let i = 0; i < params.length - 1; i++) {
        sum += params[i];
    }

    return sum / params.length;
}