const clientes = require('../models/clientesModel')

// funcion para acceder al modelo clientes y crear un cliente nuevo // POST
const createClient = async (req, res) => {
  const nombre = req.body.nombre
  const apellido = req.body.apellido
  const direccion = req.body.direccion
  // console.log(req.body)
  if( !nombre || !apellido || !direccion) {
    res.status(400).json({msg: "imposible procesar la informacion, datos incompletos"})
  } else {
  await clientes.create({
    nombre: nombre,
    apellido: apellido,
    direccion: direccion,
  })
  res.status(200).json({msg: "usuario creado exitosamente"})
  console.log('usuario creado exitosamente')
  }
};

// Listar los elementos de la tabla clientes // GET
const getAllClients = async (req, res) => {
  try {
  const lista = await clientes.findAll();
  res.status(200).json(lista);
  } catch (error) {
    res.status(400).json({msg: error})
  }
  // console.log(JSON.stringify(lista));
}
// actualizar un recurso de la base de datos // PUT


const updateClient = async (req, res) => {
  const idConsultada = await req.params.id

  const clientId = await clientes.findAll({ where: {id: idConsultada } })
  if(clientId.length === 1){
    const {nombre, apellido, direccion} = req.body
  await clientes.update({ 
    nombre: nombre,
    apellido: apellido,
    direccion: direccion
  }, { where:{ id: idConsultada }})
    res.status(200).json({msg: "registro actualizado correctamente"})
    console.log('registro actualizado correctamente')
  } else {
    res.status(400).json({msg: `no se encontro el registro con id: ${idConsultada}`})
    console.log('no se encontro el registro')
  }
}

// DELETE

const deleteClient = async (req, res) => {
  const idObtenida = await req.params.id
  const clientId = await clientes.findAll({ where: { id: idObtenida }})
  if(clientId.length === 1){
  await clientes.destroy({ where: { id: idObtenida }})
    res.status(200).json({msg: "Registro borrado correctamente"})
    console.log('registro borrado correctamente')
  } else {
    res.status(400).json({msg: "registro que intenta borrar no existe"})
    console.log('no se encontro el registro')
  }
}

// GET 1 client

const getClientDetail = async (req, res) => {
  const clientId = req.params.id
  const idOnDb = await clientes.findOne({ // si el id no existe devuelve null
    where:{ id: clientId }})
   if(idOnDb === null) { 
    res.status(400).json({msg: "el id de cliente no existe en la base de datos"})
   } else {
    const client = await clientes.findAll({where: {id: clientId}})
    res.status(200).json(client)
}}

module.exports = {
  createClient,
  updateClient,
  getAllClients,
  deleteClient,
  getClientDetail
}
