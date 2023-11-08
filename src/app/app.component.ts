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
    { name: 'NodeJS', icon: 'node' },
    { name: 'React Native', icon: 'reactN' },
    { name: 'MEAN & MERN stacks', icon: 'mean' },
    { name: 'Java', icon: 'java' },
    { name: 'SpringBoot', icon: 'sb' },
    { name: 'Python', icon: 'python' },
    { name: 'Markup & Styling Languages', icon: 'html' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Flutter', icon: 'flutter' },
    { name: 'Tensorflow', icon: 'tensorflow' }
  ];
  technologies: { name: string, icon:string } [] = [
    { name: 'Git', icon: 'git' },
    { name: 'Docker', icon: 'docker' },
    { name: 'DevOps', icon: 'devops' },
    { name: 'CI/CD', icon: 'cicd' },
    { name: 'Jira', icon: 'jira' },
    { name: 'Agile Methodologies', icon: 'agile' },
    { name: 'APIs', icon: 'apis' },
    { name: 'Material Design', icon: 'material' },
  ];
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
    this.languagesAndFrameworks.map(item => {
      this.matIconRegistry.addSvgIcon(
        item.icon,
        this.domSanitzer.bypassSecurityTrustResourceUrl(`assets/icons/${item.icon}.svg`)
      )
    });
    this.technologies.map(item => {
      this.matIconRegistry.addSvgIcon(
        item.icon,
        this.domSanitzer.bypassSecurityTrustResourceUrl(`assets/icons/${item.icon}.svg`)
      )
    });
  }

  navigateToUrl(url: string): void {
    window.open(url + 'bwsimiyu');
  }

}
