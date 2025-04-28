import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerCommentComponent } from './customer-comment/customer-comment.component';
import { ICustomerComment } from './customer-comment-list';

@Component({
  selector: 'app-customer-comment-list',
  standalone: true,
  imports: [CommonModule, CustomerCommentComponent],
  templateUrl: './customer-comment-list.component.html',
  styleUrl: './customer-comment-list.component.scss'
})
export class CustomerCommentListComponent {

  readonly comments: ICustomerComment[] = [
    {
      name: 'Leslie Alexander',
      position: 'Model',
      imageUrl: 'assets/Images/avatar.jpg',
      stars: 5,
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
    },
    {
      name: 'Jacob Jones',
      position: 'Co-Founder',
      imageUrl: 'assets/Images/avatar.jpg',
      stars: 5,
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
    },
    {
      name: 'Jenny Wilson',
      position: 'Fashion Designer',
      imageUrl: 'assets/Images/avatar.jpg',
      stars: 5,
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
    }
  ];

}
