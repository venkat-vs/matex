import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
  // tslint:disable-next-line:max-line-length
  transition('material-search => material-search-results, ' +
    'material-search-results => material-details,material-details => gallery,' +
    'material-details => cData,material-details => testing,material-details => reports', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({right: '-100%', opacity: 0})]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({right: '100%', opacity: 0}))]),
      query(':enter', [animate('1s ease-out', style({right: '0%', opacity: 1}))])
    ]),
    query(':enter', animateChild())
  ]),
  transition('material-search => material-search-results, ' +
    'material-search-results => material-details,material-details => gallery,' +
    'material-details => cData,material-details => testing,material-details => reports', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({left: '-100%', opacity: 0})]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({left: '100%', opacity: 0}))]),
      query(':enter', [animate('1s ease-out', style({left: '0%', opacity: 1}))])
    ]),
    query(':enter', animateChild())
  ])
]);
