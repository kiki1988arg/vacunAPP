import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    style({ position: 'relative' }),
    // Set a default  style for enter and leave
    query(':enter,:leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ], { optional: true }),
    // Animate the new page in
    query(':enter', [
      animate(
        '100ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      ),
    ], { optional: true }),
  ]),
]);
