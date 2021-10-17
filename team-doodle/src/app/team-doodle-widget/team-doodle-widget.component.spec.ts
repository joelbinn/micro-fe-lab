import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TeamDoodleWidgetComponent } from './team-doodle-widget.component'

describe('TeamDoodleWidgetComponent', () => {
  let component: TeamDoodleWidgetComponent;
  let fixture: ComponentFixture<TeamDoodleWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDoodleWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDoodleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
