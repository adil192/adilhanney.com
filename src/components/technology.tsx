import React from 'react';

export enum Technology {
  dart,
  flutter,
  pwa,
  scss,
  js,
}

export function TechnologyIcon({ technology }: { technology: Technology }): JSX.Element {
  switch (technology) {
    case Technology.dart:
      return <a href="https://dart.dev/" target="_blank" rel="noreferrer">
        <img
          key={technology}
          src="technologies/dart.svg"
          alt={Technology[technology]}
          width={32}
          height={32}
          className='mock-mac-os-icon'
        />
      </a>
    case Technology.flutter:
      return <a href="https://flutter.dev/" target="_blank" rel="noreferrer">
        <img
          key={technology}
          src="technologies/flutter.svg"
          alt={Technology[technology]}
          width={32 * 839 / 1039}
          height={32}
          className='mock-mac-os-icon'
        />
      </a>
    case Technology.pwa:
      return <a href="https://web.dev/explore/progressive-web-apps" target="_blank" rel="noreferrer">
        <img
          key={technology}
          src="technologies/pwa.svg"
          alt={Technology[technology]}
          width={32}
          height={32}
          className='mock-mac-os-icon'
        />
      </a>
    case Technology.scss:
      return <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
        <img
          key={technology}
          src="technologies/scss.svg"
          alt={Technology[technology]}
          width={32}
          height={32}
          className='mock-mac-os-icon'
        />
      </a>
    case Technology.js:
      return <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
        <img
          key={technology}
          src="technologies/js.png"
          alt={Technology[technology]}
          width={32}
          height={32}
          className='mock-mac-os-icon'
        />
      </a>
  }
}
