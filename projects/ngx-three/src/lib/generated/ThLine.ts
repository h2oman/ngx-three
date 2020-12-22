import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Geometry } from "three";
import { Material } from "three";
import { Raycaster } from "three";
import { Object3D } from "three";
import { BufferGeometry } from "three";
import { Intersection } from "three";
import { ThObject3D } from "./ThObject3D";
import { Line } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-line",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLine) }],
})
export class ThLine<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry: TGeometry, material: TMaterial, mode: number]
> extends ThObject3D<TARGS> {
  protected obj!: Line<TGeometry, TMaterial>;
  protected getObjectType(): Type<Line<TGeometry, TMaterial>> {
    return Line;
  }

  @Input()
  public set geometry(value: TGeometry) {
    if (this.obj) {
      this.obj.geometry = value;
    }
  }

  @Input()
  public set material(value: TMaterial) {
    if (this.obj) {
      this.obj.material = value;
    }
  }

  @Input()
  public set type(value: "Line" | "LineLoop" | "LineSegments" | string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set morphTargetInfluences(value: number[]) {
    if (this.obj) {
      this.obj.morphTargetInfluences = value;
    }
  }

  @Input()
  public set morphTargetDictionary(value: { [key: string]: number }) {
    if (this.obj) {
      this.obj.morphTargetDictionary = value;
    }
  }
}
