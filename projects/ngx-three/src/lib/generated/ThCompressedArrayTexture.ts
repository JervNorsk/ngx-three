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
  CompressedArrayTexture,
  CompressedPixelFormat,
  TextureDataType,
  Wrapping,
} from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThCompressedTexture } from './ThCompressedTexture';

@Component({
  selector: 'th-compressedArrayTexture',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThCompressedArrayTexture),
    },
  ],
})
export class ThCompressedArrayTexture<
  T extends CompressedArrayTexture = CompressedArrayTexture,
  TARGS = [
    mipmaps: ImageData[],
    width: number,
    height: number,
    depth: number,
    format?: CompressedPixelFormat,
    type?: TextureDataType
  ]
> extends ThCompressedTexture<T, TARGS> {
  public getType(): Type<CompressedArrayTexture> {
    return CompressedArrayTexture;
  }

  @Input()
  public set isCompressedArrayTexture(value: true) {
    if (this._objRef) {
      this._objRef.isCompressedArrayTexture = value;
    }
  }

  @Input()
  public set wrapR(value: Wrapping) {
    if (this._objRef) {
      this._objRef.wrapR = value;
    }
  }
}