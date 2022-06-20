import { DiaryEntry } from '../types'
import diaryData from './diaries.json'
// import diaryData from './diaries' // use of diaries.ts

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
// const diaries: DiaryEntry[] = diaryData

export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
