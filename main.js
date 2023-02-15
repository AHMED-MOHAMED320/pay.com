const colors = {
    purple: {
        default: 'rgb(20, 18, 31)',
        half: 'rgba(20, 18, 31, 0.5)',
        quarter: 'rgba(20, 18, 31, 0.25)',
        zero: 'rgba(20, 18, 31, 0)',
    },
    indigo: {
        default: 'rgba(80, 102, 120, 1)',
        quarter: 'rgba(80, 102, 120, 0.25)',
    },
};

const weight = [10.0, 60.2, 30.1, 15.4, 25.9, 69.2, 49.8, 28.6, 59.6, 59.2];

const labels = ['', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', ''];

const ctx = document.getElementById('canvas').getContext('2d');
ctx.canvas.height = 200;

gradient = ctx.createLinearGradient(0, 25, 0, 300);
gradient.addColorStop(0, colors.purple.half);
gradient.addColorStop(0.35, colors.purple.quarter);
gradient.addColorStop(1, colors.purple.zero);

const options = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                fill: true,
                backgroundColor: gradient,
                pointBackgroundColor: colors.purple.default,
                borderColor: colors.purple.default,
                data: weight,
                lineTension: 0.7,
                borderWidth: 3,
                pointRadius: 0,
            },
        ],
    },
    options: {
        layout: {
            padding: 0,
        },
        responsive: true,
        legend: {
            display: false,
        },

        scales: {
            xAxes: [
                {
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                    ticks: {
                        fontFamily: 'Ubuntu, sans-serif',
                    },
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0)',
                        zeroLineColor: 'transparent',
                        drawTicks: false,
                    },
                    ticks: {
                        display: false,
                        min: 0,
                        max: 80,
                        stepSize: 20,
                    },
                },
            ],
        },
    },
};

window.onload = function () {
    window.myLine = new Chart(ctx, options);
    Chart.defaults.global.defaultFontColor = colors.indigo.default;
};

const table = document.querySelectorAll('.pophere');
table.forEach((i) => {
        i.addEventListener('click', e => {
            e.currentTarget.parentElement.classList.toggle('active');
        });
    });

