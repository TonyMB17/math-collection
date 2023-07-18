import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AritmeticaPage } from './aritmetica.page';

describe('AritmeticaPage', () => {
  let component: AritmeticaPage;
  let fixture: ComponentFixture<AritmeticaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AritmeticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
