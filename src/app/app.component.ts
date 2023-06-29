import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './view/user-list/user-list.component';
import { AppUsecase } from './app.usecase';

@Component({
  selector: 'my-app',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, UserListComponent],
  providers: [AppUsecase],
})
export class AppComponent implements OnInit {
  private readonly usecase = inject(AppUsecase);

  readonly state$ = this.usecase.state$;

  ngOnInit() {
    this.usecase.initialize();
  }
}
