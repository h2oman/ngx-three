/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { ConeGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThCylinderGeometry } from './ThCylinderGeometry';

@Component({
  selector: 'th-coneGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThConeGeometry),
    },
  ],
})
export class ThConeGeometry<
  T extends ConeGeometry = ConeGeometry,
  TARGS = [
    radius?: number,
    height?: number,
    radialSegments?: number,
    heightSegments?: number,
    openEnded?: boolean,
    thetaStart?: number,
    thetaLength?: number,
  ],
> extends ThCylinderGeometry<T, TARGS> {
  public getType(): Type<ConeGeometry> {
    return ConeGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'ConeGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get parameters():
    | {
        readonly radius: number;
        readonly radiusTop: number;
        readonly radiusBottom: number;
        readonly height: number;
        readonly radialSegments: number;
        readonly heightSegments: number;
        readonly openEnded: boolean;
        readonly thetaStart: number;
        readonly thetaLength: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
