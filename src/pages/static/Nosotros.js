import React from 'react';
import BlogEntry from './../../components/Blogentry';
import BlogPost from './../../components/BlogPost';

import imgProblema from './images/problema-uno.jpg';
import videoSegundoProblema from './images/problema-dos.mp4';
import posterSegundoProblema from './images/problema-dos.png';
import imgSolucion from './images/solucion-uno.jpg';
import imgSolucion2 from './images/solucion-dos.jpg';
import imgProyecto from './images/the-project.jpg';

const Nosotros = ()=> {
        return ( 
        <BlogPost>
            <h1 className="headline-two">Sobre Nosotros</h1>
            <BlogEntry 
                title="El problema" 
                description="La principal problemática que presenta la mayoría de los negocios o microempresas al crecer aceleradamente es la falta de control de usuarios, eventos, clientes y proveedores. Tanto como el control administrativo como tener noción de ingresos, egresos, ganancias y pérdidas." 
                mediaType="img" 
                media={imgProblema}
            />
            <BlogEntry 
                description="La falta de organización provoca grandes  estragos principalmente administrativos y operativos ya que baja el rendimiento en el servicio y al mismo tiempo el rendimiento en las utilidades y por consecuencia se tiene una baja monetaria y de servicio." 
                mediaType="video" 
                media={videoSegundoProblema}
                poster={posterSegundoProblema}
                position="left"
            />
             <BlogEntry 
                title="Nuestra solución"
                description="La importancia de este proyecto recae en la imperante necesidad que los negocios cargan consigo respecto a la administración correcta sus ingresos, pues el llevar este proceso de una manera tradicional puede llevar a problemas como la traspapelación, el manejo de opaco de las cuentas que lleva un negocio, una declaración de impuestos mal llevada, un desconocimiento sobre el estado en el que se encuentra el inventario, etc ." 
                mediaType="img" 
                media={imgSolucion}
            />
            <BlogEntry 
                description="La importancia de este proyecto recae en la imperante necesidad que los negocios cargan consigo respecto a la administración correcta sus ingresos, pues el llevar este proceso de una manera tradicional puede llevar a problemas como la traspapelación, el manejo de opaco de las cuentas que lleva un negocio, una declaración de impuestos mal llevada, un desconocimiento sobre el estado en el que se encuentra el inventario, etc ." 
                mediaType="img" 
                media={imgSolucion2}
                position="left"
            />
            <BlogEntry
                title="El proyecto" 
                description=".Actualmente la administración de negocios es un tema complejo para la gente común que quiere emprender o administrar su negocio, las herramientas en lo que al software refiere para la administración son pocas y están mal implementadas, cuando alguien quiere administrar su negocio tiene la necesidad de recurrir a alguien externo que le realice un software de acuerdo a sus necesidades. 
                Este es el proyecto que propone solucionar esta problematica." 
                mediaType="img" 
                media={imgProyecto}
            />
        </BlogPost>
        )
}
export default Nosotros;