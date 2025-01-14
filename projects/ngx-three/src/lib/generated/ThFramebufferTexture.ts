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
import {
  FramebufferTexture,
  MagnificationTextureFilter,
  MinificationTextureFilter,
  PixelFormat,
} from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-framebufferTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThFramebufferTexture),
    },
  ],
})
export class ThFramebufferTexture<
  T extends FramebufferTexture = FramebufferTexture,
  TARGS = [width: number, height: number, format: PixelFormat]
> extends ThTexture<T, TARGS> {
  public getType(): Type<FramebufferTexture> {
    return FramebufferTexture;
  }

  // @ts-ignore
  public get isFramebufferTexture(): true | undefined {
    return this._objRef?.isFramebufferTexture;
  }
  @Input()
  public set magFilter(value: MagnificationTextureFilter) {
    if (this._objRef) {
      this._objRef.magFilter = value;
    }
  }

  // @ts-ignore
  public get magFilter(): MagnificationTextureFilter | undefined {
    return this._objRef?.magFilter;
  }
  @Input()
  public set minFilter(value: MinificationTextureFilter) {
    if (this._objRef) {
      this._objRef.minFilter = value;
    }
  }

  // @ts-ignore
  public get minFilter(): MinificationTextureFilter | undefined {
    return this._objRef?.minFilter;
  }
  @Input()
  public set generateMipmaps(value: boolean) {
    if (this._objRef) {
      this._objRef.generateMipmaps = value;
    }
  }

  // @ts-ignore
  public get generateMipmaps(): boolean | undefined {
    return this._objRef?.generateMipmaps;
  }
}
