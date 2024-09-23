import { MusicasStyle } from "../css/MusicasStyle";
import imagem1 from "../assets/img1.jpg"
import imagem2 from "../assets/img2.jpg"
import imagem3 from "../assets/img3.jpg"
import imagem4 from "../assets/img4.jpg"
import imagem5 from "../assets/img5.jpg"
import imagem6 from "../assets/img6.jpg"
import imagem7 from "../assets/img7.jpg"
import imagem8 from "../assets/img8.jpg"
import imagem9 from "../assets/img9.jpg"
import imagem10 from "../assets/img10.jpg"
import imagem11 from "../assets/img11.jpg"

const Musicas = () => {
  return (
    <MusicasStyle>
      <header>
        <h1>Loja de Músicas Ritmo</h1>
      </header>
      <main>
        <article className="produto-grid">
          <section className="produto-item span-row-2">
            <img src={imagem1} alt="Produto-1" id="image" />
            <div>
              <h3>Produto-1</h3>
              <p>R$ 100,00</p>
            </div>
          </section>

          <section className="produto-item ">
            <img src={imagem2} alt="Produto-2" id="image" />
            <div>
              <h3>Produto-2</h3>
              <p>R$ 250,00</p>
            </div>
          </section>

          <section className="produto-item">
            <img src={imagem3} alt="Produto-3" id="image" />
            <div>
              <h3>Produto-3</h3>
              <p>R$ 300,00</p>
            </div>
          </section>

          <section className="produto-item span-row-2">
            <img src={imagem4} alt="Produto-4" id="image" />
            <div>
              <h3>Produto-4</h3>
              <p>R$ 400,00</p>
            </div>
          </section>

          <section className="produto-item  span-row-2 span-col-2">
            <img src={imagem5} alt="Produto-5" id="image" />
            <div>
              <h3>Produto-5</h3>
              <p>R$ 500,00</p>
            </div>
          </section>

          <section className="produto-item">
            <img src={imagem6} alt="Produto-6" id="image" />
            <div>
              <h3>Produto-6</h3>
              <p>R$ 600,00</p>
            </div>
          </section>

          <section className="produto-item">
            <img src={imagem7} alt="Produto-7" id="image" />
            <div>
              <h3>Produto-7</h3>
              <p>R$ 700,00</p>
            </div>
          </section>

          <section className="produto-item">
            <img src={imagem8} alt="Produto-8" id="image" />
            <div>
              <h3>Produto-8</h3>
              <p>R$ 800,00</p>
            </div>
          </section>

          <section className="produto-item">
            <img src={imagem9} alt="Produto-9" id="image" />
            <div>
              <h3>Produto-9</h3>
              <p>R$ 750,00</p>
            </div>
          </section>

          <section className="produto-item ">
            <img src={imagem10} alt="Produto-10" id="image" />
            <div>
              <h3>Produto-10</h3>
              <p>R$ 1000,00</p>
            </div>
          </section>

          <section className="produto-item ">
            <img src={imagem11} alt="Produto-11" id="image" />
            <div>
              <h3>Produto-11</h3>
              <p>R$ 1000,00</p>
            </div>
          </section>
        </article>
      </main>
    </MusicasStyle>
  );
};

export default Musicas;
