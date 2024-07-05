function timeWalk(first, second, third) {
    let distance = first * second;
    let speedMeters = third / 3.6;
    let time = distance / speedMeters;
    let res = Math.floor(distance / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Number(time - (timeMin * 60)).toFixed(0);
    let timeHours = Math.floor(time / 3600);
    timeMin += res;
    timeHours += Math.floor(timeMin / 60);
    timeMin = timeMin % 60;
    let formated = timeHours < 10 ? `0${timeHours}` : `${timeHours}`
    let formatedMin = timeMin < 10 ? `0${timeMin}` : `${timeMin}`
    let formatedSec = timeSec < 10 ? `0${timeSec}` : `${timeSec}`

    console.log(`${formated}:${formatedMin}:${formatedSec}`);
}
timeWalk(4000, 0.60, 5);
timeWalk(2564, 0.70, 5.5);