import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


    @Injectable({
        providedIn: 'root'
    })
export class UserService {
     
    constructor(public httpClient: HttpClient) { }

    getData = (): Promise<Object> => {
        debugger
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8080/users";
            this.httpClient.get(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    deleteData= (id): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `http://localhost:8080/users/delete?id=${id}`;
            this.httpClient.delete(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    createData= (user): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8080/users/create";
            this.httpClient.post(url, user)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    
    detailData= (id): Promise<Object> => {
        return new Promise((resolve, reject) => { 
            let url = `http://localhost:8080/users/detail?id=${id}`;
            this.httpClient.get(url)
                .subscribe(res => {
                 resolve(res);
                }, err => {
                reject(err);
                })
        })
    }
    updateData = (id,user): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `http://localhost:8080/users/update?id=${id}`;
            this.httpClient.put(url,user)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}