import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()"></app-title>

    <pre>{{frameworkAsSignal() | json}}</pre>
    <pre>{{frameworkAsProperty | json}}</pre>
  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2010-09-14',
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2010-09-14',
  };

  constructor() {
    setTimeout(() => {
      /* this.frameworkAsSignal.update(framework => {
        framework.name = 'React'
        return framework
      }) */
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }))
      console.log('Hecho')
    }, 3000)
  }

}
