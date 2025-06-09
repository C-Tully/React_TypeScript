import { createContext } from "react";

type Timer = {
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
  startTiers: () => void;
  stopTimers: () => void;
};

//Function used to create context
const TimersContext = createContext<TimersContextValue | null>(null);
