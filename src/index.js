import { midiToNoteName } from '@tonaljs/midi';

console.clear();

/**
 * @returns chord
 */
function midiToChord(listOfNotes: Array<string>): string {

}

function onMIDISuccess(midiAccess) {
    for (var input of midiAccess.inputs.values()) {
        input.onmidimessage = (message) => {
            console.log(midiToNoteName(message.data[1]));
        };
    }
}

navigator.requestMIDIAccess()
  .then((access) => {
     // Get lists of available MIDI controllers
     const inputs = access.inputs.values();
     const outputs = access.outputs.values();

    access.onstatechange = function(e) {
       // Print information about the (dis)connected MIDI controller
       console.log(e.port.name, e.port.manufacturer, e.port.state);
    };

    onMIDISuccess(access)
  });