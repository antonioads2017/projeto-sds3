import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
}

const Pagination = ({ page, onPageChange }: Props) => {
    const menorQ = '<<';
    const maiorQ = '>>';
    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>{menorQ}Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1} de {page.totalPages}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima{maiorQ}</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;