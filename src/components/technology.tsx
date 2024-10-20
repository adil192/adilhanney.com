export enum Technology {
  dart,
  flutter,
  pwa,
  scss,
  js,
  python,
  bash,
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
      return <a href="https://en.wikipedia.org/wiki/Progressive_web_app" target="_blank" rel="noreferrer">
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
    case Technology.python:
      return <a href="https://www.python.org/" target="_blank" rel="noreferrer">
        <img
          key={technology}
          src="technologies/python.svg"
          alt={Technology[technology]}
          width={32}
          height={32}
          className='mock-mac-os-icon'
        />
      </a>
    case Technology.bash:
      return <a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)" target="_blank" rel="noreferrer">
        <img
          key={technology}
          src="technologies/bash.svg"
          alt={Technology[technology]}
          width={32}
          height={32}
          className='mock-mac-os-icon'
        />
      </a>
  }
}
