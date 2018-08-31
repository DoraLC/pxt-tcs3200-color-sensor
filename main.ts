enum color {
    //%block="RED"
    red,
    //%block="GREEN"
    green,
    //%block="BLUE"
    blue
}
//%color=#A9BCF5 icon="\uf1fc" block="tcs3200"
namespace tcs3200 {
    let output = 0
    let s2: number
    let s3: number
    let out: number
    let wavecount: number = 0
    let freq = 0
    let r_factor: number
    let g_factor: number
    let b_factor: number

    function reset_wavecount(t: number): void {
        wavecount = 0
        basic.pause(t)
    }

    /**
     * Calibrate the sensor.
     * @param time waiting time; eg: 30, 10, 100, 1000
     */
    //%block="Calibration S0 %S0|S1 %S1|S2 %S2|S3 %S3|OUT %OUT|time (ms)%time"
    //%blockExternalInputs=true
    export function calibration(S0: DigitalPin, S1: DigitalPin, S2: DigitalPin, S3: DigitalPin, OUT: DigitalPin, time: number): void {
        s2 = S2
        s3 = S3
        out = OUT
        freq = time

        // set output frequency scale to 2%
        pins.digitalWritePin(S0, 0)
        pins.digitalWritePin(S1, 1)

        // approx. wave freq count
        pins.onPulsed(out, PulseValue.Low, function () {
            wavecount++
        })

        // start calibration
        serial.writeLine("Calibrating TCS3200")
        basic.showString("C")
        pins.digitalWritePin(s2, 0)
        pins.digitalWritePin(s3, 0)
        reset_wavecount(freq)
        r_factor = 255 / wavecount
        pins.digitalWritePin(s2, 1)
        pins.digitalWritePin(s3, 1)
        reset_wavecount(freq)
        g_factor = 255 / wavecount
        pins.digitalWritePin(s2, 0)
        pins.digitalWritePin(s3, 1)
        reset_wavecount(freq)
        b_factor = 255 / wavecount
        serial.writeLine("Calibration completed")
        basic.clearScreen()
    }

    //%block="color: %choice"
    export function color_choice(choice: color): number {
        let returnValue: number
        switch (choice) {
            case 0:
                pins.digitalWritePin(s2, 0)
                pins.digitalWritePin(s3, 0)
                reset_wavecount(freq)
                returnValue = wavecount * r_factor
                break
            case 1:
                pins.digitalWritePin(s2, 1)
                pins.digitalWritePin(s3, 1)
                reset_wavecount(freq)
                returnValue = wavecount * g_factor
                break
            case 2:
                pins.digitalWritePin(s2, 0)
                pins.digitalWritePin(s3, 1)
                reset_wavecount(freq)
                returnValue = wavecount * b_factor
                break
        }
        if (returnValue <= 255) {
            return returnValue
        }
        else {
            return 255
        }
    }
}