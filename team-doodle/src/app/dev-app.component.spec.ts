import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { DevAppComponent } from './dev-app.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DevAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DevAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'team-doodle'`, () => {
    const fixture = TestBed.createComponent(DevAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('team-doodle');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DevAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('team-doodle app is running!');
  });
});
