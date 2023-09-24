import { IAsteroidInfo, IRoot } from '@/types/types'
import * as process from 'process'

const API_KEY = process.env.NEXT_PUBLIC_NOT_SECRET_API_KEY
const START_DATE = new Date().toISOString().split('T')[0]

interface IParams {
  date: string
  id: number
}

export function getNextDayDate(date: string) {
  const nextDay = new Date(date)
  nextDay.setDate(nextDay.getDate() + 1)
  return nextDay.toISOString().split('T')[0]
}

export async function getAsteroids(): Promise<IRoot> {
  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${START_DATE}&api_key=${API_KEY}`,
  ).then(resp => resp.json())
  return res
}

export async function getAsteroidsNextDay(requestDay: string): Promise<IRoot> {
  console.log(requestDay)
  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${requestDay}&end_date=${requestDay}&api_key=${API_KEY}`,
  ).then(resp => resp.json())
  return res
}

export async function getAsteroidById({ date, id }: IParams) {
  const response = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${date}&api_key=${API_KEY}`,
  )
  const data = await response.json()
  const asteroids: IAsteroidInfo[] = data.near_earth_objects[date]
  const asteroid: IAsteroidInfo | undefined = asteroids.find(item => item.id === id.toString())

  if (asteroid) {
    return asteroid
  } else {
    throw new Error('Asteroid not found')
  }
}
