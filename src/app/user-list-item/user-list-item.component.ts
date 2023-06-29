import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class UserListItemComponent {
  @Input()
  user!: User;
}
