import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CameraService {
  imageData;
  resolve;
  reject;

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File,
    private translate: TranslateService
  ) {}

  pickImage(sourceType): void {
    const options: CameraOptions = {
      quality: 100,
      sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imageData = imageData;
      this.resolve(this.imageData);
    }, (err) => {
      // Handle error
      console.log(err);
      this.imageData = null;
      this.resolve(this.imageData);
    });
  }

  selectImage(): Promise <any> {
    this.imageData = null;
    return new Promise(async (resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
      const actionSheet = await this.actionSheetController.create({
        header: 'Select Image source',
        buttons: [{
          text: 'Load from Library',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
        ]
      });
      actionSheet.onDidDismiss().then(dis => {
        // resolve(this.imageData);
      });
      await actionSheet.present();
    });

  }
}
