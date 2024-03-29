import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: LocationValidator,
            multi: true
        }
    ]
})
export class LocationValidator implements Validator {
    constructor() { }

    validate(formGroup: FormGroup): {[key: string]: any} {
        const addressControl = formGroup.controls['address'];
        const cityControl = formGroup.controls['city'];
        const countryControl = formGroup.controls['country'];
        const onlineUrlcontrol = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value &&
            cityControl && cityControl.value &&
            countryControl && countryControl.value) ||
            (onlineUrlcontrol && onlineUrlcontrol.value))
            return null;
        else return { validateLocation: false };
    }
}
