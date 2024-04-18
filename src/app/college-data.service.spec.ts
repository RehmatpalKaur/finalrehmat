import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CollegeDataService } from './college-data.service';

describe('CollegeDataService', () => {
  let service: CollegeDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CollegeDataService]
    });
    service = TestBed.inject(CollegeDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve college data via GET request', () => {
    const mockCollege = {
      name: 'Sheridan College',
      type: 'public',
      established: 1967,
      students: {
        fullTime: 23000,
        partTime: 35000
      },
      image: 'sheridan_davis.jpg',
      location: 'Ontario, Canada'
    };

    service.getCollegeData().subscribe(college => {
      expect(college).toEqual(mockCollege);
    });

    const request = httpMock.expectOne(service['dataUrl']);
    expect(request.request.method).toBe('GET');
    request.flush(mockCollege);
  });
});
//final
