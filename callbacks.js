
// setTimeout(() => {
//     console.log('que tal');
// }, 1000);

const getUsuarioByID = (id , callback) => {
    const usuario = {
        id,
        nombre: 'Karl'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500);
}

getUsuarioByID(10, () => {
    console.log('hola mundo');
});














