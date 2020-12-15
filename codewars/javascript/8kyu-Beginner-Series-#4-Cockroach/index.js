function cockroachSpeed(s) {
    var cmh = s * 100000;
    var cms = cmh / 3600;
    cms = Math.floor(cms);
    return cms;
}