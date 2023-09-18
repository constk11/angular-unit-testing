import { FirstDepService } from "../first-dep/first-dep.service";
import { TestingService } from "./testing.service";
import { TestBed } from '@angular/core/testing';

describe('Testing Service', () => {
    let service: TestingService;
    let firstDep: FirstDepService;
    let firstDepReturnValueSpy: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TestingService]
        });
        service = TestBed.inject(TestingService);
        firstDep = TestBed.inject(FirstDepService);
        firstDepReturnValueSpy = spyOn(firstDep, 'returnValue').and.returnValue('two');
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should return value (original method)', () => {
        const value = service.getValue(1);
        expect(value).toBe('two');
    });

    it('should return value (spyOn callThrough)', () => {
        firstDepReturnValueSpy.and.callThrough();
        const value = service.getValue(1);
        expect(value).toBe('two');
    });

    it('should return value (spyOn returnValue)', () => {
        const value = service.getValue(1);
        expect(value).toBe('two');
    });

    it('should return value (spyOn callFake)', () => {
        firstDepReturnValueSpy.and.callFake(() => 'three');
        const value = service.getValue(1);
        expect(value).toBe('three');
    });

    it('should return', () => {
        firstDepReturnValueSpy.and.returnValue('one');
        spyOn(service, 'getIndex').and.returnValue(0);
        const value = service.getValue(service.getIndex());
        expect(value).toBe('one');
    })
})