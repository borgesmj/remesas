import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import BackBtn from "../Icons/BackBtn";
import BuildMessage from "../Process/ConstrMensaje";

const Page4 = ({
  order,
  setCurrStep,
  setCurrStepMessage,
  tasaDeCambio,
  setOrder,
  tasaUsdVen
}) => {
  useEffect(() => {
    setCurrStep(4);
    setCurrStepMessage("Por favor, verifica los datos");
  });
  const navigate = useNavigate();
  const handleClick = (event, order) => {
    event.preventDefault();

    setTimeout(() => {
      const mensajeWhatsapp = BuildMessage(order);
      console.log(mensajeWhatsapp);
      let whatsappLink =
        "https://api.whatsapp.com/send?phone=573184255610&text=" +
        encodeURI(mensajeWhatsapp);
      window.open(whatsappLink, "_blank");
    }, 1000);
    setOrder({});
  };

  return (
    <div className="bg-[#4295e7] h-fit p-4 flex flex-col justify-between items-center mt-8 w-full text-xl md:text-2xl">
      {Object.keys(order).length > 0 ? (
        <>
          <div className="campo w-full h-8 flex flex-row justify-between my-4 items-center">
            <NavLink
              onClick={() => navigate(-1)}
              className="flex flex-row justify-start w-full text-2xl lg:text-4xl"
            >
              <BackBtn /> <span className="font-bold ml-4">Regresar</span>
            </NavLink>
          </div>
          <h1 className="font-bold">Envío de Remesas a Venezuela</h1>
          <table className="w-full  text-[0.9rem] leading-[1rem] md:text-xl lg:text-2xl">
            <tbody className="w-full flex flex-col">
              <tr className="w-full flex flex-row justify-between items-center">
                <th className="w-2/5 flex justify-end md:ml-2">Nombre:</th>
                <td className="w-3/5 ml-2 lg:ml-4">
                  {order.datosPersonales?.nombre}
                </td>
              </tr>
              <tr className="w-full flex flex-row justify-between items-center">
                <th className="w-2/5 flex justify-end md:ml-2">Cédula:</th>
                <td className="w-3/5 ml-2 lg:ml-4">
                  {order.datosPersonales?.documento}
                </td>
              </tr>
              <tr className="w-full flex flex-row justify-between items-center">
                <th className="w-2/5 flex justify-end md:ml-2">Banco:</th>
                <td className="w-3/5 ml-2 lg:ml-4">
                  {order.datosPersonales?.banco}
                </td>
              </tr>
              <tr className="w-full flex flex-row justify-between items-center">
                <th className="w-2/5 flex justify-end md:ml-2">Cuenta:</th>
                <td className="w-3/5 ml-2 lg:ml-4">
                  {order.datosPersonales?.cuenta}
                </td>
              </tr>
              <tr className="w-full flex flex-row justify-between items-center">
                <th className="w-2/5 flex justify-end md:ml-2">
                  Monto a Enviar:
                </th>
                <td className="w-3/5 ml-2 lg:ml-4">{order.monto} COP</td>
              </tr>
              <tr className="w-full flex flex-row justify-between items-center">
                <th className="w-2/5 flex justify-end md:ml-2">
                  Monto a recibir:
                </th>
                <td className="w-3/5 ml-2 lg:ml-4">
                  {(order.monto / tasaDeCambio).toFixed(2)} Bs
                </td>
              </tr>
              <tr className="w-full flex flex-row justify-between items-center">
                <th className="w-2/5 flex justify-end md:ml-2">
                  Dolares aprox.:
                </th>
                <td className="w-3/5  ml-2 lg:ml-4">
                  {((order.monto / tasaDeCambio) / tasaUsdVen).toFixed(2)} $
                </td>
              </tr>
              <tr className="flex justify-center"><td className="text-center"><span className="w-full text-center text-xs lg:text-lg text-red-600 font-bold">El cálculo de dolares es solo referencial</span></td></tr>
              <tr className="w-full flex flex-row justify-between items-center">
                <th className="w-2/5 flex justify-end md:ml-2">
                  Forma de Pago:
                </th>
                <td className="w-3/5 md:text-lg ml-2 lg:ml-4">
                  {order.formaPago}
                </td>
              </tr>
              
            </tbody>
          </table>
          <div className="campo w-full py-4 m-2 md:m-4 flex flex-row justify-around">
            <button
              className="text-xl lg:text-2xl text-white font-bold w-1/3 h-8 p-8 bg-lime-600 flex justify-center items-center mt-0 rounded-xl lg:border-[#4295e7] lg:border-[4px] lg:hover:border-white lg:hover:border-[4px] lg:hover:border-solid"
              onClick={(e) => handleClick(e, order)}
            >
              Enviar
            </button>
          </div>
        </>
      ) : (
        <NavLink to="/remesas/">Regresar al Inicio</NavLink>
      )}
    </div>
  );
};

export default Page4;
