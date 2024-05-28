// Rules
// If number < 38, return same number
// If not ->
//    if (((number // 5 ) + 1) * 5) - number < 3
//      return number
//    else
//    return ((number // 5) + 1)

const MINIMAL_GRADE_VALUE = 38;
const MULTIPLE_FIVE = 5;
const MINIMAL_SUBTRACT_VALUE = 3;


function gradingStudents(grades: number[]): number[] {
  console.log({ grades })
  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    const nextGradeMultipleOrFive = ((grade / MULTIPLE_FIVE >> 0) + 1) * MULTIPLE_FIVE;
    const gradeMinimalCondition = (grade >= MINIMAL_GRADE_VALUE);
    const gradeMultipleCondition = (nextGradeMultipleOrFive - grade < MINIMAL_SUBTRACT_VALUE);
    if (gradeMinimalCondition && gradeMultipleCondition) {
      grades[i] = nextGradeMultipleOrFive;
    }
  }
  return grades;
}


console.log({ grades: gradingStudents([73, 67, 38, 33]) });