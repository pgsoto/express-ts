export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Example: extends
// export interface SpecialDiaryEntry extends DiaryEntry {
//   flightNumber: number
// }

// Example: extends 2
// type SpecialDiaryEntry2 = DiaryEntry & {
//   flightNumber: number
// }
