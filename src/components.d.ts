/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import { Section as DddSection } from './components/ddd-section/ddd-section';

interface HTMLDddSectionElement extends DddSection, HTMLElement {
}
declare var HTMLDddSectionElement: {
  prototype: HTMLDddSectionElement;
  new (): HTMLDddSectionElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ddd-section": HTMLDddSectionElement;
  }
  interface ElementTagNameMap {
      "ddd-section": HTMLDddSectionElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ddd-section": JSXElements.DddSectionAttributes;
      }
  }
  namespace JSXElements {
      export interface DddSectionAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
      }
  }
}

import { Sessions as DddSessions } from './components/ddd-sessions/ddd-sessions';

interface HTMLDddSessionsElement extends DddSessions, HTMLElement {
}
declare var HTMLDddSessionsElement: {
  prototype: HTMLDddSessionsElement;
  new (): HTMLDddSessionsElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ddd-sessions": HTMLDddSessionsElement;
  }
  interface ElementTagNameMap {
      "ddd-sessions": HTMLDddSessionsElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ddd-sessions": JSXElements.DddSessionsAttributes;
      }
  }
  namespace JSXElements {
      export interface DddSessionsAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          sessions?: any,
          speakers?: any
      }
  }
}

import { Speakers as DddSpeakers } from './components/ddd-speakers/ddd-speakers';

interface HTMLDddSpeakersElement extends DddSpeakers, HTMLElement {
}
declare var HTMLDddSpeakersElement: {
  prototype: HTMLDddSpeakersElement;
  new (): HTMLDddSpeakersElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ddd-speakers": HTMLDddSpeakersElement;
  }
  interface ElementTagNameMap {
      "ddd-speakers": HTMLDddSpeakersElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ddd-speakers": JSXElements.DddSpeakersAttributes;
      }
  }
  namespace JSXElements {
      export interface DddSpeakersAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          speakers?: any,
          sessions?: any
      }
  }
}

