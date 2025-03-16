
const Footer = ()=> {

    return (
  
      <footer>
            <div className="foot">
              
                <article>
                <h4>JOHN DOE</h4>
                <address>40 rue Laure Bielbold</address>
                <address>69009 Lyon France</address>
                <address>1020304050</address>
                <address>johndoe@gmail.com</address>
               
               </article>
               <article className="liens">
                <h4>Liens utiles</h4>
                <a href="./pages/Home.html">Home</a>
                <a href="./pages/contact.html">contact</a>
                <a href="./pages/mentionleg1">mention légales</a>
                <a href="./pages/offresrrv">offres services</a>
                <a href="./pages/portfolio.html">portfolio</a>
                <a href="./pages/profilgithub.html">profil github</a>
               </article>

               <article className="realisation">
                <h4>Mes dernières réalisation</h4>
                <span>Fresh food</span>
                <span>Restaurant akira</span>
                <span>Espace bien être</span>
                <span>SEO</span>
                <span>Création d'une api</span>
                <span>Maquette d'un site</span>
               </article>
            </div>
      </footer>
  
    )
  
  }
  
  export default Footer
  
  