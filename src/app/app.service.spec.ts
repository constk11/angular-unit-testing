import { AppService } from "./app.service"
import { TestBed } from '@angular/core/testing';
import { CheckValueService } from "./check-value.service";

describe('app service', () => {
    let service: AppService;
    const fakeCheckValueService = { check: () => true }

    // beforeEach(() => {
    //     service = new AppService(fakeCheckValueService as CheckValueService);    
    // })

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AppService,
                { provide: CheckValueService, useValue: fakeCheckValueService }
            ]
        });

        service = TestBed.inject(AppService);
    })

    it('init service', () => {
        expect(service).toBeTruthy();
    });

    it('adding two numbers', () => {
        const sum = service.sum(1, 2);

        expect(sum).toBe(3);
    });

    it('return undefined', () => {
        const sum = service.sum(2);
        expect(sum).toBeUndefined();
    });

    it('check', () => {
       const check = service.check();
       expect(check).toBeTruthy();
    });

    // xit('return undefined', () => {
    //     const sum = service.sum(2);
    //     expect(sum).toBeUndefined();
    // });

    // fit('return undefined', () => {
    //     const sum = service.sum(2);
    //     expect(sum).toBeUndefined();
    // });
})