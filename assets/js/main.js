// Declaration
const daily = document.querySelector("#daily")
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly")
const workTime = document.querySelector("#workTime")
const workTimePre = document.querySelector("#workTimePre")
const playTime = document.querySelector("#playTime")
const playTimePre = document.querySelector("#playTimePre")
const studyTime = document.querySelector("#studyTime")
const studyTimePre = document.querySelector("#studyTimePre")
const exTime = document.querySelector("#exTime")
const exTimePre = document.querySelector("#exTimePre")
const socialTime = document.querySelector("#socialTime")
const socialTimePre = document.querySelector("#socialTimePre")
const selfCareTime = document.querySelector("#selfTime")
const selfCareTimePre = document.querySelector("#selfTimePre")

// Data
const timeframe = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

// Eventlistener
daily.addEventListener('click', () => {
    daily.classList.add('.active');
    weekly.classList.remove('.active');
    monthly.classList.remove('.active');
    workTime.textContent = timeframe[0].timeframes.daily.current + 'hrs';
    workTimePre.textContent = 'Last day - ' + timeframe[0].timeframes.daily.previous + 'hrs';
    playTime.textContent = timeframe[1].timeframes.daily.current + 'hrs';
    playTimePre.textContent = 'Last day - ' + timeframe[1].timeframes.daily.previous + 'hrs';
    studyTime.textContent = timeframe[2].timeframes.daily.current + 'hrs';
    studyTimePre.textContent = 'Last day - ' + timeframe[2].timeframes.daily.previous + 'hrs';
    exTime.textContent = timeframe[3].timeframes.daily.current + 'hrs';
    exTimePre.textContent = 'Last day - ' + timeframe[3].timeframes.daily.previous + 'hrs';
    socialTime.textContent = timeframe[4].timeframes.daily.current + 'hrs';
    socialTimePre.textContent = 'Last day - ' + timeframe[4].timeframes.daily.previous + 'hrs';
    selfCareTime.textContent = timeframe[5].timeframes.daily.current + 'hrs';
    selfCareTimePre.textContent = 'Last day - ' + timeframe[5].timeframes.daily.previous + 'hrs';
})

weekly.addEventListener('click', () => {
    weekly.classList.add('active');
    daily.classList.remove('active');
    monthly.classList.remove('active');
    workTime.textContent = timeframe[0].timeframes.weekly.current + 'hrs';
    workTimePre.textContent = 'Last Week - ' + timeframe[0].timeframes.weekly.previous + 'hrs';
    playTime.textContent = timeframe[1].timeframes.weekly.current + 'hrs';
    playTimePre.textContent = 'Last Week - ' + timeframe[1].timeframes.weekly.previous + 'hrs';
    studyTime.textContent = timeframe[2].timeframes.weekly.current + 'hrs';
    studyTimePre.textContent = 'Last Week - ' + timeframe[2].timeframes.weekly.previous + 'hrs';
    exTime.textContent = timeframe[3].timeframes.weekly.current + 'hrs';
    exTimePre.textContent = 'Last Week - ' + timeframe[3].timeframes.weekly.previous + 'hrs';
    socialTime.textContent = timeframe[4].timeframes.weekly.current + 'hrs';
    socialTimePre.textContent = 'Last Week - ' + timeframe[4].timeframes.weekly.previous + 'hrs';
    selfCareTime.textContent = timeframe[5].timeframes.weekly.current + 'hrs';
    selfCareTimePre.textContent = 'Last Week - ' + timeframe[5].timeframes.weekly.previous + 'hrs';
})

monthly.addEventListener('click', () => {
    monthly.classList.add("active");
    weekly.classList.remove('active');
    daily.classList.remove('active');
    workTime.textContent = timeframe[0].timeframes.monthly.current + 'hrs';
    workTimePre.textContent = 'Last month - ' + timeframe[0].timeframes.monthly.previous + 'hrs';
    playTime.textContent = timeframe[1].timeframes.monthly.current + 'hrs';
    playTimePre.textContent = 'Last month - ' + timeframe[1].timeframes.monthly.previous + 'hrs';
    studyTime.textContent = timeframe[2].timeframes.monthly.current + 'hrs';
    studyTimePre.textContent = 'Last month - ' + timeframe[2].timeframes.monthly.previous + 'hrs';
    exTime.textContent = timeframe[3].timeframes.monthly.current + 'hrs';
    exTimePre.textContent = 'Last month - ' + timeframe[3].timeframes.monthly.previous + 'hrs';
    socialTime.textContent = timeframe[4].timeframes.monthly.current + 'hrs';
    socialTimePre.textContent = 'Last month - ' + timeframe[4].timeframes.monthly.previous + 'hrs';
    selfCareTime.textContent = timeframe[5].timeframes.monthly.current + 'hrs';
    selfCareTimePre.textContent = 'Last month - ' + timeframe[5].timeframes.monthly.previous + 'hrs';
})