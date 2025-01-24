import 'react';

declare module 'react' {
  // The tw and css prop
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    tw?: string;
  }
}

// Declare png module
declare module '*.png';

// Declare svg module
declare module '*.svg';
