import { Routes } from '@angular/router';
import path from 'path';
import { PathLocationStrategy } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { ParamsComponent } from './params/params.component';

export const routes: Routes = [
    
    {path:'noteapp',component:NoteComponent},
    {path:'params',component:ParamsComponent},    
        
        
];
