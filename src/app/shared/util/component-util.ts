import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

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
          virtualTranslate: true,
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
          if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
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
              opacity: slideOpacity,
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
      },
    }
  };

  @Injectable({
    providedIn: 'root'
  })
  export class ComponentUtil {
    loading: any;
    constructor(
      private loadingCtrl: LoadingController,
      public toastController: ToastController
    ) {}

    showLoading(message, completeCallBack, dismissCallBack) {
      if(this.loading) return;
      this.loadingCtrl.create({
        message: message
      }).then((loading) => {
        this.loading = loading;
        this.loading.present();
        completeCallBack();
        this.loading.onDidDismiss().then((dis) => {
          dismissCallBack()
        });
      });
    }

    hideLoading() {
      if(this.loading) {
        this.loading.dismiss();
        this.loading = null;
      }
    }

    async showToast(message, options?) {
      const toast = await this.toastController.create({
        message: message,
        duration: (options && options.duration) ? options.duration : 3000,
        position: (options && options.position) ? options.position : 'top',
        cssClass: (options && options.cssClass) ? options.cssClass : 'toast',
        showCloseButton: (options && options.showCloseButton) ? options.showCloseButton : false,
        closeButtonText: (options && options.closeButtonText) ? options.closeButtonText : 'OK',
        dismissOnPageChange: (options && options.dismissOnPageChange) ? options.dismissOnPageChange : false,
        // color:  (options && options.color) ? options.color : 'primary'
      });
      toast.present();
    }
  }