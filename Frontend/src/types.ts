import { Matrix4, Scene, WebGLRenderer, PerspectiveCamera, Group } from "three";

declare class CSS3DRenderer {
  constructor();
}

declare class Controller {
  constructor(options: any);
}

declare class UI {
  constructor(options: any);
}

export declare class MindARThree {
  private container: HTMLElement;
  private imageTargetSrc: string;
  private maxTrack: number;
  private filterMinCF: number | null;
  private filterBeta: number | null;
  private warmupTolerance: number | null;
  private missTolerance: number | null;
  private ui: UI;
  private userDeviceId: string | null;
  private environmentDeviceId: string | null;
  private shouldFaceUser: boolean;
  private scene: Scene;
  private cssScene: Scene;
  private renderer: WebGLRenderer;
  private cssRenderer: CSS3DRenderer;
  private camera: PerspectiveCamera;
  private anchors: {
    group: Group;
    targetIndex: number;
    onTargetFound: (() => void) | null;
    onTargetLost: (() => void) | null;
    onTargetUpdate: (() => void) | null;
    css: boolean;
    visible: boolean;
  }[];
  private video: HTMLVideoElement;
  private postMatrixs: Matrix4[];

  constructor(options: {
    container: HTMLElement;
    imageTargetSrc: string;
    maxTrack: number;
    uiLoading?: string;
    uiScanning?: string;
    uiError?: string;
    filterMinCF?: number | null;
    filterBeta?: number | null;
    warmupTolerance?: number | null;
    missTolerance?: number | null;
    userDeviceId?: string | null;
    environmentDeviceId?: string | null;
  });

  public start(): Promise<void>;
  public stop(): void;
  public switchCamera(): void;
  public addAnchor(targetIndex: number): {
    group: Group;
    targetIndex: number;
    onTargetFound: (() => void) | null;
    onTargetLost: (() => void) | null;
    onTargetUpdate: (() => void) | null;
    css: boolean;
    visible: boolean;
  };
  public addCSSAnchor(targetIndex: number): {
    group: Group;
    targetIndex: number;
    onTargetFound: (() => void) | null;
    onTargetLost: (() => void) | null;
    onTargetUpdate: (() => void) | null;
    css: boolean;
    visible: boolean;
  };

  private _startVideo(): Promise<void>;
  private _startAR(): Promise<void>;
  private resize(): void;
}

