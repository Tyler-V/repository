import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { ScriptComponent } from './content/script/script.component';

// Shared 
import { SharedComponent } from './shared.component';

// Pipes
import { FilterByPipe } from './pipes/filterBy.pipe';
import { RepeatPipe } from './pipes/repeat.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ContentComponent,
    FilterByPipe, RepeatPipe,
    HeaderComponent,
    NavigationComponent,
    ScriptComponent
  ],
  providers: [
    SharedComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }