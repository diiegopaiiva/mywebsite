import React from 'react'
import './App.css'
import './carousel.css'
import imagem from './imagens/flogo.png'
import slide1 from './imagens/slide1.png'
import slide2 from './imagens/slide2.png'
import slide3 from './imagens/slide3.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import UncontrolledExample from './components/Carrossel'



function App() {


  return ( 
    <>
      <header>
        <nav class="navbar navbar-dark bg-dark fixed-top" aria-label="First navbar example">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html"><img src={imagem} alt="Logo" className='logo-ajustada' /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample01">
              <ul class="alinhar-esquerda navbar-nav justify-content-start flex-grow-1 ms-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index1.html">Direitos básicos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index2.html">Programas governamentais</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index3.html">Legislação</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index4.html">Recursos e contatos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index5.html">Ultimas notícias</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index6.html">Perguntas frequentes (FAQ)</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index7.html">Sobre nós</a>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div style={{ marginTop: '-20px', width: '100%', padding: '0' }}>
          <UncontrolledExample />
        </div>

      </main>


    </>


  )
}

export default App
