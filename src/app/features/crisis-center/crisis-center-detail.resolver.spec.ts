import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { crisisCenterDetailResolver } from './crisis-center-detail.resolver';

describe('crisisCenterDetailResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => crisisCenterDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
