var calcNewYear = setInterval(function() {
    date_future = new Date(new Date().getFullYear() + 1, 0, 1);
    date_now = new Date();

    seconds = Math.floor((date_future - date_now) / 1000);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    days -= 7;

    document.getElementById("time").innerHTML =
        "\nDays: " +
        days +
        " Hours: " +
        hours +
        " Minutes: " +
        minutes +
        " Seconds: " +
        seconds;
});