import { Component, Input } from '@angular/core';
import { ICustomerComment } from '../customer-comment-list';

@Component({
  selector: 'app-customer-comment',
  standalone: true,
  imports: [],
  templateUrl: './customer-comment.component.html',
  styleUrl: './customer-comment.component.scss'
})
export class CustomerCommentComponent {

  customerComment!: ICustomerComment;
  stars: number[] = [];

  @Input({required: true}) set comment (val: ICustomerComment) {
    if (val) {
      this.customerComment = val;
      this.stars.length = val.stars;
    }
  }

}
