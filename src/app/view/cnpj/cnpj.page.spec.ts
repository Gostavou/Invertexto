import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CnpjPage } from './cnpj.page';

describe('CnpjPage', () => {
  let component: CnpjPage;
  let fixture: ComponentFixture<CnpjPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CnpjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
