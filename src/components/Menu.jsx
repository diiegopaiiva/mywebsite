function Menu() {
    return (
      <>
        <header>
          <nav className="navbar navbar-dark bg-dark fixed-top" aria-label="First navbar example">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html"><img src={imagem} alt="Logo" className="logo-ajustada" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarsExample01">
                <ul className="alinhar-esquerda navbar-nav justify-content-start flex-grow-1 ms-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index1.html">Direitos básicos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index2.html">Programas governamentais</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index3.html">Legislação</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index4.html">Recursos e contatos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index5.html">Ultimas notícias</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index6.html">Perguntas frequentes (FAQ)</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index7.html">Sobre nós</a>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                  <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <div style={{ marginTop: '-20px', width: '100%', padding: '0' }}>
            <Home />
          </div>
        </main>
      </>
    );
  }
  
  export default Menu;