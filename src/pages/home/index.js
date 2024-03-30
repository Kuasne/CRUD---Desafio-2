import React from 'react';
function Home() {
    return (
        <div>
            <div className="p-5 bg-primary text-white text-center">
                <h1> | Home & Imagens | </h1>
                <p>Produtos disponíveis em estoque</p>
            </div>

            {/* Produto Nike */}
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className="mt-2 ">
                        <h2>Nike</h2>
                        <img
                            src="https://acdn.mitiendanube.com/stores/001/562/438/products/jj31-4300cf8b2a50b612b616354660518986-480-0.webp"
                            alt="Nike"
                        />
                        <br />
                        <p>Valor: 749,99</p>
                    </div>

                    {/* Produto Adidas */}
                    <div className="mt-5">
                        <h2>Adidas</h2>
                        <img
                            src="https://acdn.mitiendanube.com/stores/001/562/438/products/a-36-451-934b768cfd3b4a291516395191237293-480-0.webp"
                            alt="Adidas"
                        />
                        <p>Valor: 829,90</p>
                    </div>

                    {/* Produto New Balance */}
                    <div className="mt-5">
                        <h2>New Balance</h2>
                        <img
                            src="https://acdn.mitiendanube.com/stores/001/562/438/products/burgundy-turquoise-41-cf3739647437f6420016820906267444-480-0.webp"
                            alt="New Balance"
                        />
                        <p>Valor: 749,99</p>
                    </div>
                </div>
            </div>
            <br /><hr />
            <footer>
                <div id="copyright">
                    • Desenvolvido por <a href="https://github.com/Kuasne" target="_blank">@kuasne</a> durante o curso de Engenharia de Software © 2024 •
                </div>
            </footer>

        </div>
    );
}

export default Home;
