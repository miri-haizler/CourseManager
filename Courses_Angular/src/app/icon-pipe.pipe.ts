import { Pipe, PipeTransform } from '@angular/core';
import { LearningType } from './models/course.model';

@Pipe({
  name: 'iconPipe',
  // standalone: true
})
export class IconPipePipe implements PipeTransform {

  transform(value: any | undefined): string {
    switch (value) {
             case 1:
              return '/assets/frontal.jpg';
            case 0:
              return 'frontal';
              
            default:
              return '';
          }
        }
}
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'learningWay',
//   standalone: true
// })
// export class LearningWayPipe implements PipeTransform {

//   transform(learningWay: any): any {
//     console.log(learningWay);
    
//     switch (learningWay) {
//       case 1:
//         return 'fas fa-book';
//       case 0:
//         return 'far fa-image';
        
//       default:
//         return '';
//     }
//   }

// }
// <div class="bg-gray">
// <span class="fw-bold"><i class="fas fa-book-open"></i> Way Of Learning :</span>
// <p *ngIf="course.wayOfLearning==1" >  <i class="{{ course.wayOfLearning | learningWay }}"></i>
// Frontaly</p>
// <p *ngIf="course.wayOfLearning==0">  <i class="{{ course.wayOfLearning | learningWay }}"></i>
// Zoom</p>