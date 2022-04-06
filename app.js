const countdown = () => {
  const countDate = new Date("October 13, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // How the fuck does timw work?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;

  // Calculate the fucking shit
  const textMonth = Math.floor(gap / month);
  const textDay = Math.floor((gap % month) / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // Change the fucking HTML
  document.querySelector(".month").innerText = textMonth;
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);
