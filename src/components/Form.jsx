import { useState, useEffect } from "react"


const Form = () => {

    // const getDate = () => {
    //     const datos = localStorage.getItem("dates");
    //     if (datos) {
    //         return JSON.parse(datos);
    //     } else {
    //         return [];
    //     }
    // }

    // JSON.parse(localStorage.getItem('dates')) ?? []

    const [dates, setDates] = useState([]);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [fechaCita, setFechaCita] = useState('');
    const [genero, setGenero] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(() => {
        const storedDates = JSON.parse(localStorage.getItem('dates'));
        if (storedDates) {
            setDates(storedDates);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const fechaSistema = new Date();

        const objectDate = {
            nombre,
            fechaSistema,
        }

        console.log(objectDate)
        setDates([...dates, objectDate])

        setNombre('');
        setEdad('');
        setFechaCita('');
        setGenero('');
        setDireccion('');
        setTelefono('');
    }

    useEffect(() => {
        localStorage.setItem('dates', JSON.stringify(dates));
    }, [dates]);

    return (
        <div className="flex justify-center items-center bg-gray-400 h-auto">
            <div className="md:w-1/2 lg:w-2/5 mt-5 p-3 rounded-md">

                <h2 className="text-white text-2xl font-extrabold mb-4">
                    Nueva cita:
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="items-center ml-6 rounded-md">

                    <div className="mb-5">
                        <label className="block text-blue-700 font-bold"
                            htmlFor="nombre">Nombre</label>

                        <input
                            className="border-2 w-full p-2 rounded-md mt-2"
                            type="text"
                            id="name"
                            placeholder="Ingrese su nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-blue-700 font-bold"
                            htmlFor="edad">Edad</label>

                        <input
                            className=" border-2 w-full p-2 rounded-md mt-2"
                            type="text"
                            id="edad"
                            placeholder="Ingrese su edad"
                            value={edad}
                            onChange={(e) => setEdad(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-blue-700 font-bold"
                            htmlFor="fecha">Fecha de la cita</label>

                        <input
                            className=" border-2 w-full p-2 rounded-md mt-2"
                            id="date"
                            type="date"
                            value={fechaCita}
                            onChange={(e) => setFechaCita(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-blue-700 font-bold"
                            htmlFor="genero">Genero</label>

                        <input
                            className=" border-2 w-full p-2 rounded-md mt-2"
                            id="genero"
                            placeholder="Especifique su Genero"
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-blue-700 font-bold"
                            htmlFor="direccion">Direccion</label>

                        <input
                            className=" border-2 w-full p-2 rounded-md mt-2"
                            id="direccion"
                            placeholder="Direccion"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-blue-700 font-bold"
                            htmlFor="telefono">Telefono</label>

                        <input
                            className="border-2 w-full p-2 rounded-md mt-2"
                            id="telefono"
                            placeholder="Numero telefonico"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>

                    <input
                        type="submit"
                        className="bg-blue-700 mt-5 w-full p-3 text-white uppercase font-bold hover:bg-blue-800 cursor-pointer transition-colors"
                        value="Creando cita nueva"
                    />

                </form>

            </div>
        </div>
    )
}

export default Form