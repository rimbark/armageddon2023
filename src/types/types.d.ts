export interface IRoot {
  links: ILinks
  element_count: number
  near_earth_objects: INearEarthObjects
}

export interface ILinks {
  next: string
  previous?: string
  self?: string
}

export interface INearEarthObjects {
  [key: string]: IAsteroidInfo[]
}

export interface IAsteroidInfo {
  links: ILinks
  id: string
  neo_reference_id: string
  name: string
  nasa_jpl_url: string
  absolute_magnitude_h: number
  estimated_diameter: IEstimatedDiameter
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: ICloseApproachDaum[]
  is_sentry_object: boolean
}

export interface IEstimatedDiameter {
  kilometers: ISize
  meters: ISize
  miles: ISize
  feet: ISize
}

export interface ISize {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export interface ICloseApproachDaum {
  close_approach_date: string
  close_approach_date_full: string
  epoch_date_close_approach: number
  relative_velocity: IRelativeVelocity
  miss_distance: IMissDistance
  orbiting_body: string
}

export interface IRelativeVelocity {
  kilometers_per_second: string
  kilometers_per_hour: string
  miles_per_hour: string
}

export interface IMissDistance {
  astronomical: string
  lunar: string
  kilometers: string
  miles: string
}
