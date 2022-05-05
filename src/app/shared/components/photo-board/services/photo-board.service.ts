import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Photo } from '../interfaces/photo';
@Injectable()
export class PhotoBoardService {
  constructor(private httpCliente: HttpClient) {}

  public getPhotos(): Observable<Photo[]> {
    return this.httpCliente
      .get<Photo[]>('http://localhost:3000/photos')
      .pipe(delay(2000));
  }
}
