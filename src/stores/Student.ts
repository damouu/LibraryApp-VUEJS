import {inject, reactive, ref} from "vue";
import {defineStore} from "pinia";
import {Student} from "@/types/Student";

export const useStudentStore = defineStore('student', () => {
    const axios = inject('axios');
    const sizeNumber: Number = ref(10);
    const studentList: Array<Student> = reactive<Student[]>([]);

    async function getStudents(page: Number): void {
        try {
            await axios.get('/student' + '?page=' + page + '&size=' + sizeNumber.value).then(response => {
                response.data.forEach(student => {
                    let cardUuid;
                    if (student["studentIdCard"] != null) {
                        cardUuid = student.studentIdCard.uuid;
                    } else {
                        cardUuid = null;
                    }
                    studentList.push(new Student(student.uuid, student.name, student.email, student.dob, cardUuid));
                });
            })
        } catch (error) {
            return error;
        }
    }

    return {studentList, getStudents}
})