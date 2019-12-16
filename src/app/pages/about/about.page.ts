import { Component, OnInit } from '@angular/core';
import { PropertyResolverService } from 'src/app/services/property-resolver/property-resolver.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'src/app/interfaces/pages';
import { ComponentUtil } from 'src/app/shared';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {
  aboutData: any;
  pageMenu: Page;
  constructor(
    private resolverService: PropertyResolverService,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private componentUtil: ComponentUtil
  ) {
    const menuId = 'about';
    console.log(menuId);
    if (!!menuId) {
      this.pageMenu = this.componentUtil.getMenuById(menuId);
    }
    this.aboutData = this.resolverService.getPropertyValue('about');
  }

  ngOnInit() {}
}
