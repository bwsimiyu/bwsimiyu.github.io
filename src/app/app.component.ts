import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  languagesAndFrameworks: { name: string, icon:string } [] = [
    { name: 'JavaScript', icon: 'js' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'Angular', icon: 'angular' },
    { name: 'React', icon: 'react' },
    { name: 'React Native', icon: 'reactN' },
    { name: 'Java', icon: 'java' },
    { name: 'SpringBoot', icon: 'sb' },
    { name: 'Markup & Styling Languages', icon: 'html' }
  ]
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
  ) {
    this.registerIcons();
  }

  registerIcons(): void {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'X',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/X.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'js',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/js.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'ts',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/ts.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'angular',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'react',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/react.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'reactN',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/reactN.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'java',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/java.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'sb',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/sb.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'html',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/html.svg')
    );
  }

  navigateToUrl(url: string): void {
    window.open(url + 'bwsimiyu');
  }

}
