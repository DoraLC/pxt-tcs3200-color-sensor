# pxt-color_sensor

* for TCS3200 color sensor
* S0, S1 used for output frequency scaling selection inputs. It is preset at 2%.
* S2, S3 used in selection filter type.
* OUT is frequency output pin.
* VCC and GND for supply voltage and ground.
* It takes some time to calibrate the sensor. When calibrating the sesnor, "C" is shown in the display or you can use the serial monitor for more details and more convenience.
- check Footnotes for more details.

## Blocks

### Calibration
To calibrate the color sensor. You can specify the calibration time for each color, the longer it takes to calibrate, the more accurate it will be (theoretically).

Connect the sensor to a micro:bit. Set up the pins and place the sensor in white paper then start running the block.

## color
To get the RGB value (0 - 255) for selected color.

## TODO (package)

- [ ] Add a reference for your blocks here
- [ ] Add "icon.png" image (300x200) in the root folder
- [ ] Add "- beta" to the GitHub project description if you are still iterating it.
- [ ] Turn on your automated build on https://travis-ci.org
- [ ] Use "pxt bump" to create a tagged release on GitHub
- [ ] Get your package reviewed and approved https://makecode.microbit.org/packages/approval

Read more at https://makecode.microbit.org/packages/build-your-own

## License

MIT

## Supported targets

* for PXT/microbit
```sig
GitHub: DoraLC/pxt-tcs3200-color-sensor
```
(The metadata above is needed for package search.)

## Footnotes
1. datasheet: https://www.mouser.com/catalog/specsheets/TCS3200-E11.pdf
