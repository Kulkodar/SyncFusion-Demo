export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const users = [
  {
    id: 1,
    firstName: "Kevin",
    lastName: "Winkler",
    email: "kevin.winkler@cn-consult.eu"
  },
  {
    id: 2,
    firstName: "Max",
    lastName: "Musterman",
    email: "max.musterman@cn-consult.eu"
  },
];
