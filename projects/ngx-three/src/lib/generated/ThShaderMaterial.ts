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
  GLSLVersion,
  IUniform,
  ShaderMaterial,
  ShaderMaterialParameters,
} from 'three';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-shaderMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThShaderMaterial) },
  ],
})
export class ThShaderMaterial<
  T extends ShaderMaterial = ShaderMaterial,
  TARGS = /* parameters? */ ShaderMaterialParameters
> extends ThMaterial<T, TARGS> {
  public getType(): Type<ShaderMaterial> {
    return ShaderMaterial;
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
  public set defines(value: { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.defines = value;
    }
  }

  // @ts-ignore
  public get defines(): { [key: string]: any } | undefined {
    return this._objRef?.defines;
  }
  @Input()
  public set uniforms(value: { [uniform: string]: IUniform }) {
    if (this._objRef) {
      this._objRef.uniforms = value;
    }
  }

  // @ts-ignore
  public get uniforms(): { [uniform: string]: IUniform } | undefined {
    return this._objRef?.uniforms;
  }
  @Input()
  public set vertexShader(value: string) {
    if (this._objRef) {
      this._objRef.vertexShader = value;
    }
  }

  // @ts-ignore
  public get vertexShader(): string | undefined {
    return this._objRef?.vertexShader;
  }
  @Input()
  public set fragmentShader(value: string) {
    if (this._objRef) {
      this._objRef.fragmentShader = value;
    }
  }

  // @ts-ignore
  public get fragmentShader(): string | undefined {
    return this._objRef?.fragmentShader;
  }
  @Input()
  public set linewidth(value: number) {
    if (this._objRef) {
      this._objRef.linewidth = value;
    }
  }

  // @ts-ignore
  public get linewidth(): number | undefined {
    return this._objRef?.linewidth;
  }
  @Input()
  public set wireframe(value: boolean) {
    if (this._objRef) {
      this._objRef.wireframe = value;
    }
  }

  // @ts-ignore
  public get wireframe(): boolean | undefined {
    return this._objRef?.wireframe;
  }
  @Input()
  public set wireframeLinewidth(value: number) {
    if (this._objRef) {
      this._objRef.wireframeLinewidth = value;
    }
  }

  // @ts-ignore
  public get wireframeLinewidth(): number | undefined {
    return this._objRef?.wireframeLinewidth;
  }
  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  // @ts-ignore
  public get fog(): boolean | undefined {
    return this._objRef?.fog;
  }
  @Input()
  public set lights(value: boolean) {
    if (this._objRef) {
      this._objRef.lights = value;
    }
  }

  // @ts-ignore
  public get lights(): boolean | undefined {
    return this._objRef?.lights;
  }
  @Input()
  public set clipping(value: boolean) {
    if (this._objRef) {
      this._objRef.clipping = value;
    }
  }

  // @ts-ignore
  public get clipping(): boolean | undefined {
    return this._objRef?.clipping;
  }
  @Input()
  public set derivatives(value: any) {
    if (this._objRef) {
      this._objRef.derivatives = value;
    }
  }

  // @ts-ignore
  public get derivatives(): any | undefined {
    return this._objRef?.derivatives;
  }
  @Input()
  public set extensions(value: {
    derivatives: boolean;
    fragDepth: boolean;
    drawBuffers: boolean;
    shaderTextureLOD: boolean;
  }) {
    if (this._objRef) {
      this._objRef.extensions = value;
    }
  }

  // @ts-ignore
  public get extensions():
    | {
        derivatives: boolean;
        fragDepth: boolean;
        drawBuffers: boolean;
        shaderTextureLOD: boolean;
      }
    | undefined {
    return this._objRef?.extensions;
  }
  @Input()
  public set defaultAttributeValues(value: any) {
    if (this._objRef) {
      this._objRef.defaultAttributeValues = value;
    }
  }

  // @ts-ignore
  public get defaultAttributeValues(): any | undefined {
    return this._objRef?.defaultAttributeValues;
  }
  @Input()
  public set index0AttributeName(value: string | undefined) {
    if (this._objRef) {
      this._objRef.index0AttributeName = value;
    }
  }

  // @ts-ignore
  public get index0AttributeName(): (string | undefined) | undefined {
    return this._objRef?.index0AttributeName;
  }
  @Input()
  public set uniformsNeedUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.uniformsNeedUpdate = value;
    }
  }

  // @ts-ignore
  public get uniformsNeedUpdate(): boolean | undefined {
    return this._objRef?.uniformsNeedUpdate;
  }
  @Input()
  public set glslVersion(value: GLSLVersion | null) {
    if (this._objRef) {
      this._objRef.glslVersion = value;
    }
  }

  // @ts-ignore
  public get glslVersion(): (GLSLVersion | null) | undefined {
    return this._objRef?.glslVersion;
  }
  @Input()
  public set isShaderMaterial(value: boolean) {
    if (this._objRef) {
      this._objRef.isShaderMaterial = value;
    }
  }

  // @ts-ignore
  public get isShaderMaterial(): boolean | undefined {
    return this._objRef?.isShaderMaterial;
  }
}
