import { Squeeze as Hamburger } from 'hamburger-react';

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
            <header style={{ height: "40px" }} className='bg-light m-0 p-0 m-auto align-content-center sticky-top m-0 p-0 '>
                <div className='position-fixed menu' style={{ minHeight: "100vh", width: "100%", backgroundColor: "white", zIndex: 1 }}>
                    <ul className='m-0 p-0 d-flex flex-column  '>

                        <list><a className='ms-5 text-black' style={{ fontSize: "30px" }}>loja</a></list>
                        <list><a className='ms-5 text-black' style={{ fontSize: "30px" }}>mac</a></list>
                        <list><a className='ms-5 text-black' style={{ fontSize: "30px" }}>Ipad</a></list>
                        <list><a className='ms-5 text-black' style={{ fontSize: "30px" }}>Iphone</a></list>
                        <list><a className='ms-5 text-black' style={{ fontSize: "30px" }}>watch</a></list>
                        <list><a className='ms-5 text-black' style={{ fontSize: "30px" }}>airPods</a></list>
                        <list><a className='ms-5 text-black' style={{ fontSize: "30px" }}>Tv e Casa</a></list>
                        <list><a className='ms-5 text-black' style={{ fontSize: "30px" }}>Entretenimento</a></list>
                        <list><a className='ms-5 text-black' style={{ fontSize: "30px" }}>Acessórios</a></list>

                    </ul>

                </div>
                <nav style={{ maxWidth: "900px" }} className='desktop m-auto m-0 m-0'>
                    <ul className='m-0 p-0 d-flex justify-content-between align '>
                        <img style={{ height: "30px", position: "relative", bottom: "3px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO3ZT4hNURzA8c8YjI1QkgzZkIX8S0ZS/pQ/+VNSipLIwkJZWhEWwkIhCzYWlGQhLCTKylr5v7CQxEwTwjCaGeXq1pl6vd575r1333vnar71W713zznfe86555zfYZS6WYLLeIZDcshs3EdSEIfljG3oK5JIY68csR1DJSTSmCcnzMGPMhKv0CYnPCojkcYBOaGrgsRTjJMTLpWR+I5FcsSLEhLpfFkpZwwVSTwOkz8a2sLithQLManM/9K3341b2IwxRb9PxeJQzly0axIrcBWfSwyZdBidDI0apngypyJrcAHvSpTRhyuhnobQibsVvkDF8RbnsBvrsAvn8aGKMu6FejMjfYNfqmhAlvEVW7OQ2IDBFkkkIdL6t9QjMR8/WyyRFCyeE2qRGIvnEQgk4dzSUWtv7I9AIMFZddAevjqtlnhYYt2piuURSAxlsQM4FoHITRlQfKZuRezIQuRlBCKdWYh8a7HE73on+TCDEYj4H3okwZQsRHoiEFmVhciTCEROZyFyPQKR3lo3iYUciUAkySInvD4CiQT99aaMOiqkOJsd7+vNDd+OQCIJ8SkkwWtiTwQCSYltfZp6qnp49UbQ+KQg/mBBLb1yKoLGJwVxR43MwkBEvdGlDs5EIJHgmjqZGHK3rZTowwwZsK/FIgdlSDV53yzjQdZ3jNNasL3vwXQNYFkTty79IS3VMDY24Sg8GC6FGs7qfwyz9BLoIjaFJFt6bJ0Z7g2P4k2FZ7uzOh2OlPSq7XhIHQ2Exqf5sJ0YP4Ln1+IGPuIXXuMEJjeh7aOMYoT8BfcegYzf+KxLAAAAAElFTkSuQmCC" alt="mac-os" />
                        <list><a>loja</a></list>
                        <list><a>mac</a></list>
                        <list><a>Ipad</a></list>
                        <list><a>Iphone</a></list>
                        <list><a>watch</a></list>
                        <list><a>airPods</a></list>
                        <list><a>Tv e Casa</a></list>
                        <list><a>Entretenimento</a></list>
                        <list><a>Acessórios</a></list>
                        <list><img style={{ height: "20px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQklEQVR4nO2WsU7DQBBEX2LhIpS4DQUIXEJs6uQDEr4AgWLF0FAYIfn/0Upz0omC+BYrgMhI29ztzNi3e2vDEb8IGVACG2AHvCl2WiuVMyqugWeg3xOWczWG4QRYRcJboALOgBNFAdTaC3lLcd1YSegduNkjZnu3yg3m7uPtJTRP4M0j8+Rjz6Ka2pumYiFuC0xTiGVUU0+tjNNIw7QG414kayQvammsU0itSNa9XhTSsHs+GJ1I+TeMc2l0f8K4HfGoTWswNiJZg3hx52mu8qeuUxYNEBuDqaiij0bSAEHjzjMyz6OReYkTy8h8MeAjUUWmr8DMazyJzHvVrVbH5opCjRRqGkxDvts8HHu4Yl/FC3Ahs2Ys86k6dK0x2OnXp9Va+amRRjVPxSz6M7GHPeU/mTcyfzykcTB/Ah4ObXwEhg/fODuywRhSvwAAAABJRU5ErkJggg==" alt="search--v1" /></list>
                    </ul>
                </nav>
                <nav id='mobile' className='align-content-center'>
                    <img id='apple' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO3ZT4hNURzA8c8YjI1QkgzZkIX8S0ZS/pQ/+VNSipLIwkJZWhEWwkIhCzYWlGQhLCTKylr5v7CQxEwTwjCaGeXq1pl6vd575r1333vnar71W713zznfe86555zfYZS6WYLLeIZDcshs3EdSEIfljG3oK5JIY68csR1DJSTSmCcnzMGPMhKv0CYnPCojkcYBOaGrgsRTjJMTLpWR+I5FcsSLEhLpfFkpZwwVSTwOkz8a2sLithQLManM/9K3341b2IwxRb9PxeJQzly0axIrcBWfSwyZdBidDI0apngypyJrcAHvSpTRhyuhnobQibsVvkDF8RbnsBvrsAvn8aGKMu6FejMjfYNfqmhAlvEVW7OQ2IDBFkkkIdL6t9QjMR8/WyyRFCyeE2qRGIvnEQgk4dzSUWtv7I9AIMFZddAevjqtlnhYYt2piuURSAxlsQM4FoHITRlQfKZuRezIQuRlBCKdWYh8a7HE73on+TCDEYj4H3okwZQsRHoiEFmVhciTCEROZyFyPQKR3lo3iYUciUAkySInvD4CiQT99aaMOiqkOJsd7+vNDd+OQCIJ8SkkwWtiTwQCSYltfZp6qnp49UbQ+KQg/mBBLb1yKoLGJwVxR43MwkBEvdGlDs5EIJHgmjqZGHK3rZTowwwZsK/FIgdlSDV53yzjQdZ3jNNasL3vwXQNYFkTty79IS3VMDY24Sg8GC6FGs7qfwyz9BLoIjaFJFt6bJ0Z7g2P4k2FZ7uzOh2OlPSq7XhIHQ2Exqf5sJ0YP4Ln1+IGPuIXXuMEJjeh7aOMYoT8BfcegYzf+KxLAAAAAElFTkSuQmCC" alt="mac-os" />
                    <div style={{ width: "100px" }} className='d-flex align-content-center justify-content-between' >
                        <img id='lupamobile' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQklEQVR4nO2WsU7DQBBEX2LhIpS4DQUIXEJs6uQDEr4AgWLF0FAYIfn/0Upz0omC+BYrgMhI29ztzNi3e2vDEb8IGVACG2AHvCl2WiuVMyqugWeg3xOWczWG4QRYRcJboALOgBNFAdTaC3lLcd1YSegduNkjZnu3yg3m7uPtJTRP4M0j8+Rjz6Ka2pumYiFuC0xTiGVUU0+tjNNIw7QG414kayQvammsU0itSNa9XhTSsHs+GJ1I+TeMc2l0f8K4HfGoTWswNiJZg3hx52mu8qeuUxYNEBuDqaiij0bSAEHjzjMyz6OReYkTy8h8MeAjUUWmr8DMazyJzHvVrVbH5opCjRRqGkxDvts8HHu4Yl/FC3Ahs2Ys86k6dK0x2OnXp9Va+amRRjVPxSz6M7GHPeU/mTcyfzykcTB/Ah4ObXwEhg/fODuywRhSvwAAAABJRU5ErkJggg==" alt="search--v1" />
                        <span id='hamburguer' className='menu open' onClick={() => menu()}> < Hamburger toggled={isOpen} toggle={setOpen} /></span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header