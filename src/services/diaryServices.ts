import { DiaryEntry } from '../types'
import diaryData from './diaries.json'
// import diaryData from './diaries' //use of diaries.ts

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>
// const diaries: Array<DiaryEntry> = diaryData

export const getEntries = () => diaries

export const addEntry = () => null