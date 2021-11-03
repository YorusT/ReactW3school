import './sidebar.css';

function Sidebar (){
    return(
      <div id="container" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "220px"}}>

      <a href="/"  class="nav-link text-white" >
        <svg class="bi me-2" width="16" height="16"><use/></svg>
        HTML Home
      </a>

      <a href="/" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use/></svg>
        HTML Introdution
      </a>

      <a href="/" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use/></svg>
        HTML Editors
      </a>

      <a href="/" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use/></svg>
        HTML Basic
      </a>

      <a href="/" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use/></svg>
        HTML Elements
      </a>
</div>
      
    )
}

export default Sidebar;