import React from 'react';

const ControleProduto = () => {
    return (
        <><div className="container">
            {/* Titulo */}
            <div className="row">
                <div className="col-sm-12">
                    <br/>
                    <h4>Produtos</h4>
                    <hr />
                </div>
            </div>

            {/* Botão para adicionar */}
            <div className="row">
                <div className="col-sm-3">
                    <button id="btn-adicionar" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modal-produto">Adicionar</button>
                </div>
            </div>

            {/* Tabela */}
            <div className="row mt-3">
                <div className="col-sm-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>QUANTIDADE ESTOQUE</th>
                                <th>VALOR</th>
                                <th>DATA DE CASDASTRO</th>
                                <th>AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Aqui você renderizaria os dados da tabela usando JavaScript */}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* The Modal */}
            <div className="modal" id="modal-produto">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Adicionar Produto ao Estoque</h4>
                            <button type="button" className="btn-close"></button>
                        </div>

                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-2">
                                    <label htmlFor="id" className="form-label">Id</label>
                                    <input id="id" type="text" disabled className="form-control" />
                                </div>
                                <div className="col-sm-10">
                                    <label htmlFor="nome" className="form-label">Nome</label>
                                    <input id="nome" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label htmlFor="quantidadEstoque" className="form-label">Estoque</label>
                                    <input id="quantidadeEstoque" type="text" className="form-control" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="valor" className="form-label">Valor</label>
                                    <input id="valor" type="text" className="form-control" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="dataCadastro" className="form-label">Data de Cadastro</label>
                                    <input id="dataCadastro" type="date" className="form-control" />
                                </div>
                            </div>

                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button id="btn-salvar" type="button" className="btn btn-primary btn-sm">Salvar</button>
                                <button id="btn-cancelar" type="button" className="btn btn-light btn-sm" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scripts */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="./js/model/Produtos.js"></script>
            <script src="./js/base.js"></script>
            <script src="./js/controle-produto.js"></script>
        </div><footer>
                <div id="copyright">
                    • Desenvolvido por <a href="https://github.com/Kuasne" target="_blank">@kuasne</a> durante o curso de Engenharia de Software © 2024 •
                </div>
            </footer></>
    );
}

export default ControleProduto;
