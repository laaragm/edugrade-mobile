import { Route } from "react-router-dom";
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import Teachers from "./pages/Teachers";
import Disciplines from "./pages/Disciplines";
import Users from "./pages/Users";
import Grades from "./pages/Grades";
import Students from "./pages/Students";

import TeacherIcon from "./assets/teacher-icon.svg";
import BookIcon from "./assets/book-icon.svg";
import UserIcon from "./assets/user-icon.svg";
import GradeIcon from "./assets/grade-icon.svg";
import StudentIcon from "./assets/student-icon.svg";

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/teachers">
                        <Teachers />
                    </Route>
                    <Route exact path="/disciplines">
                        <Disciplines />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/grades">
                        <Grades />
                    </Route>
                    <Route path="/students">
                        <Students />
                    </Route>
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="teachers" href="/teachers">
                        <IonIcon aria-hidden="true" icon={TeacherIcon} />
                    </IonTabButton>
                    <IonTabButton tab="disciplines" href="/disciplines">
                        <IonIcon aria-hidden="true" icon={BookIcon} />
                    </IonTabButton>
                    <IonTabButton tab="users" href="/users">
                        <IonIcon aria-hidden="true" icon={UserIcon} />
                    </IonTabButton>
                    <IonTabButton tab="grades" href="/grades">
                        <IonIcon aria-hidden="true" icon={GradeIcon} />
                    </IonTabButton>
                    <IonTabButton tab="students" href="/students">
                        <IonIcon aria-hidden="true" icon={StudentIcon} />
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
