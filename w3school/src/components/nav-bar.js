function Navbar (){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navBar">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link text-white" id="navLinks" aria-current="page" href="/" >HTML</a>
            <a class="nav-link text-white" id="navLinks" href="/"  >CSS</a>
            <a class="nav-link text-white" id="navLinks" href="/" >JAVASCRIPT</a>
            <a class="nav-link text-white" id="navLinks" href="/" >SQL</a>
            <a class="nav-link text-white" id="navLinks" href="/" >PYTHON</a>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Navbar;