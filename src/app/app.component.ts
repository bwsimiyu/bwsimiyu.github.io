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
  projects: { name: string, url: string, icon:string, date: string }[] = [
    { name: 'Waterfront Mall Web App', url: 'https://thewaterfrontkaren.com/', icon: 'web', date: 'Feb, 2019' },
    { name: 'Wasoko Web App', url: 'https://wasoko.com/', icon: 'web', date: 'June, 2022' },
    { name: 'Touch Inspiration Web App', url: 'https://touchinspiration.com/', icon: 'web', date: 'Dec, 2019' },
    { name: 'VituMob Shipping App', url: 'https://ship.vitumob.com/', icon: 'web', date: 'May, 2020' },
  ];
  socialIcons: string[] = ['github', 'linkedin', 'X'];
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
  ) {
    this.registerIcons();
  }

  registerIcons(): void {
    this.socialIcons.map(item => {
      this.matIconRegistry.addSvgIcon(
        item,
        this.domSanitzer.bypassSecurityTrustResourceUrl(`assets/icons/${item}.svg`)
      );      
    });
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
