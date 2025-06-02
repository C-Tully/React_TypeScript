import { type FormEvent, useRef } from "react";

//Possible approach to getting hte form data is the useState hook
//Note the HTMLFormElement type comes from the tsconfig -> DOM and DOM.Iterable inclusion

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  //use null vrs undefined in this case
  // since null means we will have a value

  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // new FormData(e?.currentTarget); requires the input to have a name

    //adding the ! will force react to allow it
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal"> You6r goal</label>
        <input id="goal" type="text" name="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary"> Short summary</label>
        <input id="summary" type="text" name="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
