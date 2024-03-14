"use client";

import VerticalBarChart from "@/components/VerticalBarChart";

import questions from "@/data/questions.json";
import answers from "@/data/answers.json";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import PieChart from "@/components/PieChart";



export default function Home() {
 
  return (

    <div>
      <h1>chartjs</h1>
      <VerticalBarChart questionData={questions} answerData={answers} />
      <HorizontalBarChart questionData={questions} answerData={answers} />
      <PieChart questionData={questions} answerData={answers} />
    </div>
  );
}
