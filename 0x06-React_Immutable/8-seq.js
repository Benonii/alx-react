import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const gradesSeq = Seq(grades);
  gradesSeq
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));

  console.log(gradesSeq.toJS());
}
