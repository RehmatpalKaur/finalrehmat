export interface College {
  name: string;
  type: string;
  established: number;
  students: {
    fullTime: number;
    partTime: number;
  };
  image: string;
  location: string;
}

//final
