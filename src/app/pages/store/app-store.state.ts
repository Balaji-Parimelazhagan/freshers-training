export enum AppDataStoreStateKeys {
    store = 'appDataStore',
    appData = 'appData',
    taskData = 'taskData',
    assessmentData = 'assessmentData',
    dsrData = 'dsrData',
    projectData = "projects"
}

export interface IappDataStoreState {
    appData: { [key: string]: object };
    taskData: {[id: number]: object};
    assessmentData: {[id: number]: object};
    dsrData: {[id: number]: object};
    projectData: {[id: number]: object}
}

export const appDataInitialState: IappDataStoreState = {
    appData: {},
    taskData: {},
    assessmentData: {},
    dsrData: {},
    projectData: {}
};

export function getAppDataInitialState(): IappDataStoreState { return appDataInitialState; }
