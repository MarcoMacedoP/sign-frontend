/*Este layout ocupa el 50% de la pantalla con una imagen
y el otro 50% con el documento, ideal para mostrar información
o formularios. (Por ejemplo se usa en el login-sigin)

Unicamente recibe como props los atributos respectivos a la imagen (alt y src)
*/
import React from "react";
import "./styles/ImageLayout.scss";

class ImageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.Image = React.createRef();
  }
  render() {
    return (
      <main className="double-column ImageLayout">
        <section className="ImageLayout__img col-one" ref={this.Image} />
        <section className="ImageLayout__children col-two">
          {this.props.children}
        </section>
      </main>
    );
  }

  componentDidMount() {
    this.Image.current.style.backgroundImage = `url(${this.props.img})`;
  }
}
export default ImageLayout;
