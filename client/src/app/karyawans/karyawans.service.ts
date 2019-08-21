import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

import {Observable} from 'rxjs'
import {catchError} from 'rxjs/operators'


import {Karyawan} from './karyawan'
import {HttpErrorHandler, HandleError} from '../http-error-handle.service'

@Injectable()
export class KaryawansService {
  private handleError: HandleError

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler){
    this.handleError = httpErrorHandler.createHandleError('KaryawansService')

  }

  getKaryawans(): Observable<Karyawan[]>{
    return this.http
    .get<Karyawan[]>('api/karyawans')
    .pipe(catchError(this.handleError('getKaryawans',[])))
  }

  addKaryawan(karyawan: Karyawan): Observable<Karyawan>{
    return this.http
    .post<Karyawan>('api/karyawan', karyawan)
    .pipe(catchError(this.handleError('addKaryawan', karyawan)))
  }

  deleteKaryawan(id: number): Observable<{}>{
    const url = `api/karyawan/${id}`
    return this.http
    .delete(url)
    .pipe(catchError(this.handleError('deleteKaryawan')))
  }

  updateKaryawan(karyawan: Karyawan): Observable<Karyawan>{
    return this.http
    .put<Karyawan>(`api/karyawan/${karyawan.id}`, karyawan)
    .pipe(catchError(this.handleError('updateKaryawan', karyawan)))
  }
}
