import Image from 'next/image'

export enum Technology {
    dart,
    flutter,
    pwa,
}

export function TechnologyIcon({ technology }: { technology: Technology }): JSX.Element {
    switch (technology) {
        case Technology.dart:
            return <a href="https://dart.dev/" target="_blank">
                <Image
                    key={technology}
                    src="technologies/dart.svg"
                    alt={Technology[technology]}
                    width={32}
                    height={32}
                    className='mock-mac-os-icon'
                />
            </a>
        case Technology.flutter:
            return <a href="https://flutter.dev/" target="_blank">
                <Image
                    key={technology}
                    src="technologies/flutter.svg"
                    alt={Technology[technology]}
                    width={32 * 839 / 1039}
                    height={32}
                    className='mock-mac-os-icon'
                />
            </a>
        case Technology.pwa:
            return <a href="https://web.dev/explore/progressive-web-apps" target="_blank">
                <Image
                    key={technology}
                    src="technologies/pwa.svg"
                    alt={Technology[technology]}
                    width={32}
                    height={32}
                    className='mock-mac-os-icon'
                />
            </a>
    }
}
