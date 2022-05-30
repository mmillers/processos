import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/api-response.interface';
import { Lawsuits } from '../interfaces/lawsuits.interface';

@Injectable({ providedIn: 'root' })
export class LawsuitsService {

	constructor(private httpClient: HttpClient) {}

	public add(numero: number): Observable<string> {
		return this.httpClient.post<ApiResponse>(`${environment.url}/lawsuits`, numero)
			.pipe(map(response => response.message));
	}

	public edit(lawsuit: Lawsuits): Observable<string> {
		return this.httpClient.put<ApiResponse>(`${environment.url}/lawsuits/${lawsuit.id}`, lawsuit)
			.pipe(map(response => response.message));
	}

	public delete(id: number): Observable<string> {
		return this.httpClient.delete<ApiResponse>(`${environment.url}/lawsuits/${id}`)
			.pipe(map(response => response.message));
	}

	public list(): Observable<Array<Lawsuits>> {
		return this.httpClient.get<ApiResponse>(`${environment.url}/lawsuits`)
			.pipe(map((response: any) => response.data));
	}

	public getById(id: number): Observable<Lawsuits> {
		return this.httpClient.get<ApiResponse>(`${environment.url}/lawsuits/${id}`)
			.pipe(map((response: any) => response.data));
	}
}
