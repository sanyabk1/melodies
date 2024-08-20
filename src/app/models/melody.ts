export class Melody {
    title: string
    chords: string;

    get midiPath() {
        return `/midi/${this.title}.mid`;
    }
};