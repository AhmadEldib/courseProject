import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@envireonments';

@Injectable({
  providedIn: 'root'
})
export class ApiURLsService {
  private readonly httpService = inject(HttpClient);

  /**
   * Performs a GET request to the specified endpoint
   * @param endPoint The API endpoint to fetch data from
   * @returns Observable with typed response data
   */
  getRequest<T>(endPoint: string): Observable<T> {
    return this.httpService.get<T>(`${environment.apiUrl}${endPoint}.json`, {
      headers: this.getHeaders()
    });
  }

  /**
   * Performs a POST request to create a new resource
   * @param endPoint The API endpoint to send data to
   * @param body The data to be sent in the request body
   * @param options Additional HTTP request options
   * @returns Observable with the server response
   */
  postRequest(endPoint: string, body: any, options?: any): Observable<any> {
    return this.httpService.post(`${environment.apiUrl}${endPoint}.json`, body, {
      ...options,
      headers: this.getHeaders()
    });
  }

  /**
   * Performs a PUT request to completely replace a resource
   * @param endPoint The API endpoint to update
   * @param body The complete new data for the resource
   * @param options Additional HTTP request options
   * @returns Observable with the server response
   */
  putRequest(endPoint: string, body: any, options?: any): Observable<any> {
    return this.httpService.put(`${environment.apiUrl}${endPoint}.json`, body, {
      ...options,
      headers: this.getHeaders()
    });
  }

  /**
   * Performs a DELETE request to remove a resource
   * @param endPoint The API endpoint of the resource to delete
   * @param options Additional HTTP request options
   * @returns Observable with the server response
   */
  deleteRequest(endPoint: string, options?: any): Observable<any> {
    return this.httpService.delete(`${environment.apiUrl}${endPoint}.json`, {
      ...options,
      headers: this.getHeaders()
    });
  }

  /**
   * Performs a PATCH request to partially update a resource
   * @param endPoint The API endpoint to partially update
   * @param body The partial data to update on the resource
   * @param options Additional HTTP request options
   * @returns Observable with the server response
   */
  patchRequest(endPoint: string, body: any, options?: any): Observable<any> {
    return this.httpService.patch(`${environment.apiUrl}${endPoint}.json`, body, {
      ...options,
      headers: this.getHeaders()
    });
  }

  /**
   * Creates headers for API requests with authentication
   * @returns HTTP headers object with content type and auth token
   */
  private getHeaders(): any {
    // Get Firebase token from local storage
    const token = localStorage.getItem('firebase_token');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  }
}
