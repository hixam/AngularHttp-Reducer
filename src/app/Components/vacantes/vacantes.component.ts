import { Component, OnInit } from '@angular/core';
import {ModelsVacantes} from '../../Models/models.vacantes';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {

  constructor() { }

  vacants = [];
  ngOnInit() {

    this.vacants.push(new ModelsVacantes('Hicham', 'mail@mail.com', '654123654', 'JAVA BE' ));
    this.vacants.push(new ModelsVacantes('Hicham', 'mail@mail.com', '654123654', 'JAVA BE' ));
    this.vacants.push(new ModelsVacantes('Hicham', 'mail@mail.com', '654123654', 'JAVA BE' ));
    this.vacants.push(new ModelsVacantes('Hicham', 'mail@mail.com', '654123654', 'JAVA BE' ));
  }

}
