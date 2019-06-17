//% color=#2096ba weight=100 icon="\uf0c3"
namespace MicroMaker {
	
	//enum for ADc pins only
	export enum adc {
		//% block=pin0
		pin0 = 0,	   
		//% block=pin1
		pin1 = 1,	   
		//% block=pin2
		pin2 = 2
    }
	
   /**
     * initialises the i2c OLED display
     * @param height height (in pixels), eg: 64
     * @param width width (in pixels), eg: 128
     */
    //% blockId=oled_init_terminal
    //% weight=100
    //% block="initialize OLED with height %height|width %width"
    //% icon="\uf1ec" 
    //% shim=OLED::init_terminal
	//% subcategory=OLED
    export function init(height: number, width: number): void {
        return;
    }
    /**
     *Prints Next Line
     */
    //% blockId=oled_next_line
    //% block="insert newline"
    //% async
    //% shim=OLED::NextLine
    //% subcategory=OLED
    export function nextLine(): void {
        return;
    }
/**
     * clears the screen.
     */
    //% blockId=oled_clear_screen
    //% block="clear OLED display"
    //% icon="\uf1ec" 
    //% shim=OLED::clearDisplay
	//% subcategory=OLED
    export function clear(): void {
        return;
    }
     /**
      * prints a string on the OLED display
      * @param text text to display, eg: "Hello, OLED!"
      */
     //% weight=92 blockGap=8
     //% block="show (without newline)|string %text" 
     //% async
     //% blockId=oled_print_stringNoNewLine
     //% icon="\uf1ec"
     //% shim=OLED::showStringNoNewLine
	 //% subcategory=OLED
     export function showStringNoNewLine(text: string): void {
        console.log("display: " + text);
        return;
    }
     /**
      * prints a string on the OLED display
      * @param text text to display, eg: "Hello, OLED!"
      */
     //% weight=94 blockGap=8
     //% block="show|string %text" 
     //% async
     //% blockId=oled_print_stringWithNewLine
     //% icon="\uf1ec"
     //% shim=OLED::showStringWithNewLine
	 //% subcategory=OLED
     export function showStringWithNewLine(text: string): void {
        console.log("display: " + text);
        return;
    }
    /**
     * prints a number on the OLED display without a newline
     * @param number number to display 
     */
    //% weight=93
    //% blockId=oled_print_number
    //% block="show (without newline)|number %number" blockGap=8
    //% async 
    //% shim=OLED::showNumberWithoutNewLine
	//% subcategory=OLED
    export function showNumberNoNewLine(number: number): void {
        console.log("display: " + number);
        return;
    }
    /**
     * prints a number on the OLED display with a newline
     * @param number number to display 
     */
    //% weight=95
    //% blockId=oled_print_number1
    //% block="show|number %number" blockGap=8
    //% async 
    //% shim=OLED::showNumberWithNewLine
	//% subcategory=OLED
    export function showNumberWithNewLine(number: number): void {
        console.log("display: " + number);
        return;
    }
	
	//% weight=95
    //% blockId=get_sound
    //% block="Get Sound dB|%p|" blockGap=8
	//% p.fieldEditor="gridpicker" p.fieldOptions.columns=3
	//% subcategory=Sound
	export function getSound(p: AnalogPin){
		let soundRaw = pins.analogReadPin(p);
		let soundDB = 0.3133 * soundRaw - 7.5104;
		return Math.round(soundDB);
	}
	
	//% weight=95
	//% blockId="Temperature_probe" 
    //% block="Get Temperature |%p|"
    //% p.fieldEditor="gridpicker" p.fieldOptions.columns=3
	//% subcategory=Temperature Probe
    export function TemperatureNumber(p: adc): number {
        // Fake function for simulator
        return Temperature(p)/100;
    }
	
	//% weight=95
    //% blockId=get_moisture
    //% block="Get Moisture|%p|" blockGap=8
	//% p.fieldEditor="gridpicker" p.fieldOptions.columns=3
	//% subcategory=Moisture
	export function getMoisture(p: AnalogPin){
		let moisture = pins.map(pins.analogReadPin(p),
			0,
			1023,
			0,
			100
		);
		return Math.round(moisture);
	}
}
