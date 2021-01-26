import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://www.ideas2it.com/" target="_blank">Ideas2it</a></b>
    </span>
    <div class="socials">
      <a href="https://www.facebook.com/Ideas2IT" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/ideas2it" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/company/ideas2it/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
