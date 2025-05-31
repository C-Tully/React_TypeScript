import { useState } from "react";

import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImage from "./assets/goals.jpg";
import Header from "./components/Header.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  /**
   * Alternatively.. the built in generic array type
   * const [goals, setGoals] = useState<Array<CourseGoal>>([]);
   */

  // function handleAddGoal() {
  //   //we need to update state based on its previous snapshot
  //   // if the new state depends on the old state, we wanna use this
  //   // process
  //   setGoals((prevGoals) => {
  //     const newGoal: CourseGoal = {
  //       id: Math.random(), //demo
  //       title: "Lorem",
  //       description: "ipsum",
  //     };
  //     return [...prevGoals, newGoal];
  //   });
  // }

  return (
    <main>
      {/* <CourseGoal title="Learn react + TS" description="Lorem ipsum" /> */}
      {/* <Header imageProps={{ imgSrc: goalsImage, altText: "Alt text prop" }}> */}
      <Header image={{ src: goalsImage, alt: "Alt text prop" }}>
        <h1>This is a title</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add goal</button> */}
      <CourseGoalList goals={goals} />
    </main>
  );
}
