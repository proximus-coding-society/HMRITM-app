export class StudentSignupModel {
    name: string;
    email: string;
    password?: string;
    contact_no: number;
    roll_no?: string;
    enrollment_no?: string;
    class: string;
};

export class Teacher {
    name: string;
    email: string;
    subjects: number[];
}