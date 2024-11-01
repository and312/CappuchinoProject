'use client'

import Tacita from './assets/Tacita.png';
import Telefono from './assets/Telefono.png';
import Admiracion from './assets/Admiracion.png';
import Toga from './assets/Toga.png';
import Interrogacion from './assets/Interrogacion.png';
import { useState, useEffect } from 'react'
import { Info, Phone, ChevronRight, ChevronDown, Menu, X, Trash2, Save } from 'lucide-react'

const carreras = [
  { id: 1, nombre: 'Nivel A', materias: ['Programación I', 'Matemáticas', 'Física'] },
  { id: 2, nombre: 'Nivel B', materias: ['Anatomía', 'Biología', 'Química'] },
  { id: 3, nombre: 'Nivel C', materias: ['Derecho Civil', 'Derecho Penal', 'Filosofía del Derecho'] },
  { id: 4, nombre: 'Nivel D', materias: ['Programación I', 'Matemáticas', 'Física'] },
  { id: 5, nombre: 'Nivel E', materias: ['Anatomía', 'Biología', 'Química'] },
  { id: 6, nombre: 'Nivel F', materias: ['Derecho Civil', 'Derecho Penal', 'Filosofía del Derecho'] },
  { id: 7, nombre: 'Nivel G', materias: ['Programación I', 'Matemáticas', 'Física'] },
  { id: 8, nombre: 'Nivel H', materias: ['Anatomía', 'Biología', 'Química'] },
  { id: 9, nombre: 'Nivel I', materias: ['Derecho Civil', 'Derecho Penal', 'Filosofía del Derecho'] },
  
]

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes','Sábado']
const horas = ['06:45', '07:30', '08:15', '09:00', '09:45', '10:30', '11:15', '12:00', 
  '12:45', '13:30', '14:15', '15:00', '15:45', '16:30', '17:15', '18:00', '18:45', '19:30', '20:15', '21:00']

