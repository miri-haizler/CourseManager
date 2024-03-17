export enum LearningType{
  fruntal,
  zum
}
export class Course{
  courseId?:number
  courseName?:string
  categoryId?:number
  countOfLessons?:number
  syllabusOfCourse?: string[]
  startCourse?:Date
  learning?:LearningType
  lecturerId?:number
  image?:string
  learningType: any
}