import ListaPostagens from "../../components/postagem/listapostagens/listarPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grif grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="texte-5x1 font-bold">
                            Seja Bem Vinde!
                        </h2>
                        <p className="text-x1">
                            Expresse aqui seus pensamentos e opniões
                        </p>
                        <div className="flex justify-around gap-4">
                            
                             <ModalPostagem />
                             
                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/VpwApCU.png"
                            alt="Imagem da Página Home"
                            width="400px"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens/>
        </>
    )
}

export default Home;