import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class EncoderService {
  constructor(private http: HttpClient) {}

  encodeText(text: string) {
    return this.http.post<{ encoded: string }>(
      `${environment.API_BASE}/encoder`,
      { text },
    );
  }
}
