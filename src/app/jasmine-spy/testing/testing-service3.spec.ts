import { FirstDepService } from "../first-dep/first-dep.service";
import { TestingService } from "./testing.service";
import { TestBed } from '@angular/core/testing';

fdescribe('Testing Service Version 3', () => {
    let service: TestingService;
    let firstDep: FirstDepService;

    const fakeFirstDep = jasmine.createSpyObj('FirstDepService', ['initValue', 'initValue2', 'returnValue']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TestingService, {
                provide: FirstDepService, useValue: fakeFirstDep
            }]
        });
        // stringValue = undefined;
        service = TestBed.inject(TestingService);
        firstDep = TestBed.inject(FirstDepService);
        fakeFirstDep.returnValue.and.returnValue('two');
        fakeFirstDep.initValue2.calls.reset();
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

    it('sayHi() should call initValue2()', () => {
       service.sayHi('some text'); 
       expect(fakeFirstDep.initValue2).toHaveBeenCalled();
       expect(fakeFirstDep.initValue2).toHaveBeenCalledTimes(1);
       expect(fakeFirstDep.initValue2).toHaveBeenCalledWith('some text');
    });
})