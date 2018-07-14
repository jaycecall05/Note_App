console.log('Staring notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Fetching note', title);
};

var removeNote = (title) => {
    console.log('Deleting Note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

