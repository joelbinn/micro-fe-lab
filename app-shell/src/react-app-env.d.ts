/// <reference types="react-scripts" />
declare module JSX {
    interface IntrinsicElements {
      'inspire-pages': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'decide-pages': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
}
