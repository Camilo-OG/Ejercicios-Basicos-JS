const emitirMensaje = (req, res) => res.send("Hola Mundo, este es un mensaje de respuesta desde el controlador");

const userList = (req, res) => { res.send('En esta ruta tendremos la lista de usuarios desde controllers') }

const userDetail = (req, res) => { res.send(req.params) };

module.exports = {
  emitirMensaje,
  userList,
  userDetail
};