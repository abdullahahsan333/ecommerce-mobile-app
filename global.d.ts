// Project global declarations to satisfy TypeScript checkJs
declare const $: any;
declare const jQuery: any;
declare const API: any;
declare const AppConfig: any;
declare const Assets: any;
declare const svg: any;

declare global {
  interface Window {
    formatViewerCount: any;
    url: any;
    windows: any;
    AppConfig: any;
    APIConfig: any;
    Assets: any;
    API: any;
    MockData: any;
  }
}
