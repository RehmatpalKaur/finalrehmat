import { Component, OnInit } from '@angular/core';
import { CollegeDataService } from '../college-data.service'; // Import CollegeDataService
import { College } from '../college'; // Import College interface or class

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  college: College = { // Initialize with default values or leave it empty
    name: 'Sheridan College',
    type: 'public',
    established: 1967,
    students: {
      fullTime: 23000,
      partTime: 35000
    },
    "image": "sheridan_davis.jpg",
    "location": "Ontario, Canada"
  };

  constructor(private collegeDataService: CollegeDataService) {}

  ngOnInit(): void {
    this.collegeDataService.getCollegeData().subscribe(
      (data: College) => {
        this.college = data;
      },
      error => {
        console.error('Error fetching college data:', error);
      }
    );
  }
}
