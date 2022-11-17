import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCatalogueComponent } from './comp-catalogue.component';

describe('CompCatalogueComponent', () => {
  let component: CompCatalogueComponent;
  let fixture: ComponentFixture<CompCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
