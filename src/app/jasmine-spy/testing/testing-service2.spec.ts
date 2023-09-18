import { FirstDepService } from "../first-dep/first-dep.service";
import { TestingService } from "./testing.service";
import { TestBed } from '@angular/core/testing';

fdescribe('Testing Service Version 2', () => {
    let service: TestingService;
    let firstDep: FirstDepService;

    // let stringValue: string | undefined;

    // const fakeFirstDep = {
    //     returnValue: () => stringValue || 'one'
    // };

    const fakeFirstDep = {
        // returnValue: jasmine.createSpy('returnValue').and.returnValue('two')
        returnValue: jasmine.createSpy('returnValue'),
        initValue: jasmine.createSpy('initValue'),
        initValue2: jasmine.createSpy('initValue2'),
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TestingService, {
                provide: FirstDepService, useValue: fakeFirstDep
            }]
        });
        // stringValue = undefined;
        service = TestBed.inject(TestingService);
        firstDep = TestBed.inject(FirstDepService);
        fakeFirstDep.returnValue.and.returnValue('two')
    });

    it('should return value two', () => {
        // stringValue = 'two';
        const value = service.getValue(1);
        expect(value).toBe('two');
    });

    it('should return value one', () => {
        fakeFirstDep.returnValue.and.returnValue('one')
        const value = service.getValue(0);
        expect(value).toBe('one');
    });

    // it('should return value one', () => {
    //     const value = service.getValue(0);
    //     expect(value).toBe('one');
    // });
})