
import "./App.css"
import { useLayoutEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iphonex from "./assets/iphonex.png"
import iphone8plus from "./assets/iphone8plus.png"
import mackbook from "./assets/mackbook.png"
import iPad from "./assets/iPad.png"
  
import ultra from "./assets/relogio-ultra.svg"
import rosa from "./assets/relogio-rose.svg"
 import preto from "./assets/relogio-preto.svg"



function Body() {
let elementos = [2,4,7,3,9,1,6,5,8]

   function amostrar(){
console.log(elementos.sort((a,b)=> a-b))
   }

   amostrar()
  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.to("#imagen2", {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".containers2",
        scrub: true,
        start: "top 50%",
        end: "bottom 80%",
  
      }
    })


    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".imagen3", {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".containers3",
        scrub: true,
        start: "top 500",
        end: "bottom 700",
      }
    })

    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".imagen4", {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".containers4",
        start: "top 70%",
        end: "bottom 100%",
        scrub:true

       
      }
    })
   

    gsap.registerPlugin(ScrollTrigger)
    gsap.timeline({
      scrollTrigger: {
        trigger: ".models-container",
        scrub: true,
        start: "top 50%",
        end: "bottom 90%",
   

      }
    })

      .fromTo("#model-1", {
        opacity: 0,
        y: 160,
      }, {
        opacity: 1,
        y: 0
      })
      .fromTo("#model-2", {
        opacity: 0,
        y: 160,
      }, {
        opacity: 1,
        y: 0
      })
      .fromTo("#model-3", {
        opacity: 0,
        y: 160,
      }, {
        opacity: 1,
        y: 0
      })

    


    return () => {
      gsap.killTweensOf(".models-item")
    }


  }, [])

  return (
    <>



      <div style={{ height: "600px", width: "100%", backgroundColor: "#F5F5F7" }} className="d-flex containers1 position-relative justify-content-center">
        <div className=" position-absolute mt-5">
          <h1 className=" text-center " >iphone X</h1>
          <p className="">Veja o mundo de outro ângulo</p>
          <button className="btn btn-primary me-5">saiba mais</button>
          <button className="btn btn-outline-primary">comprar</button>
        </div>
        <img style={{ height: "300px", marginTop: "200px" }} src={iphonex} alt="Smartphone iphone x" />

      </div>

      <div style={{ height: "600px", width: "100%", backgroundColor: "#F5F5F7" }} className="d-flex containers2  position-relative justify-content-center">
        <div id="imagen2" className="  position-absolute ">
          <h1 className=" text-center " >iphone 8 plus</h1>
          <p className="imagen2">Veja o mundo de outro ângulo</p>
          <button className=" imagen2 btn btn-primary me-5">saiba mais</button>
          <button className=" imagen2 btn btn-outline-primary">comprar</button>
        </div>
        <img id="imagen2" style={{ height: "330px", width:"200px", marginTop: "200px" }} src={iphone8plus} alt="Smartphone iphone 8 Plus" />
      </div>

      <section style={{ backgroundColor: "#F5F5F7" }} className="models-container">
        <h2 className="title text-center">Qual é o Apple Watch ideal para você?</h2>

        <div className="models-content" >

          <div className="models-item " id="model-1">
            <img src={preto} alt="Relogio Preto" />

            <h4 className="models-title text-center">Apple Watch Series 8</h4>
            <p className="models-description text-center">A partir de <strong>R$ 5.299</strong></p>
          </div>

          <div className="models-item  " id="model-2">
            <img src={rosa} alt="Relogio Rose" />

            <h4 className="models-title text-center">Apple Watch SE</h4>
            <p className="models-description text-center">A partir de <strong>R$ 3.399</strong></p>
          </div>

          <div className="models-item  " id="model-3">
            <img src={ultra} alt="Relogio Ultra" />

            <h4 className="models-title text-center">Apple Watch Ultra</h4>
            <p className="models-description text-center">A partir de <strong>R$ 10.299</strong></p>
          </div>
        </div>
      </section>

      <div style={{ height: "600px", width: "100%", backgroundColor: "#F5F5F7" }} className="d-flex containers3  position-relative justify-content-center">
        <div className=" position-absolute mt-5">
          <h1 className=" imagen3 text-center " >Mackbook</h1>
          <p className="imagen3">Veja o mundo de outro ângulo</p>
          <button className=" imagen3 btn btn-primary me-5">saiba mais</button>
          <button className=" imagen3 btn btn-outline-primary">comprar</button>
        </div>
        <img className="imagen3" id="mackbook" style={{ height: "200px", marginTop: "200px" }} src={mackbook} alt="mackbook" />
      </div>

      <div style={{ height: "600px", width: "100%", backgroundColor: "#F5F5F7" }} className="d-flex containers4   position-relative justify-content-center">
        <div className="imagen4 position-absolute ">
          <h1 className=" text-center"> ipad </h1>
          <p >Veja o mundo de outro ângulo</p>
          <button className=" btn btn-primary me-5">saiba mais</button>
          <button className=" btn btn-outline-primary">comprar</button>
        </div>
        <img className="imagen4" style={{ marginTop: "200px", height: "380px" }} src={iPad} alt="Dispositivo Ipad" />
      </div>











    </>
  )
}

export default Body
