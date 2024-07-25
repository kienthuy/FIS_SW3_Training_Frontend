import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="https://cdn.fpt-is.com/vi/FPT-IS-set-logo-08-1715516291.svg"
          class="align-middle m-2 w-100"
          alt="logo"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