export default function Capuchino() {
  const [carreraExpandida, setCarreraExpandida] = useState(null)
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null)
  const [celdaColoreada, setCeldaColoreada] = useState(null)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [busqueda, setBusqueda] = useState('') // Estado para el campo de búsqueda

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuAbierto(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleCarrera = (carreraId) => {
    setCarreraExpandida(carreraExpandida === carreraId ? null : carreraId)
    setMateriaSeleccionada(null)
    setCeldaColoreada(null)
  }

  const seleccionarMateria = (materia) => {
    setMateriaSeleccionada(materia)
    if (window.innerWidth < 768) {
      setMenuAbierto(false)
    }
  }

  const colorearCelda = (dia, hora) => {
    if (materiaSeleccionada) {
      setCeldaColoreada({ dia, hora, materia: materiaSeleccionada })
    }
  }

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  const limpiarHorario = () => {
    setCeldaColoreada(null)
    setMateriaSeleccionada(null)
  }

  const guardarHorario = () => {
    // Aquí iría la lógica para guardar el horario
    alert('Horario guardado')
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Cabecera con degradado */}
      <header className="bg-custom-blue-dark p-4 flex items-center fixed top-0 left-0 right-0 z-50"> { /*****************/}
        <button onClick={toggleMenu} className="text-white md:hidden mr-4">
          {menuAbierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Contenedor para texto e imagen */}
        <div className="flex items-center space-x-2 flex-grow">
          <h1 className="text-white text-xl md:text-2xl font-bold">Cappuchino</h1>
          <img src={Tacita} alt="Logo Tacita" className="h-8 w-8" />
        </div>

        {/* Iconos a la derecha */}
        <div className="flex items-center space-x-4">
        <img src={Telefono} alt="Logo Telefono" className="h-8 w-8" />
        <img src={Toga} alt="Logo Toga" className="h-8 w-8" />
        <img src={Admiracion} alt="Logo Admiracion" className="h-8 w-8" />
        <img src={Interrogacion} alt="Logo Interrogacion" className="h-8 w-8" />
        </div>
      </header>


      <div className="flex flex-1 overflow-hidden pt-16">
        {/* Menú lateral */}
        <nav
          className={`
            fixed top-16 bottom-0 left-0 z-40 w-70 p-4 rounded-lg shadow-xl border border-white/30 overflow-y-auto transition-transform duration-300 ease-in-out transform 
            ${menuAbierto ? 'translate-x-0' : '-translate-x-full'}
            md:relative md:translate-x-0 md:top-0
            bg-custom-white
          `} /*********TAMAÑO DEL ANCHO DEL MENÚ estaba w-80********/
        >
 

          <h2 className="text-lg font-semibold mb-4 text-custom-gray-medium">Licenciatura en Informática</h2> {/*****************/}
          
          {/* Campo de búsqueda */}
          <input
            type="text"
            placeholder=" Buscar materia..." /*****************/
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full p-2 mb-4 border rounded bg-custom-gray-lighter borderRadius rounded-full" /*****************/
          />
          <ul>
            {carreras.map((carrera) => (
              <li key={carrera.id} className="mb-2">
                <button
                  onClick={() => toggleCarrera(carrera.id)}
                  className="flex items-center justify-between w-full text-left p-2 hover:bg-custom-gray-light rounded text-custom-gray-dark"  /*****************/
                >
                  {carrera.nombre}
                  {carreraExpandida === carrera.id ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                {carreraExpandida === carrera.id && (
                  <ul className="ml-4 mt-2">
                    {carrera.materias.map((materia, index) => (
                      <li key={index}>
                        <button
                          onClick={() => seleccionarMateria(materia)}
                          className={`w-full text-left p-2 hover:bg-custom-gray-light rounded text-custom-gray-dark ${ /*****************/
                            materiaSeleccionada === materia ? 'bg-custom-blue-medium text-custom-white' : '' /*****************/
                          }`}
                        >
                          {materia}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Área principal */}
        <main className="flex-1 p-4 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-bold text-custom-gray-dark">Horario</h2> {/*****************/}
            <div className="flex space-x-2">
              <button
                onClick={limpiarHorario}
                className="p-2 bg-custom-red text-white rounded hover:bg-red-600 transition-colors" /*****************/
                aria-label="Limpiar horario"
              >
                <Trash2 className="h-5 w-5" />
              </button>
              <button
                onClick={guardarHorario}
                className="p-2 bg-custom-green text-white rounded hover:bg-green-600 transition-colors" /*****************/
                aria-label="Guardar horario"
              >
                <Save className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-[1000px] border-collapse min-w-[300px] md:min-w-[600px]">
              <thead>
                <tr>
                  <th className="border p-0 w-20 text-xs md:text-base"></th>
                  {diasSemana.map((dia) => (
                    <th key={dia} className="border p-0 w-20 text-xs md:text-base text-custom-gray-dark"> {/*********COLOR DIAS********/}
                      {dia}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {horas.map((hora) => (
                  <tr key={hora}>
                    <td className="border p-0 md:p-0 text-xs md:text-base text-center text-custom-gray-dark">{hora}</td> {/********COLOR HORAS*********/}
                    {diasSemana.map((dia) => (
                      <td
                        key={`${dia}-${hora}`}
                        className={`border p-0 md:p-0 text-xs md:text-base cursor-pointer hover:bg-gray ${//es para los bordes de la casilla
                          celdaColoreada &&
                          celdaColoreada.dia === dia &&
                          celdaColoreada.hora === hora
                            ? 'bg-green-200'
                            : ''
                        }`}
                        
                        onClick={() => colorearCelda(dia, hora)}
                      >
                        {celdaColoreada &&
                        celdaColoreada.dia === dia &&
                        celdaColoreada.hora === hora
                          ? celdaColoreada.materia
                          : ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
