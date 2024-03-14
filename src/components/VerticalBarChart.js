// components/VerticalBarChart.js
import { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalBarChart = ({ questionData, answerData }) => {
  // Find the question with questionIndex 3
  const question = questionData.find((q) => q.questionIndex === 3);

  const chartData = useMemo(() => {
    console.log("Question:", question);

    // Filter answers related to the question with questionIndex 3
    const relatedAnswers = answerData.filter(
      (a) => a.questionIndex === 3 && a.answer.trim() !== ""
    );
    console.log("Related Answers:", relatedAnswers);

    // Count the occurrences of each non-empty answer
    const answerCounts = relatedAnswers.reduce((acc, answer) => {
      const answerText = answer.answer.trim();
      if (answerText) {
        acc[answerText] = (acc[answerText] || 0) + 1;
      }
      return acc;
    }, {});
    console.log("Answer Counts:", answerCounts);

    // Prepare the data for the chart
    const labels = Object.keys(answerCounts);
    const data = Object.values(answerCounts);

    return {
      labels,
      datasets: [
        {
          label: question ? question.question : "Answers",
          data: data,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgb(54, 162, 235)",
          borderWidth: 1,
        },
      ],
    };
  }, [questionData, answerData, question]); // Include question as a dependency

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: question ? question.question : "Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default VerticalBarChart;
