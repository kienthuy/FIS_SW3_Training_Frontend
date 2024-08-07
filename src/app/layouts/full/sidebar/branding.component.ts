import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <button mat-stroked-button class="d-none d-lg-flex mdc-button mat-mdc-button-base w-100">
        <span class="mdc-button__label">
          <div class="d-flex align-items-center">
            <i-tabler name="search" class="icon-20 d-flex m-r-10"></i-tabler>
            Tìm chức năng
          </div>
        </span>
      </button>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
