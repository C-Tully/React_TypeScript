/**
 * Note that with the tsconfig strict mode being on, we must set a
 * explicit value for he params
 */
// export default function CourseGoal({title, description}:{
//   title: string;
//   description: string;
// }) {
//   //Goal: Output a list of course goals
//   return (
//     <article>
//       <div>
//         <h2>{ title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

//using a custom type to imporve code readability.
// type CourseGoalProps = {
//   title: string;
//   description: string;
// };
//or.....
//both approaches are ok, and it boils down to a
//personal approach or other reasons use as extendability
// interface CourseGoalProps {
//   title: string;
//   description: string;
// }

// export default function CourseGoal({
//   title,
//   description,
//   children,
// }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <button>Delete</button>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//     </article>
//   );
// }

/**
 * Children Property:
 * Note this is a react type, that is from the devDependencies inclusion
 * It's good practice to add the "type" keyword to the import
 * so the compiler remove it at build time.
 */

import { type PropsWithChildren, type ReactNode } from "react";

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

/**
 * alternative to the children type: PropsWithChildren
 * Note that using this vrs the 'children' you still want the
 * 'type' on the import note that PropsWithChildren needs to work
 * in tandem with another type.
 *
 */
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

//children property
export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
        {/* <button onClick={(event) => onDelete(id)}>Delete</button> */}
        <h2>{title}</h2>
        {children}
      </div>
    </article>
  );
}

/**
 * Alternative to the traditional export default function
 * The bonus of this is we can assign a type to the variable as 'FC'
 * which is a type imported by react FC = Functional component
 * The type was assign to the const  FC is a generic Type in this ex
 * we set the coursegoalProps as the type so we have a connected type
 * This also allows us to modify the declaration to not include the typing
 * at the last part.
 */

// import { type FC, type PropsWithChildren, type ReactNode } from "react";

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <button>Delete</button>
//         <h2>{title}</h2>
//         {children}
//       </div>
//     </article>
//   );
// };
// export default CourseGoal;
