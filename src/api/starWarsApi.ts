import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getIdFromUrl } from './api.utils'
import {
  GetPeopleApiArg,
  GetPeopleApiResponse,
  GetPersonApiArg,
  GetPersonApiResponse,
  GetPlanetApiArg,
  GetPlanetApiResponse,
} from './starWarsApi.interface'

export const peopleApi = createApi({
  reducerPath: 'swapi/people',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
  endpoints: builder => ({
    getPeople: builder.query<GetPeopleApiResponse, GetPeopleApiArg>({
      query: ({ page, search }) => `/people?page=${page}&search=${search}`,
      transformResponse: (data: GetPeopleApiResponse) => {
        const results = data.results.map(person => ({ ...person, id: getIdFromUrl(person.url) }))

        return { ...data, results }
      },
    }),
    getPerson: builder.query<GetPersonApiResponse, GetPersonApiArg>({
      query: ({ id }) => `/people/${id}`,
    }),
    getPlanet: builder.query<GetPlanetApiResponse, GetPlanetApiArg>({
      query: ({ id }) => `/planets/${id}`,
    }),
  }),
})

export const { useGetPeopleQuery, useGetPersonQuery, useGetPlanetQuery } = peopleApi
