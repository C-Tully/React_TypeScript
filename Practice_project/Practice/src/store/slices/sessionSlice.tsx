export default SessionSlice() {
  export type SessionHistory = {
    id: string;
    body: string;
    date: Date;
  };
  
  sessionHistory: SessionHistory[];
}