import {
    photoFront,
    photoBack,
    noteImage,
    cassetteImage,
    voice,
} from "../assets/index.js";

export const evidenceMocks = [
    {
        id: "group-photo",
        type: "photo",
        image: {
            front: photoFront,
            back: photoBack,
        },
        audio: null,
    },
    {
        id: "vorontsov-note",
        type: "note",
        image: {
            front: noteImage,
            back: null,
        },
        audio: null,
    },
    {
        id: "line-13-cassette",
        type: "audio",
        image: {
            front: cassetteImage,
            back: null,
        },
        audio: {
            src: voice,
        },
    },
];
