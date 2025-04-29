import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-note',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  constructor() { }
  Theme=''
  Topic=''
  notes:any[]=[];

  ngOnInit(){
    const getNotes = JSON.parse(localStorage.getItem('usernotes') || '[]')
    this.notes = getNotes
  }
  
  public createNote(){
    let note ={
      id:Math.random()*1000,
      theme:this.Theme,
      topic: this.Topic,
      date: new Date().toLocaleDateString()
    };
    console.log(note)
    this.notes.push(note);
    localStorage.setItem('usernotes',JSON.stringify(this.notes))
    this.Theme=
    this.Topic=''
  }
  
   public edit(){
      
   }

   public delete(){

   }
}
