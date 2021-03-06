// Prefixed CSS properties

interface CSSStyleDeclaration {
  webkitClipPath?: string;
}

// Web Share API

interface Navigator {
  share(data: { url?: string; text?: string; title?: string }): Promise<void>;
}

// Web Monetization API

interface Document {
  readonly monetization: Monetization;
}

type MonetizationState = 'pending' | 'started';

interface MonetizationEventMap {
  start: MonetizationStartEvent;
  progress: MonetizationProgressEvent;
}

interface Monetization extends EventTarget {
  /**
   * A state attribute exposes the current state of Web Monetization as a
   * MonetizationState enum value.
   */
  readonly state: MonetizationState;

  onstart: ((this: Monetization, ev: MonetizationStartEvent) => any) | null;
  onprogress: ((this: Monetization, ev: MonetizationProgressEvent) => any) | null;

  addEventListener<K extends keyof MonetizationEventMap>(type: K, listener: (this: Monetization, ev: MonetizationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  removeEventListener<K extends keyof MonetizationEventMap>(type: K, listener: (this: Monetization, ev: MonetizationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MonetizationStartEventInit extends EventInit {
  paymentPointer: string;
  requestId: string;
}

interface MonetizationStartEvent extends Event {
  /**
   * A string representing the Payment Pointer resolved from the
   * `<meta name="monetization">` tag.
   */
  readonly paymentPointer: string;
  /**
   * The Monetization ID (UUID V4) generated by the browser.
   */
  readonly requestId: string;
}

declare var MonetizationStartEvent: {
  prototype: MonetizationStartEvent;
  new(type: string, eventInitDict?: MonetizationStartEventInit): MonetizationStartEvent;
};

interface MonetizationProgressEventInit extends EventInit {
  amount: string;
  assetCode: string;
  assetScale: string;
  receipt?: string;
}

interface MonetizationProgressEvent extends Event {
  /**
   * The destination amount received as specified in the ILP packet.
   */
  readonly amount: string;
  /**
   * The three letter asset code describing the amount's units.
   */
  readonly assetCode: string;
  /**
   * The scale of the amount.
   * For example, USD would have an assetScale of 2 when denominated in cents.
   */
  readonly assetScale: string;
  /**
   * base64-encoded STREAM Receipt issued by the Web Monetization receiver to
   * the Web Monetization provider as proof of the total amount received in the
   * stream.
   */
  readonly receipt?: string;
}

declare var MonetizationProgressEvent: {
  prototype: MonetizationProgressEvent;
  new(type: string, eventInitDict?: MonetizationProgressEventInit): MonetizationProgressEvent;
};
