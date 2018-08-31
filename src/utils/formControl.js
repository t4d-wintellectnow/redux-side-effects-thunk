import { uniqueId } from 'lodash';

export const applyFormControls = component => {

  component.formControlId = uniqueId();

  component.formControlName = (controlName) => {
    return controlName + '-' + component.formControlId;
  }

};