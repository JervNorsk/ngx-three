/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { PerspectiveCamera, StereoCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-stereoCamera',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThStereoCamera) },
    { provide: ThCamera, useExisting: forwardRef(() => ThStereoCamera) },
  ],
})
export class ThStereoCamera<
  T extends StereoCamera = StereoCamera,
  TARGS = []
> extends ThCamera<T, TARGS> {
  public getType(): Type<StereoCamera> {
    return StereoCamera;
  }

  @Input()
  public set type(value: 'StereoCamera') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): 'StereoCamera' | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set aspect(value: number) {
    if (this._objRef) {
      this._objRef.aspect = value;
    }
  }

  // @ts-ignore
  public get aspect(): number | undefined {
    return this._objRef?.aspect;
  }
  @Input()
  public set eyeSep(value: number) {
    if (this._objRef) {
      this._objRef.eyeSep = value;
    }
  }

  // @ts-ignore
  public get eyeSep(): number | undefined {
    return this._objRef?.eyeSep;
  }
  @Input()
  public set cameraL(value: PerspectiveCamera) {
    if (this._objRef) {
      this._objRef.cameraL = value;
    }
  }

  // @ts-ignore
  public get cameraL(): PerspectiveCamera | undefined {
    return this._objRef?.cameraL;
  }
  @Input()
  public set cameraR(value: PerspectiveCamera) {
    if (this._objRef) {
      this._objRef.cameraR = value;
    }
  }

  // @ts-ignore
  public get cameraR(): PerspectiveCamera | undefined {
    return this._objRef?.cameraR;
  }
}
