import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '5 INF B 2021/2022';

  studentList = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Giada Valinotto', hobby: 'Volley', gender: 'F', isPro: false },
    { name: 'Michele Ghisolfi', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Luca Pelissero', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Martina Velardi', hobby: 'Volley', gender: 'F', isPro: false },
    { name: 'Federico Mameli', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Lorenzo Cravero', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Samuele Detoffol', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Marta Baudracco', hobby: 'Karate', gender: 'F', isPro: false },
    { name: 'Paolo Racca', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Ivan Angjelovski', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Bianca Teleman', hobby: 'Volley', gender: 'F', isPro: false },
  ];
}
