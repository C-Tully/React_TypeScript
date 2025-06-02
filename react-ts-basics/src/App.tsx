import { useState } from "react";

import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImage from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(), //demo
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      {/* <CourseGoal title="Learn react + TS" description="Lorem ipsum" /> */}
      {/* <Header imageProps={{ imgSrc: goalsImage, altText: "Alt text prop" }}> */}
      <Header image={{ src: goalsImage, alt: "Alt text prop" }}>
        <h1>This is a title</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add goal</button> */}
      <NewGoal onAddGoal={handleAddGoal} />
      {/* prop drilling */}
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
