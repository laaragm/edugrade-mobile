import { useEffect, useRef, useState } from "react";
import { Redirect, Route } from "react-router";
import { IonReactRouter } from "@ionic/react-router";
import { CreateAnimation, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";

import { PATHS } from "@/routes";

import Tab1 from "@/pages/teachers";
import Tab2 from "@/pages/disciplines";
import Tab3 from "@/pages/user";
import Tab4 from "@/pages/students";
import Tab5 from "@/pages/grades";

import TeacherIcon from "@/assets/teacher-icon.svg";
import BookIcon from "@/assets/book-icon.svg";
import UserIcon from "@/assets/user-icon.svg";
import GradeIcon from "@/assets/grade-icon.svg";
import StudentIcon from "@/assets/student-icon.svg";

type Tab = {
    label: string;
    url: string;
    icon: string;
    color: string;
    backgroundColor: string;
    component: React.FC;
};

export function SwitchTabBar() {
    const [activeTab, setActiveTab] = useState("tab0");
    const switchRefs = useRef<any[]>([]);
    const color = "#ffffff";
    const backgroundColor = "#4189ED";

    const tabs: Tab[] = [
        {
            label: PATHS.teachers.name,
            url: PATHS.teachers.route,
            icon: TeacherIcon,
            color: color,
            backgroundColor: backgroundColor,
            component: Tab1,
        },
        {
            label: PATHS.disciplines.route,
            url: PATHS.disciplines.route,
            icon: BookIcon,
            color: color,
            backgroundColor: backgroundColor,
            component: Tab2,
        },
        {
            label: PATHS.user.route,
            url: PATHS.user.route,
            icon: UserIcon,
            color: color,
            backgroundColor: backgroundColor,
            component: Tab3,
        },
        {
            label: PATHS.students.route,
            url: PATHS.students.route,
            icon: StudentIcon,
            color: color,
            backgroundColor: backgroundColor,
            component: Tab4,
        },
        {
            label: PATHS.grades.route,
            url: PATHS.grades.route,
            icon: GradeIcon,
            color: color,
            backgroundColor: backgroundColor,
            component: Tab5,
        },
    ];

    const revealAnimation = {
        property: "transform",
        fromValue: "translateX(-30px)",
        toValue: "translateX(0px)",
    };

    const switchAnimation = {
        duration: 200,
        direction: "normal",
        iterations: "1",
        fromTo: [revealAnimation],
        easing: "ease-in-out",
    };

    const getTabButtonStyle = (tab: Tab) => {
        const tabStyle = {
            backgroundColor: tab.backgroundColor,
            color: tab.color,
            transition: "0.5s all ease-in-out",
        };

        return tabStyle;
    };

    useEffect(() => {
        // @ts-ignore
        const tabIndex = +activeTab?.match(/\d+/)[0];
        switchRefs.current[tabIndex].animation.play();
    }, [activeTab]);

    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    {tabs.map((tab, index) => {
                        return (
                            <Route key={index} exact path={tab.url}>
                                <tab.component />
                            </Route>
                        );
                    })}

                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom" onIonTabsDidChange={(e) => setActiveTab(e.detail.tab)}>
                    {tabs.map((tab, index) => {
                        const tabStyle = getTabButtonStyle(tab);
                        const isActive = activeTab === `tab${index}`;

                        return (
                            <IonTabButton
                                key={index}
                                style={isActive ? tabStyle : {}}
                                tab={`tab${index}`}
                                href={tab.url}>
                                <IonIcon icon={tab.icon} />

                                {isActive && (
                                    // @ts-ignore
                                    <CreateAnimation
                                        ref={(ref) => (switchRefs.current[index] = ref)}
                                        {...switchAnimation}>
                                        <IonLabel>{tab.label}</IonLabel>
                                    </CreateAnimation>
                                )}
                            </IonTabButton>
                        );
                    })}
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
}
