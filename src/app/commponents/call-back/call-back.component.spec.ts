import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallBackComponent } from './call-back.component';

describe('CallBackComponent', () => {
  let component: CallBackComponent;
  let fixture: ComponentFixture<CallBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
