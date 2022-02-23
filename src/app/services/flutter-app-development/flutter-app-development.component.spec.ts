import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterAppDevelopmentComponent } from './flutter-app-development.component';

describe('FlutterAppDevelopmentComponent', () => {
  let component: FlutterAppDevelopmentComponent;
  let fixture: ComponentFixture<FlutterAppDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlutterAppDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlutterAppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
