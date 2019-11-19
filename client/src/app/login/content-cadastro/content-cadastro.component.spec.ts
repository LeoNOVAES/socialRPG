import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCadastroComponent } from './content-cadastro.component';

describe('ContentCadastroComponent', () => {
  let component: ContentCadastroComponent;
  let fixture: ComponentFixture<ContentCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
