import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const root = "http://192.168.1.36:8000/";
const api = {
    'login': root + 'login.php',
    'movies': root + 'movies.php',
}
@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private httpClient: HttpClient) { }

    getAuthToken() {
        return localStorage.getItem('demo_token') || null
    }

    setAuthToken(data) {
        return localStorage.setItem('demo_token', data);
    }

    login(data) {
        return this.httpClient.post(api.login, data);
    }

    fetchMovies() {
        return this.httpClient.get(api.movies);
    }
}