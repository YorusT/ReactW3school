import './HtmlIntroduction.css';

function HtmlIntroduction (){
    return(
        <div class="container">
        <h1>HTML Introduction</h1>
        <div class="buttonContainer">
          <a class="previousButton" href="/"> &lt; Previous </a>
          <a class="nextButton" href="/"> Next &gt;</a>
      </div>
        <h2>
          <ul>What is HTML?
            <li> HTML stands for Hyper Text Markup Language</li>
            <li> HTML is the standard markup language for creating Web pages</li>
            <li>HTML describes the structure of a Web page</li>
            <li>HTML consists of a series of elements</li>
            <li>HTML elements tell the browser how to display the content</li>
            <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
          </ul>
        </h2>
      </div>
      
      
    )
}

export default HtmlIntroduction;