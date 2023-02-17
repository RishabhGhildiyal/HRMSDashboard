import { animate, style, transition, trigger } from "@angular/animations";

export const slideInAnimation = trigger('routeAnimations', [

  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('400ms ease-in', style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    animate('400ms ease-in', style({ transform: 'translateY(-100%)' })),
  ]),

  // transition(':enter' , [
  //   style({position: 'relative' }),
  //   animate(1000 , style({left : '100%'})),
  // ]),
  // transition('void=>*' , [
  //   style({ position: 'relative' }),
  //   animate('800ms ease-out', style({left : '100%'})),
  // ]),

  // transition(':leave' , [
  //   style({position: 'relative' }),
  //   animate('800ms ease-out' , style({left : '0%'})),
  // ])
  // transition('void => *', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //     }),
  //   ]),
  //   // query(':enter', [style({ left: '100%' })]),
  //   // query(':leave', animateChild()),
  //   // group([
  //   //   query(':leave' , [animate('0ms ease-out', style({ left: '100%' }))]),
  //   //   query(':enter', [animate('800ms ease-out', style({ left: '0%' }))]),
  //   // ]),
  //   // query(':enter', animateChild()),
  // ]),
]);
