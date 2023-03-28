# Josukey

A keyboard for Joey

This is an ergogen based corne clone that I intend to modify and tweak as I descend into the rabbit hole

<p align="center">
    <img src="./images/josukey.png" width="100%">
</p>

## Prerequisites

* Node
* Docker
## Getting Started

Get my files on your computer 😏 and install dependencies.

```bash
git clone https://github.com/Narkoleptika/josukey.git
cd josukey
npm i
```

## Ergogen

### Build

This will run Ergogen and build all of the output files.

```bash
npm run ergogen:build
```

### Watch

This will watch the `config.yaml` file and the `footprints` directory and run the build command whenever there are changes.

```bash
npm run ergogen:watch
```

## ZMK

### Init

Downloads ZMK dependencies

```bash
npm run zmk:update
```

### Build

Builds the ZMK firmware

```bash
npm run zmk:build
```

### Down

Shuts down the ZMK docker services

```bash
npm run zmk:down
```

## Thanks

* <a href="https://github.com/ergogen/ergogen" target="_blank">Ergogen</a>
* <a href="https://discord.gg/nbKcAZB" target="_blank">Absolem Club Discord</a>
* <a href="https://github.com/tsteffek/Ergogen-V4-Migration-Guide" target="_blank">V4 Migration Guide</a>
* <a href="https://gitlab.com/Audijo/keyboard" target="_blank">Claw</a>
* <a href="https://github.com/MrCarney/mrkeyboard" target="_blank">MrKeyboard</a>
* <a href="https://github.com/foostan/crkbd" target="_blank">Corne keyboard</a>
* <a href="https://github.com/zmkfirmware/zmk" target="_blank">ZMK</a>
* <a href="https://github.com/manna-harbour/miryoku_zmk" target="_blank">Miryoku ZMK</a>
* <a href="https://www.reddit.com/r/crkbd/comments/esv3i8/guide_corne_diy_kit/" target="_blank">Reddit post with information about screws and spacers</a>
