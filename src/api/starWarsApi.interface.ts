export interface StarWarsPerson {
  id: string
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  url: string
  created: string
  edited: string
}

export interface StarWarsPlanet {
  climate: string
  created: string
  diameter: string
  edited: string
  films: string[]
  gravity: string
  name: string
  orbital_period: string
  population: string
  residents: string[]
  rotation_period: string
  surface_water: string
  terrain: string
  url: string
}

export type GetPeopleApiResponse = {
  count: number
  next: string | null
  previous: string | null
  results: StarWarsPerson[]
}
export type GetPeopleApiArg = {
  page: number
  search: string
}
export type GetPersonApiResponse = StarWarsPerson
export type GetPersonApiArg = {
  id: string
}
export type GetPlanetApiResponse = StarWarsPlanet
export type GetPlanetApiArg = {
  id: string
}
