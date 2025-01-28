import { Bar } from "react-chartjs-2";
ChartJS.register(...registerables);
import { Chart as ChartJS, registerables } from "chart.js";
const BarChart = () => {
  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Cold Prospects",
        data: [3, 4, 5, 5, 2, 6, 5, 3, 4, 7, 12, 2],
        backgroundColor: [
          "rgba(98, 0, 255, 0.6)"],
      },
      {
        label: "Warm Prospects",
        data: [1, 1, 3, 2, 2, 1, 5, 4, 0, 3, 10, 2],
        backgroundColor: [
          "rgba(224, 41, 41, 0.6)"],
      },
      {
        label: "Qualified Prospects",
        data: [1, 1, 1, 0, 1, 1, 3, 4, 0, 0, 7, 2],
        backgroundColor: [
          "rgba(77, 255, 0, 0.6)"],
      },
    ],
  };
  return (
    <div style={{ flex: 1, border: "2px solid #ddd" }}>
      <Bar data={barData} options={{ responsive: true }} />
    </div>
  );
};

export default BarChart;
