/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import {
  BoxHelper,
  BufferGeometry,
  ColorRepresentation,
  LineBasicMaterial,
  Object3D,
  Object3DEventMap,
} from 'three';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-boxHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThBoxHelper) },
  ],
})
export class ThBoxHelper<
  T extends BoxHelper = BoxHelper,
  TARGS = [object: Object3D, color?: ColorRepresentation],
> extends ThLineSegments<
  BufferGeometry,
  LineBasicMaterial,
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<BoxHelper> {
    return BoxHelper;
  }

  public get type(): (string | 'BoxHelper') | undefined {
    return this._objRef?.type;
  }
}
