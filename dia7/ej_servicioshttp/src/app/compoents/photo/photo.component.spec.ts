import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { PhotoComponent } from './photo.component';
import { PhotoService } from 'src/app/servicio/photo.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;
  let photoService: PhotoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoComponent ],
      imports: [ HttpClientTestingModule ,RouterTestingModule],
      providers: [PhotoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Borrar foto', () => {
   

    let hola = component.deletePhoto(1);
    expect(component).toBeTruthy();


  });
});
