import { Action } from '@ngrx/store';


export enum EAppDataStoreAction {
  UpdateAppData = '[AppDataAction] Update App Data',
  UpdateTaskData = '[AppDataAction] Update Task Data',
  UpdateAssessmentData = '[AppDataAction] Update Assessment Data',
  UpdateDSRData = '[AppDataAction] Update Dsr Data',
  UpdateProjectData = '[AppDataAction] Update Project Data'
}

export class UpdateAppData implements Action {
    public readonly type = EAppDataStoreAction.UpdateAppData;
  
    constructor(public key: string, public value: object) {}
}

export class UpdateTaskData implements Action {
  public readonly type = EAppDataStoreAction.UpdateTaskData;

  constructor(public id: number, public task: object) {}
}
export class UpdateProjectData implements Action {
  public readonly type = EAppDataStoreAction.UpdateProjectData;

  constructor(public id: number, public project: object) {}
}

export class UpdateAssessmentData implements Action {
  public readonly type = EAppDataStoreAction.UpdateAssessmentData;

  constructor(public id: number, public assessment: object) {}
}

export class UpdateDSRData implements Action {
  public readonly type = EAppDataStoreAction.UpdateDSRData;

  constructor(public id: number, public dsr: object) {}
}

export type AppDataStoreAction = UpdateAppData | UpdateTaskData | UpdateAssessmentData | UpdateDSRData | UpdateProjectData;
