import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { api_url } from '../../configs/global.config';
export interface Response {
    status: number;
    data: any;
    messageKey?: string;
    message?: string;
    token?: string;
}

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private options: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        observe: 'response'
    })
    private optionsWithAuth: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        observe: 'response'
    });

    private apiUrl = '';

    constructor(private http: HttpClient,
        private authService: AuthService,
        private injector: Injector) {
        this.apiUrl = api_url.domain;
    }

    public getNoAuth(path: string, param?: any) {
        if (param) {
            let params = new HttpParams();
            Object.keys(param).forEach(function (key, index) {
                params = params.append(key, param[key]);
            })
            return this.http
                .get<Response>(this.apiUrl + path, {
                    headers: this.options,
                    params: params
                })
                .pipe(
                    retry(3),
                    tap((res: Response) => res),
                    catchError(this.handleError.bind(this))
                )
        } else {
            return this.http
                .get<Response>(this.apiUrl + path, { headers: this.options })
                .pipe(
                    retry(3),
                    tap((res: Response) => res),
                    catchError(this.handleError.bind(this))
                )
        }
    }

    public get(path: string, param?: any) {
        if (param) {
            let params = new HttpParams();
            Object.keys(param).forEach(function (key, index) {
                params = params.append(key, param[key]);
            })
            return this.http
                .get<Response>(this.apiUrl + path, {
                    headers: this.optionsWithAuth,
                    params: params
                })
                .pipe(
                    retry(3),
                    tap((res: Response) => res),
                    catchError(this.handleError.bind(this))
                )
        } else {
            return this.http
                .get<Response>(this.apiUrl + path, { headers: this.options })
                .pipe(
                    retry(3),
                    tap((res: Response) => res),
                    catchError(this.handleError.bind(this))
                )
        }
    }

    public createNoAuth(path: string, dataPost?: any) {
        return this.http
            .post<Response>(this.apiUrl + path, dataPost ? dataPost : {}, {
                headers: this.options
            })
            .pipe(
                retry(3),
                tap((res:Response) => res),
                catchError(this.handleError.bind(this))
            )
    }

    public create(path:string,dataPost?:any){
        return this.http
            .post<Response>(this.apiUrl + path, dataPost ? dataPost : {},{
                headers:this.optionsWithAuth
            })
            .pipe(
                retry(3),
                tap((res:Response)=>res),
                catchError(this.handleError.bind(this))
            )
    }

    public update(path:string,dataPost?:any){
        return this.http
            .put<Response>(this.apiUrl + path,dataPost ? dataPost :{},{
                headers:this.optionsWithAuth
            }).pipe(
                retry(3),
                tap((res:Response)=>res),
                catchError(this.handleError.bind(this))
            )
    }

    public delete(path:string){
        return this.http
            .delete<Response>(this.apiUrl + path,{
                headers:this.optionsWithAuth
            }).pipe(
                retry(3),
                tap((res:Response)=>res),
                catchError(this.handleError.bind(this))
            )
    }
    
    public setAuthToken(token) {
        this.optionsWithAuth = this.optionsWithAuth.set('X-Auth-Token', token);
      }
    
      public removeAuthToken() {
        this.optionsWithAuth = this.optionsWithAuth.delete('X-Auth-Token');
      }

    private handleError(error: HttpErrorResponse) {

        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` + `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
}