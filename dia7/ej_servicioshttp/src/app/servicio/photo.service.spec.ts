import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ],
    });
    service = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
