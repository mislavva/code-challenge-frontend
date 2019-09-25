import { Component, OnInit, HostListener, ViewChild, AfterViewInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { logOut } from 'src/app/store/actions/auth.actions';
import { FormControl, Validators } from '@angular/forms';
import { encodeText } from 'src/app/store/actions/encoder.actions';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.scss']
})
export class EncoderComponent implements AfterViewInit {
  @ViewChild('inputRef', { static: true }) inputRef: MatInput;

  public text: FormControl;

  public encodedText$: Observable<string>;
  public encoding$: Observable<boolean>;

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {
    this.initializeForm();
    this.encoding$ = this.store.select(state => state.encoder.encoding).pipe(
      tap(encoding => encoding ? this.text.disable() : this.text.enable())
    );
    this.encodedText$ = this.store.select(state => state.encoder.encodedText);
  }

  ngAfterViewInit() {
    this.focusInput();
  }

  @HostListener('keydown.enter') onkeydownHandler() { this.encodeText(this.text.value); }

  public encodeText(text: string): void {
    this.store.dispatch(encodeText({ text }));
  }

  public onLogout(): void {
    this.store.dispatch(logOut());
  }

  private initializeForm(): void {
    this.text = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/)
    ]);
  }

  private focusInput(): void {
    this.inputRef.focus();
    this.cd.detectChanges();
  }
}
