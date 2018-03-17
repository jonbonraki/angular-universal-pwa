import 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPost } from '../model/ipost';

@Injectable()
export class EchoService {
	constructor(private httpClient: HttpClient) {}

	public getPosts(from: number, limit: number): Observable<IPost[]> {
		return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').map(posts => posts.slice(from, from + limit));
	}

    public getPost(id: number): Observable<IPost> {
        return this.httpClient.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + id);
    }

} 