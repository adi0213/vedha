document.addEventListener("DOMContentLoaded", function () {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const trendData = [30, 40, 55, 60, 75, 80, 95, 90, 85, 70, 50, 40];

  function calculateStats(data) {
    let sum = data.reduce((a, b) => a + b, 0);
    let mean = sum / data.length;
    let variance =
      data.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0) /
      data.length;
    let stdDev = Math.sqrt(variance);
    return { mean: mean.toFixed(2), stdDev: stdDev.toFixed(2) };
  }

  let stats = calculateStats(trendData);
  document.getElementById(
    "stats"
  ).innerHTML = `Mean: ${stats.mean}, Standard Deviation: ${stats.stdDev}`;

  new Chart(document.getElementById("trendChart"), {
    type: "line",
    data: {
      labels: months,
      datasets: [
        {
          label: "Disease Trend",
          data: trendData,
          borderColor: "blue",
          fill: false,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
