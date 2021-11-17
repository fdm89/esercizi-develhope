import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '@app/models/Project';

@Component({
  selector: 'ngprj-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
selectedProject!: Project;
projects: Project[] = [
  {
    id : 1,
    code: 'NHusYJl',
    name: 'Progetto Alpha',
    description: 'Lorem Ipsum dolor sit amet',
    start: new Date(2021, 1, 30),
    end: new Date(2019, 3, 15),
    done: true,
    priority: 'medium',
    tasks: []
  },
  {
    id : 2,
    code: 'SJieYKl',
    name: 'Progetto Beta',
    description: 'Lorem Ipsum dolor sit amet',
    start: new Date(2019, 3, 30),
    end: new Date(2019, 6, 15),
    done: true,
    priority: 'low',
    tasks: []
  },
  {
    id : 3,
    code: 'POjeGBs',
    name: 'Progetto Gamma',
    description: 'Lorem Ipsum dolor sit amet',
    start: new Date(2019, 8, 15),
    done: false,
    priority: 'low',
    tasks: []
  },
];
  constructor() {
  }

  ngOnInit(): void {
  }

  selectProject(project:Project){
    //console.log(project)
    this.selectedProject = project;
  }
  submitProjectForm(project: Project) {
    //console.log("form submit",f);//.value);
    this.projects.push({
      ...project,
      id: this.projects.length,
      code: Math.random().toString(36).replace("0.","").substring(2, 9),
      done: false,
      tasks: []


    });

    }


}





