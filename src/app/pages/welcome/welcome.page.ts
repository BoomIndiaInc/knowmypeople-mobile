import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss']
})
export class WelcomePage implements OnInit {
  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {}

  async finish() {
    await this.storage.set('tutorialComplete', true);
    this.router.navigateByUrl('/login');
  }
}
