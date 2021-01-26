import { IappDataStoreState, getAppDataInitialState, AppDataStoreStateKeys } from './app-store.state';
import { EAppDataStoreAction, AppDataStoreAction } from './app-store.actions';

export function appDataReducers(state: IappDataStoreState = getAppDataInitialState(), 
                                          action: AppDataStoreAction) {
  switch (action.type) {

    case EAppDataStoreAction.UpdateAppData: {
      return {
        ...state,
        [AppDataStoreStateKeys.appData]: {
          ...state[AppDataStoreStateKeys.appData],
            ...state[AppDataStoreStateKeys.appData][action.key],
              [action.key]: action.value
        },
      };
    }

    case EAppDataStoreAction.UpdateTaskData: {
      return {
        ...state,
        [AppDataStoreStateKeys.taskData]: {
          ...state[AppDataStoreStateKeys.taskData],
            [action.id]: action.task
        },
      };
    }

    case EAppDataStoreAction.UpdateAssessmentData: {
      return {
        ...state,
        [AppDataStoreStateKeys.assessmentData]: {
          ...state[AppDataStoreStateKeys.assessmentData],
            [action.id]: action.assessment
        },
      };
    }

    case EAppDataStoreAction.UpdateDSRData: {
      return {
        ...state,
        [AppDataStoreStateKeys.dsrData]: {
          ...state[AppDataStoreStateKeys.dsrData],
            [action.id]: action.dsr
          },
        };
      }
    case EAppDataStoreAction.UpdateProjectData: {
      return {
        ...state,
        [AppDataStoreStateKeys.projectData]: {
          ...state[AppDataStoreStateKeys.projectData],
            [action.id]: action.project
        },
      };
    }

    default: {
      return state;
    }
  }
}