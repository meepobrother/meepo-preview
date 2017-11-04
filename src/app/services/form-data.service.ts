import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Injectable()
export class FormDataService {
    form: FormGroup;
    constructor(
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({});
    }

    getFormData() {
        return this.form.value;
    }

    addStringField(name: string) {
        this.form.addControl(name, this.fb.control(''));
    }

    addNumberField(name: string) {
        this.form.addControl(name, this.fb.control(0));
    }

    addObjectField(name: string) {
        this.form.addControl(name, this.fb.control({}));
    }

    addArrayField(name: string) {
        this.form.addControl(name, this.fb.array([]));
    }
}

