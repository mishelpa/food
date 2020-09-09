import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-card-cards',
  templateUrl: './card-cards.component.html',
  styleUrls: ['./card-cards.component.scss']
})
export class CardCardsComponent implements OnInit {
  public cards: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getcardsUser();
  }

  getcardsUser() {
    const email = JSON.parse(localStorage.getItem('email'));
    this.userService.getCard().subscribe((response) => {
      this.cards = response['cards'].filter((ele) => ele.emailUser === email);
    });
  }


}
