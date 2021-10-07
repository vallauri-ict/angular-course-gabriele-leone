import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentList = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M' },
    { name: 'Giada Valinotto', hobby: 'Volley', gender: 'F' },
    { name: 'Michele Ghisolfi', hobby: 'Karate', gender: 'M' },
    { name: 'Luca Pelissero', hobby: 'Paddle', gender: 'M' },
    { name: 'Martina Velardi', hobby: 'Volley', gender: 'F' },
    { name: 'Federico Mameli', hobby: 'Paddle', gender: 'M' },
    { name: 'Lorenzo Cravero', hobby: 'Paddle', gender: 'M' },
    { name: 'Samuele Detoffol', hobby: 'Paddle', gender: 'M' },
    { name: 'Marta Baudracco', hobby: 'Karate', gender: 'F' },
    { name: 'Racca Paolo', hobby: 'Paddle', gender: 'M' },
    { name: 'Ivan Angjelovski', hobby: 'Karate', gender: 'M' },
    { name: 'Bianca Teleman', hobby: 'Volley', gender: 'F' },
  ];
  student:any;
  
  constructor() {
   this.randomStudent()
  }
  private randomStudent(){
    let num = Math.floor(Math.random() * this.studentList.length);
    this.student = this.studentList[num];
  }
  ngOnInit(): void {}

  onStudentClick(){
  this.randomStudent()
  }
}

