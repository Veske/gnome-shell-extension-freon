const Lang = imports.lang;
const GLib = imports.gi.GLib;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const CommandLineUtil = Me.imports.commandLineUtil;

const AmdGpuUtil = new Lang.Class({
    Name: 'AmdGpuUtil',
    Extends: CommandLineUtil.CommandLineUtil,

    _init: function() {
        this.parent();
        let path = GLib.find_program_in_path('sensors');
        let sensorsConf = Me.path.concat('/sensors.d/amdGpuSensors.conf');
        this._argv = path ? [path, '-c', sensorsConf] : null;
    },

    get temp() {
        if(!this._output) {
            return [];
        }
        let sensors = [];
        for (let i = 0; i < this._output.length; i++) {
            if (this._output[i].indexOf('amdgpu-pci') != -1) {
                sensors.push(this._parseTemperature(i));
            }
        }
        return sensors;
    },

    _parseTemperature: function(iteration) {
        let temperatureLine = this._output[iteration + 3];
        let temperatureArray = temperatureLine.split(":");
        return { label: temperatureArray[0], temp: temperatureArray[1] };
    },

    //  To be used later
    _parseFanSpeed: function(iteration) {
        let fanSpeedLine = this._output[iteration + 2];
        let fanSpeedArray = fanSpeedLine.split(":");
        return { label: fanSpeedArray[0], rpm: fanSpeedArray[1] };
    }
});
