import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import {saveAs} from 'save-as';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private zip: JSZip;

  constructor(private http: HttpClient) {
  }

  /**
   * service to Get all the images of a particular Material ID
   * returns an observable
   */
  public getAllImages(): Observable<any> {
    return this.http.get('./assets/json/images.json');
  }

  /**
   * {downloadSelectedImages} Download the selected images from the gallery
   * {jzip} library to create a zip file of images
   * {jziputils} utility to create a array of files and its content type
   * {this.zip} create new instance of Jzip
   */
  public downloadSelectedImages(images) {
    this.zip = new JSZip();
    let completed = 0;
    images.forEach((image) => {
      JSZipUtils.getBinaryContent(image.imageUrl, (err, data) => {
        if (err) {
          throw err;
        }
        this.zip.file(image.imageName + '.jpg', data, {binary: true});
        if (++completed === images.length) {
          this.zip.generateAsync({type: 'blob'}).then((content) => {
            saveAs(content, new Date(), image.label);
          });
        }
      });
    });
  }

  public downloadSelectedImage(image) {
    this.zip = new JSZip();
    JSZipUtils.getBinaryContent(image.imageUrl, (err, data) => {
      if (err) {
        throw err;
      }
      this.zip.file(image.imageName + '.jpg', data, {binary: true});
      this.zip.generateAsync({type: 'blob'}).then((content) => {
        saveAs(content, new Date(), image.label);
      });
    });
  }
}
