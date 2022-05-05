import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dionysosAngular';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitzer.bypassSecurityTrustResourceUrl(
        'assets/icons/instagram.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitzer.bypassSecurityTrustResourceUrl(
        'assets/icons/linkedin.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitzer.bypassSecurityTrustResourceUrl(
        'assets/icons/twitter.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'otro',
      this.domSanitzer.bypassSecurityTrustResourceUrl(
        'assets/icons/otro.svg'
      )
    );
  }
}
