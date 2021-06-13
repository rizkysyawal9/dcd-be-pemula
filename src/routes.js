const {
  addNoteHandler, getAllNotesHandler, getNoteByIdHanlder, updateNoteByIdHandler, deleteNoteById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHanlder,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteById,
  },
];

module.exports = routes;
