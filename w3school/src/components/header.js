function Header (){
    return(
        <div className="w-100 bg-dark" id="headcont">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ms-5">
    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <img className="logo" src="assets/logo-sito.png" alt=""></img>
    </a>

    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a href="/" className="nav-link px-2 link-light">Home</a></li>
      <li><a href="/" className="nav-link px-2 link-light">Features</a></li>
      <li><a href="/" className="nav-link px-2 link-light">Pricing</a></li>
      <li><a href="/" className="nav-link px-2 link-light">FAQs</a></li>
      <li><a href="/" className="nav-link px-2 link-light">About</a></li>
    </ul>

    <div className="col-md-3 text-end me-5">
      <button type="button" className="btn btn-outline-info me-2">Login</button>
      <button type="button" className="btn btn-info">Sign-up</button>
    </div>
  </header>
</div>

    )
}

export default Header;