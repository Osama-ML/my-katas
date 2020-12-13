function getAverage(marks){
    var sum = 0;
    var media = 0;
    marks.forEach(nota => sum += nota)
    media = sum / marks.length;
    return Math.trunc(media);
}