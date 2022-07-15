export type People = Array<Person>

export interface Person {
  id: number,
  firstName: string,
  lastName: string,
  street: string,
  city: string,
  state: string,
  zip: string,
}

// export interface Hero {
//   id: number,
//   name: string
// }

// export interface Heroes extends Array<Hero> {}
