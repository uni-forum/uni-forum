import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let checkboxId: number = 1;

@Component({
  selector: 'uni-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: CheckboxComponent, multi: true }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {

  /** The current selected state */
  @Input() value: boolean = false;

  /** Determine the disabled state */
  @Input() disabled: boolean = false;

  /** Emit when the value changes */
  @Output() valueChange = new EventEmitter<boolean>();

  /** Define the id */
  id: string = `checkbox-${checkboxId++}`;

  /** Emit on value change */
  private _onChange: (value: boolean) => void;

  /** Emit on touched */
  private _onTouched: () => void;

  constructor() { }

  @HostListener('click')
  onToggle(): void {
    this.value = !this.value;
    this.valueChange.emit(this.value);
    this._onChange(this.value);
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

}
