# @adamhalamas's Karabiner Elements configuration

You probably don't want to use my exact configuration, as it's optimized for my personal style & usage. Best way to go about using this if you want to? Probably delete all the sublayers and add your own based on your own needs!

## Installation

1. Install & start [Karabiner Elements](https://karabiner-elements.pqrs.org/)
1. Clone this repository
1. Delete the default `~/.config/karabiner` folder (I have backed up mine first)
1. Create a symlink with `ln -s ~/repos/karabiner ~/.config` (where `~/repos/karabiner` is your local path to where you cloned the repository)
1. [Restart karabiner_console_user_server](https://karabiner-elements.pqrs.org/docs/manual/misc/configuration-file-path/) with `` launchctl kickstart -k gui/`id -u`/org.pqrs.karabiner.karabiner_console_user_server ``

## Development

```
yarn install
```

to install the dependencies. (one-time only)

```
yarn run generate
```

builds the `karabiner.json` from the `generate.ts`.

```
yarn run watch
```

watches the TypeScript files and rebuilds whenever they change.


This repo is forked from [mxstbr's amazing setup](https://github.com/mxstbr/karabiner)

## License

Copyright (c) 2025 Jan Adam Halama, licensed under the [MIT license](./LICENSE.md).