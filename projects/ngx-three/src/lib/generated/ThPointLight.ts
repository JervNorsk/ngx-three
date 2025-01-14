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
import { ColorRepresentation, PointLight, PointLightShadow } from 'three';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-pointLight',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPointLight) },
  ],
})
export class ThPointLight<
  T extends PointLight = PointLight,
  TARGS = [
    color?: ColorRepresentation,
    intensity?: number,
    distance?: number,
    decay?: number
  ]
> extends ThLight<PointLightShadow, T, TARGS> {
  public getType(): Type<PointLight> {
    return PointLight;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set intensity(value: number) {
    if (this._objRef) {
      this._objRef.intensity = value;
    }
  }

  // @ts-ignore
  public get intensity(): number | undefined {
    return this._objRef?.intensity;
  }
  @Input()
  public set distance(value: number) {
    if (this._objRef) {
      this._objRef.distance = value;
    }
  }

  // @ts-ignore
  public get distance(): number | undefined {
    return this._objRef?.distance;
  }
  @Input()
  public set castShadow(value: boolean) {
    if (this._objRef) {
      this._objRef.castShadow = value;
    }
  }

  // @ts-ignore
  public get castShadow(): boolean | undefined {
    return this._objRef?.castShadow;
  }
  @Input()
  public set decay(value: number) {
    if (this._objRef) {
      this._objRef.decay = value;
    }
  }

  // @ts-ignore
  public get decay(): number | undefined {
    return this._objRef?.decay;
  }
  @Input()
  public set shadow(value: PointLightShadow) {
    if (this._objRef) {
      this._objRef.shadow = value;
    }
  }

  // @ts-ignore
  public get shadow(): PointLightShadow | undefined {
    return this._objRef?.shadow;
  }
  @Input()
  public set power(value: number) {
    if (this._objRef) {
      this._objRef.power = value;
    }
  }

  // @ts-ignore
  public get power(): number | undefined {
    return this._objRef?.power;
  }
}
