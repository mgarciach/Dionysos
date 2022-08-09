import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubPage } from 'src/app/model/subPage';
import { LoginService } from 'src/app/service/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {

  imgUrl = environment.imgUrl + `/weblink4.jpg`;
  idCustomer!: number;
  subscription: Subscription;
  subPageName: string = "Home";
  subPageId: number = null!;

  @Output() cleanFiltersEvent = new EventEmitter();

  @Input() pageName!: string;
  @Input() subPages!: SubPage[];
  @Input() isCustomerPage!: boolean;
  @Input() content!: TemplateRef<any>;
  @Input() defaultSelectedId!: number;

  constructor(private loginService: LoginService) {
    this.subscription = this.loginService.newIdCustomer$.subscribe((idCustomer) => {
      if (typeof idCustomer === 'number') {
        this.idCustomer = idCustomer;
      }
    });
  }

  changeSubPage(subPage: SubPage, cleanFilter?: boolean) {
    if (cleanFilter) this.cleanFiltersEvent.emit(null);
    this.subPageName = subPage.name;
    this.subPageId = subPage.id!;
  }

  ngOnInit(): void {
    this.subPageId = this.defaultSelectedId || 1;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
