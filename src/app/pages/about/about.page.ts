import { Component, OnInit } from '@angular/core';
import { PropertyResolverService } from 'src/app/services/property-resolver/property-resolver.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  aboutData: any;
  constructor(private resolverService: PropertyResolverService, private translate: TranslateService) {
    this.aboutData = this.resolverService.getPropertyValue('about');
  }

  ngOnInit() {

  }

}
