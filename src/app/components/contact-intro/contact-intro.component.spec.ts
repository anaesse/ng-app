import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIntroComponent } from './contact-intro.component';

describe('ContactIntroComponent', () => {
  let component: ContactIntroComponent;
  let fixture: ComponentFixture<ContactIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
