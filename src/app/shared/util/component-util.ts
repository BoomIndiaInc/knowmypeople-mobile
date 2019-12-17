import { Injectable } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AuthServerProvider } from 'src/app/services/auth/auth-jwt.service';
import { AccountService } from 'src/app/services/auth/account.service';
import { FormGroup } from '@angular/forms';
import { Page } from 'src/app/interfaces/pages';
import { PropertyResolverService } from 'src/app/services/property-resolver/property-resolver.service';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { SyncDataService } from 'src/app/services/kmp/sync-data.service';

export const SLIDE_FADE_OPTIONS = {
  on: {
    beforeInit() {
      const swiper = this;
      swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      swiper.params = Object.assign(swiper.params, overwriteParams);
      swiper.params = Object.assign(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      const { slides } = swiper;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = swiper.slides.eq(i);
        const offset$$1 = $slideEl[0].swiperSlideOffset;
        let tx = -offset$$1;
        if (!swiper.params.virtualTranslate) {
          tx -= swiper.translate;
        }
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity
          })
          .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
      }
    },
    setTransition(duration) {
      const swiper = this;
      const { slides, $wrapperEl } = swiper;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        slides.transitionEnd(() => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }
  }
};

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
@Injectable({
  providedIn: 'root'
})
export class ComponentUtil {
  loading: any;
  constructor(
    private loadingCtrl: LoadingController,
    public toastController: ToastController,
    private navCtrl: NavController,
    private authService: AuthServerProvider,
    private accountService: AccountService,
    private resolveService: PropertyResolverService,
    private translateService: TranslateService,
    public alertController: AlertController,
    public syncDataService: SyncDataService
  ) {}

  showLoading(completeCallBack, message?, dismissCallBack?) {
    if (this.loading) return;
    const translatedMessage = (!!message) ? this.translateService.instant(message) : this.translateService.instant('PLEASE_WAIT');
    this.loadingCtrl
      .create({
        message: translatedMessage
      })
      .then(loading => {
        this.loading = loading;
        this.loading.present();
        if(completeCallBack) return completeCallBack();
        this.loading.onDidDismiss().then(dis => {
          if(dismissCallBack) return dismissCallBack();
        });
      });
  }

  hideLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

  async showToast(message, options?, isTranslated?:boolean) {
    const toast = await this.toastController.create({
      message: (isTranslated)? message : this.translateService.instant(message),
      duration: options && options.duration ? options.duration : 3000,
      position: options && options.position ? options.position : 'top',
      cssClass: options && options.cssClass ? options.cssClass : 'toast',
      showCloseButton: options && options.showCloseButton ? options.showCloseButton : true,
      closeButtonText: options && options.closeButtonText ? options.closeButtonText : 'OK'
      // dismissOnPageChange: options && options.dismissOnPageChange ? options.dismissOnPageChange : false
      // color:  (options && options.color) ? options.color : 'primary'
    });
    toast.present();
  }

  userLogout() {
    this.authService.logout().subscribe(
      next => {},
      error => {},
      () => {
        this.accountService.authenticate(null);
        this.syncDataService.stop();
        this.navCtrl.navigateRoot('/');
      }
    );
  }

  getMenuById(menuId: string ): Page {
    const menus:Page[]  = this.resolveService.getPropertyValue('menus');
    const filteredMenu: Page[]  = menus.filter((menu :Page) => menu.id === menuId);
    return (filteredMenu && filteredMenu.length>0) ? filteredMenu[0] : null;
  }

  async showConfirmationAlert( message: string, successCallback, header?: string, failureCallback?) {
    const alert = await this.alertController.create({
      header: this.translateService.instant((header)? header: 'WARNING'),
      message: this.translateService.instant(message),
      buttons: [
        {
          text: this.translateService.instant('CANCEL_BUTTON'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            if(failureCallback) {
              return failureCallback();
            }
          }
        }, {
          text: this.translateService.instant('OK_BUTTON'),
          handler: () => {
            if(successCallback) {
              return successCallback();
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
