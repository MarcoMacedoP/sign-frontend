import React from 'react';
import BlogEntry from './../../components/Blogentry';
import BlogPost from './../../components/BlogPost';

import imgObjetivosGenerales from './images/objetivos-generales.jpg';
import imgObjetivosEspecificos from './images/objetivos-especificos.jpg';

const Objetivos = ()=>(
    <BlogPost>
        <h1 className="headline-two">Objetivos</h1>
        <BlogEntry
            title="Objetivos generales"
            description="Crear un prototipo de software que permita las empresas llevar el control de los procesos operativos tales como el gestionamiento de ventas, aprovisionamiento y planificación de sus negocios de manera remota mediante el uso de metodologías Lean Six Sigma, Kanban."
            media={imgObjetivosGenerales}
        />
        <BlogEntry title="Objetivos especificos" media={imgObjetivosEspecificos} position="left">
            <ul className="Blog-Entry__p">
                <li>Brindar al usuario herramientas sencillas para el control de clientes, ventas, eventos y ganancias.</li>
                <li>Proporcionar al usuario información actualizada vía web del estado de los eventos en curso, concluidos y por iniciar.</li>
                <li>Dar a los usuarios un registro de las horas y entradas de sus empleados, y calcular el salario de los mismos basados en datos reales.</li>
                <li>Implementar las metodologìas Lean Six Sigma, Kanban en el software para que sean fácil de aplicar para el usuario.</li>
                <li>Crear una base de datos que permita almacenar los datos de los usuarios correctamente.</li>
                <li>Crear un servicio web que sirva para hacer consultas a la base de datos.</li>
                <li>Diseñar una interfaz gráfica web que de manera sencilla solucione los problemas de los usuario.</li>
            </ul>
        </BlogEntry>
    </BlogPost>
);
export default Objetivos;