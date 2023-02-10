import { RouteIdentifiers } from "../../app/enums/route-paths-identifier";


export const ROUTE_URLS = {
    HOME: "/",
    LOGIN: `/${RouteIdentifiers.AUTH}/${RouteIdentifiers.LOGIN}`,
    DASHBOARD: `/${RouteIdentifiers.DASHBOARD}`,
    PROFILE: `/${RouteIdentifiers.PROFILE}`,
    BASICINFO: `/${RouteIdentifiers.BASICINFO}`,
    CHANGE_PASSWORD:`/${RouteIdentifiers.CHANGE_PASSWORD}`,
    SHIFT: `/${RouteIdentifiers.SHIFT}`,
    APPRAISAL: `/${RouteIdentifiers.APPRAISAL}`,
    QUALIFICATION: `/${RouteIdentifiers.QUALIFICATION}`,
    PROFILEPICTURE: `/${RouteIdentifiers.PROFILEPICTURE}`,



    // CONTENT_MANAGEMENT: `/${RouteIdentifiers.CONTENT_MANAGEMENT}`,
    // MANAGE_EXERCISE: `/${RouteIdentifiers.MANAGE_EXERCISE}/${RouteIdentifiers.LIST}`,
    // MANAGE_EXERCISE_DETAIL: `/${RouteIdentifiers.MANAGE_EXERCISE}/${RouteIdentifiers.DETAIL}`,
    // ADD_EXERCISE: `/${RouteIdentifiers.MANAGE_EXERCISE}/${RouteIdentifiers.ADD}`,
    // ADD_COHORT_EXERCISE: `/${RouteIdentifiers.MANAGE_EXERCISE}/${RouteIdentifiers.ADD}/${RouteIdentifiers.COHORT_EXERCISE}`,
    // ADD_SESSIONS: `/${RouteIdentifiers.MANAGE_EXERCISE}/${RouteIdentifiers.ADD_SESSIONS}`,
    // HYPERLINK: `/${RouteIdentifiers.HYPERLINK}`,
    // QUOTATION: `/${RouteIdentifiers.QUOTATION}`,
    // COHORT: `/${RouteIdentifiers.COHORT}/${RouteIdentifiers.LIST}`,
    // COHORT_DETAIL: `/${RouteIdentifiers.COHORT}/${RouteIdentifiers.DETAIL}/`

}
