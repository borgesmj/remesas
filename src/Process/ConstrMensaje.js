const BuildMessage = (order) => {
    let mensajeEnvio = ''
    mensajeEnvio += 'Nueva Solicitud de Remesas'
    mensajeEnvio += `\nnúmero: ${order.id}`
    mensajeEnvio += `\nMonto: ${order.monto}`
    mensajeEnvio += `\nDatos:`
    mensajeEnvio += `\nNombre: *${order.datosPersonales.nombre}*`
    mensajeEnvio += `\nCédula: *${order.datosPersonales.documento}*`
    mensajeEnvio += `\nBanco: *${order.datosPersonales.banco}*`
    mensajeEnvio += `\nCuenta: *${order.datosPersonales.cuenta}*`
    mensajeEnvio += `\nMétodo de pago: *${order.formaPago}*`

    return mensajeEnvio
}

export default BuildMessage