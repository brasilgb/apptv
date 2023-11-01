import React from 'react';

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className="bg-solar-blue-light drop-shadow-md border-t-2 py-1">
            <p className="text-solar-gray-light text-center text-[10px]">
                &copy;{new Date().getFullYear()} Solar Comércio e Agroindústria
                Ltda. Todos os direitos reservados. | Desenvolvido por TI -
                Sistemas | Grupo Solar
            </p>
        </div>
    );
};

export default Footer;
