import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CourseGoalType } from "../App.tsx";
/**Adding State..
 * When using react with TS we have to tell react
 * which type of value we're managing with useState
 * with TS we can set the type with useState
 * const [goals, setGoals] = useState<CourseGoal[]>([]);
 */
type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoallist({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
