import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const LineChart = () => {
  const lineData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "income per month",
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 100, 200, 1000],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
      },
    ],
  };
  return (
    <div style={{ flex: 1, border: "2px solid #ddd" }}>
      <Line data={lineData} options={{ responsive: true }} />
    </div>
  );
};

export default LineChart;
