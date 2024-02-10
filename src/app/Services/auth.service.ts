import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public addedNewPost(postData: any) {
    return this.http.post(`${this.BASE_URL}/posts`, postData);
  }

  public getAllPosts() {
    return this.http.get<any>(`${this.BASE_URL}/posts`);
  }

  public getPostById(id: any) {
    return this.http.get<any>(`${this.BASE_URL}/posts?id=${id}`);
  }

  public getUserByUsername(username: any) {
    return this.http.get<any>(`${this.BASE_URL}/users?username=${username}`);
  }

  public registerNewUser(userData: any) {
    return this.http.post(`${this.BASE_URL}/users`, userData);
  }

  public removePost(id: any) {
    return this.http.delete(`${this.BASE_URL}/posts/${id}`);
  }

  public updateExistingPost(id: any, data: any) {
    return this.http.put(`${this.BASE_URL}/posts/${id}`, data);
  }
}
