'use client';

import useStudents from '@/hooks/useStudents';
import styles from './Students.module.scss';
import StudentInterface from '@/types/StudentInterface';
import Student from './Student/Student';

const Students = (): React.ReactElement => {
  const { students,  deleteStudentMutate } = useStudents();

  const onDeleteHandler = (studentId: number) => {
    console.log('del student', studentId)
    deleteStudentMutate(studentId);
  }

  return (
    <div className={styles.Students}>
      {students.map((student: StudentInterface) => (
        <Student
          key={student.id}
          student={student}
          onDelete={onDeleteHandler}
        />
      ))}
    </div>
  );
};

export default Students


