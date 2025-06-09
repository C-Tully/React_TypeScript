import { createContext, useContext, useReducer, type ReactNode } from "react";

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  //exposed functions
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) throw new Error("Timers Context is null - error");

  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

type StartTimersAction = {
  type: "START_TIMERS";
};
type StopTimersAction = {
  type: "STOP_TIMERS";
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

// type Action = {
//   type: "ADD_TIMER" | "START_TIMERS" | "STOP_TIMERS";
//   payload?: Timer;
// };

//marry the reducers state to the other applicale states. E.G initialState
function timersReducer(state: TimersState, action: Action): TimersState {
  //Define some code to handle the actions and change/produce state appropriatly
  if (action.type === "START_TIMERS") {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload!.name,
          duration: action.payload.duration,
        },
      ],
    };
  }

  return state;
}
export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  // could be useState...
  // useReducer(reducerFunction, InitalStateToBeManaged);

  const [timersState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({
        type: "ADD_TIMER",
        payload: timerData,
      });
    },
    startTimers() {
      dispatch({
        type: "START_TIMERS",
      });
    },
    stopTimers() {
      dispatch({
        type: "STOP_TIMERS",
      });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

// Context
// import { createContext, useContext, type ReactNode } from "react";

// type Timer = {
//   name: string;
//   duration: number;
// };

// type TimersState = {
//   isRunning: boolean;
//   timers: Timer[];
// };

// type TimersContextValue = TimersState & {
//   //exposed functions
//   addTimer: (timerData: Timer) => void;
//   startTimers: () => void;
//   stopTimers: () => void;
// };

// export const TimersContext = createContext<TimersContextValue | null>(null);

// //Custom Hooks require the 'use' in the names
// // useLoremIpsum()
// export function useTimersContext() {
//   const timersCtx = useContext(TimersContext);

//   if (timersCtx === null) throw new Error("Timers Context is null - error");

//   return timersCtx;
// }

// type TimersContextProviderProps = {
//   children: ReactNode;
// };
// export default function TimersContextProvider({
//   children,
// }: TimersContextProviderProps) {
//   //accessing the provider property
//   //requires the 'value'
//   const ctx: TimersContextValue = {
//     timers: [],
//     isRunning: false,
//     addTimer(timerData) {},
//     startTimers() {},
//     stopTimers() {},
//   };
//   return (
//     <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
//   );
// }
