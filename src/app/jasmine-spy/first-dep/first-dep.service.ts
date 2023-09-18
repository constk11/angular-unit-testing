import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstDepService {

    private defaultValue = '';

    constructor() { }

    public get defaultString(): string {
        return this.defaultValue;
    }

    public returnValue(index: number): string {
        const values = ['one', 'two', 'three'];
        return values[index];
    }

    public initValue(): void {
        this.defaultValue = 'one';
    }

    public initValue2(text: string): void {
        alert(text)
        // this.defaultValue = 'one';
    }
}
