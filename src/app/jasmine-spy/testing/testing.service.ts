import { Injectable } from '@angular/core';
import { FirstDepService } from '../first-dep/first-dep.service';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

    constructor(
        private readonly firstDep: FirstDepService
    ) {
        this.firstDep.initValue();
        this.firstDep.initValue2('');
    }

    public getValue(index: number): string {
        return this.firstDep.returnValue(index);
    }

    public getIndex(): number {
        return 2;
    }

    public sayHi(text: string): void {
        this.firstDep.initValue2(text);
    }
}
