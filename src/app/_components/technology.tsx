import Image from 'next/image'

export enum Technology {
    dart,
    flutter,
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
    }
}
