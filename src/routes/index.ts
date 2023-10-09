import AddTeacher from "@/pages/add-teacher";
import Disciplines from "@/pages/disciplines";
import Grades from "@/pages/grades";
import Students from "@/pages/students";
import Teachers from "@/pages/teachers";
import User from "@/pages/user";
import ViewTeacher from "@/pages/view-teacher";

export const PATHS = {
    teachers: {
        name: "Professores",
        route: "/teachers",
        component: Teachers,
    },
    viewTeacher: {
        name: "Professor",
        route: "/teachers/:id",
        component: ViewTeacher,
    },
    addTeacher: {
        name: "Professor",
        route: "/teachers/add",
        component: AddTeacher,
    },
    disciplines: {
        name: "Disciplinas",
        route: "/disciplines",
        component: Disciplines,
    },
    user: {
        name: "Minha conta",
        route: "/account",
        component: User,
    },
    students: {
        name: "Estudantes",
        route: "/students",
        component: Students,
    },
    grades: {
        name: "Notas",
        route: "/grades",
        component: Grades,
    },
};
