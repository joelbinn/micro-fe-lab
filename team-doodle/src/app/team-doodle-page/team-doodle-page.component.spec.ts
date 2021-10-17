import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TeamDoodlePageComponent } from './team-doodle-page.component'

describe('TeamDoodlePageComponent', () => {
  let component: TeamDoodlePageComponent;
  let fixture: ComponentFixture<TeamDoodlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDoodlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDoodlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
