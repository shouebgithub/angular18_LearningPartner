import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStuffComponent } from './basic-stuff.component';

describe('BasicStuffComponent', () => {
  let component: BasicStuffComponent;
  let fixture: ComponentFixture<BasicStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicStuffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
