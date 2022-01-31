export interface IEvent {
  id: number;
  title: string;
}

export interface IEvents {
  id: number;
  rivals: [{ team1: string }, { team2: string }];
}
