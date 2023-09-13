import { Injectable } from '@angular/core';
import { CheckValueService } from './check-value.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    constructor(
        private readonly checkValue: CheckValueService
    ) { }

    public sum(num1: number, num2?: number): number | undefined {
        if (!num2) {
            return undefined;
        }

        return num1 + num2;
    }

    public check(): boolean {
        return this.checkValue.check();
    }
}
 