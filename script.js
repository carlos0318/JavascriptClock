const displayTime = () => {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let day = dateTime.getDay();
    let session = document.getElementById('session');
    let days = document.querySelectorAll('.day');
    
    days[day-1].classList.add('active');
    hrs >= 12 ? session.innerHTML = 'PM' : session.innerHTML = 'AM';
    hrs > 12 ? hrs = hrs-12 : hrs = hrs;
    hrs < 10 ? hrs = '0'+ hrs : hrs = hrs;
    min < 10 ? min = '0' + min : min = min;
    sec < 10 ? sec = '0'+ sec : sec = sec ;

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 10);