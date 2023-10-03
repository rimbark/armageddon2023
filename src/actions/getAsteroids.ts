import { IAsteroidInfo, IRoot } from '@/types/types'
import process from 'process'

const START_DATE = new Date().toISOString().split('T')[0]

export async function getAsteroids(): Promise<IRoot> {
  try {
    const res = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${START_DATE}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    ).then(resp => resp.json())
    return res
  } catch (error) {
    console.error(error)
    throw new Error('Failed to get asteroids')
  }
}

export function getNextDayDate(date: string) {
  const nextDay = new Date(date)
  nextDay.setDate(nextDay.getDate() + 1)
  return nextDay.toISOString().split('T')[0]
}

export async function getAsteroidsNextDay(requestDay: string): Promise<IRoot> {
  try {
    const res = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${requestDay}&end_date=${requestDay}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    ).then(resp => resp.json())
    return res
  } catch (error) {
    console.error(error)
    throw new Error('Failed to get asteroids')
  }
}

export function getAsteroidById(id: string) {
  try {
    return fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    )
      .then(response => response.json())
      .then((data: IAsteroidInfo) => {
        return data ? data : null
      })
  } catch (error) {
    console.log(error)
    return null
  }
}
