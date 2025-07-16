import { Sling as Hamburger } from 'hamburger-react'

import { useState } from 'react';

function Header() {

    const [isOpen, setOpen] = useState(false)
    function verificar() {
        var largura = window.innerWidth
        var menu = document.getElementsByClassName("menu")[0]


        if (largura > 679) {
            menu.classList.remove("open")
            var body = document.querySelector("body")
            body.classList.remove("overflow")
            setOpen(false)

        }

    }

    window.addEventListener("resize", verificar)

    function menu() {

        var element = document.getElementsByClassName("menu")[0];
        element.classList.toggle("open")
        var body = document.querySelector("body")
        body.classList.toggle("overflow")

    }

    return (
        <>
            <header style={{ height: "40px", backgroundColor:"rgba(245, 245, 247, 0.8)" }} className=' m-0 p-0 m-auto align-content-center sticky-top m-0 p-0 '>
                <div className='position-fixed menu bg-white  sticky-top  ' style={{ minHeight: "100vh", width: "100%", zIndex: 1 }}>
                    <ul className='m-0 p-0 d-flex flex-column  '>

                        <list><a onClick={()=>{ return  menu(), setOpen(false)}} href='#iphone16Plus' className='ms-5'style={{fontSize:"30px"}}>iphone </a></list>
                        <list><a onClick={()=>{ return  menu(), setOpen(false)}} href='#iPadPro' className='ms-5' style={{fontSize:"30px"}} > iPad Pro</a></list>
                        <list><a onClick={()=>{ return  menu(), setOpen(false)}} href=' #AppleWatch' className='ms-5' style={{fontSize:"30px"}}> Apple Watch</a></list>
                        <list><a onClick={()=>{ return  menu(), setOpen(false)}} href='#Mackbook' className='ms-5' style={{fontSize:"30px"}}>Mackbook</a></list>
                        <list><a onClick={()=>{ return  menu(), setOpen(false)}} href='#airPods' className='ms-5' style={{fontSize:"30px"}}>airPods</a></list>
                        <list><a onClick={()=>{ return  menu(), setOpen(false)}} href='#Appletv' className='ms-5' style={{fontSize:"30px"}}>Apple tv</a></list>
                       

                    </ul>

                </div>
                <nav style={{ maxWidth: "900px" }} className='desktop m-auto m-0 m-0'>
                    <ul className='m-0 p-0 d-flex justify-content-between  '>
                        <img style={{ height: "30px", position: "relative", bottom: "3px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO3ZT4hNURzA8c8YjI1QkgzZkIX8S0ZS/pQ/+VNSipLIwkJZWhEWwkIhCzYWlGQhLCTKylr5v7CQxEwTwjCaGeXq1pl6vd575r1333vnar71W713zznfe86555zfYZS6WYLLeIZDcshs3EdSEIfljG3oK5JIY68csR1DJSTSmCcnzMGPMhKv0CYnPCojkcYBOaGrgsRTjJMTLpWR+I5FcsSLEhLpfFkpZwwVSTwOkz8a2sLithQLManM/9K3341b2IwxRb9PxeJQzly0axIrcBWfSwyZdBidDI0apngypyJrcAHvSpTRhyuhnobQibsVvkDF8RbnsBvrsAvn8aGKMu6FejMjfYNfqmhAlvEVW7OQ2IDBFkkkIdL6t9QjMR8/WyyRFCyeE2qRGIvnEQgk4dzSUWtv7I9AIMFZddAevjqtlnhYYt2piuURSAxlsQM4FoHITRlQfKZuRezIQuRlBCKdWYh8a7HE73on+TCDEYj4H3okwZQsRHoiEFmVhciTCEROZyFyPQKR3lo3iYUciUAkySInvD4CiQT99aaMOiqkOJsd7+vNDd+OQCIJ8SkkwWtiTwQCSYltfZp6qnp49UbQ+KQg/mBBLb1yKoLGJwVxR43MwkBEvdGlDs5EIJHgmjqZGHK3rZTowwwZsK/FIgdlSDV53yzjQdZ3jNNasL3vwXQNYFkTty79IS3VMDY24Sg8GC6FGs7qfwyz9BLoIjaFJFt6bJ0Z7g2P4k2FZ7uzOh2OlPSq7XhIHQ2Exqf5sJ0YP4Ln1+IGPuIXXuMEJjeh7aOMYoT8BfcegYzf+KxLAAAAAElFTkSuQmCC" alt="mac-os" />
                        <list><a href='#iphone16Plus'>iphone </a></list>
                        <list><a href='#iPadPro'>iPad Pro</a></list>
                        <list><a href=' #AppleWatch'> Apple Watch</a></list>
                        <list><a href='#Mackbook'>Mackbook</a></list>
                        <list><a href='#airPods'>airPods</a></list>
                        <list><a href='#Appletv'>Apple tv</a></list>
                        
                   
                    </ul>
                </nav>
                <nav id='mobile' className='align-content-center'>
                    <img id='apple' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO3ZT4hNURzA8c8YjI1QkgzZkIX8S0ZS/pQ/+VNSipLIwkJZWhEWwkIhCzYWlGQhLCTKylr5v7CQxEwTwjCaGeXq1pl6vd575r1333vnar71W713zznfe86555zfYZS6WYLLeIZDcshs3EdSEIfljG3oK5JIY68csR1DJSTSmCcnzMGPMhKv0CYnPCojkcYBOaGrgsRTjJMTLpWR+I5FcsSLEhLpfFkpZwwVSTwOkz8a2sLithQLManM/9K3341b2IwxRb9PxeJQzly0axIrcBWfSwyZdBidDI0apngypyJrcAHvSpTRhyuhnobQibsVvkDF8RbnsBvrsAvn8aGKMu6FejMjfYNfqmhAlvEVW7OQ2IDBFkkkIdL6t9QjMR8/WyyRFCyeE2qRGIvnEQgk4dzSUWtv7I9AIMFZddAevjqtlnhYYt2piuURSAxlsQM4FoHITRlQfKZuRezIQuRlBCKdWYh8a7HE73on+TCDEYj4H3okwZQsRHoiEFmVhciTCEROZyFyPQKR3lo3iYUciUAkySInvD4CiQT99aaMOiqkOJsd7+vNDd+OQCIJ8SkkwWtiTwQCSYltfZp6qnp49UbQ+KQg/mBBLb1yKoLGJwVxR43MwkBEvdGlDs5EIJHgmjqZGHK3rZTowwwZsK/FIgdlSDV53yzjQdZ3jNNasL3vwXQNYFkTty79IS3VMDY24Sg8GC6FGs7qfwyz9BLoIjaFJFt6bJ0Z7g2P4k2FZ7uzOh2OlPSq7XhIHQ2Exqf5sJ0YP4Ln1+IGPuIXXuMEJjeh7aOMYoT8BfcegYzf+KxLAAAAAElFTkSuQmCC" alt="mac-os" />
                    <div  className='d-flex align-content-center justify-content-between' >
                      
                        <span id='hamburguer' className='menu open' onClick={() => menu()}> < Hamburger toggled={isOpen} toggle={setOpen} /></span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header