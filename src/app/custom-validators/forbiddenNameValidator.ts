import { ValidatorFn, AbstractControl } from '@angular/forms';
/* Validadores para los campo del formulario información */
export function forbiddenNameValidator(name: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null =>
    {
        const forbidden = name.test(control.value);
        return forbidden ? {'forbiddenName': { value: control.value } } : null;
    };
}

export function forbiddenApellidoValidator (name: RegExp) : ValidatorFn 
{
    return (control: AbstractControl): {[key : string]: any} | null => 
    {
        const forbiddenApellido = name.test(control.value);
        return forbiddenApellido ? {'apellidoProhibido': {value : control.value}} : null;
    }
}
