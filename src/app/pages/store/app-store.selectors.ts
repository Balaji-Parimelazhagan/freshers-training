import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IappDataStoreState, AppDataStoreStateKeys } from './app-store.state';

export const selectAppDataStore = createFeatureSelector<any, IappDataStoreState>(AppDataStoreStateKeys.store);

export const selectAppData = createSelector(
    selectAppDataStore,
    (store) => store && store[AppDataStoreStateKeys.appData]
);

export const selectTaskData = createSelector(
    selectAppDataStore,
    (store) => store && store[AppDataStoreStateKeys.taskData]
);

export const selectAssessmentData = createSelector(
    selectAppDataStore,
    (store) => store && store[AppDataStoreStateKeys.assessmentData]
);

export const selectDSRData = createSelector(
    selectAppDataStore,
    (store) => store && store[AppDataStoreStateKeys.dsrData]
);
export const selectProjectData = createSelector(
    selectAppDataStore,
    (store) => store && store[AppDataStoreStateKeys.projectData]
);