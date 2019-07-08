import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFromApiComponent } from './products-from-api.component';

describe('ProductsFromApiComponent', () => {
  let component: ProductsFromApiComponent;
  let fixture: ComponentFixture<ProductsFromApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFromApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
