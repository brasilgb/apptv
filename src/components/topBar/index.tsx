'use client'
import React, { useEffect, useState } from 'react';
import NavLinks from '../NavLinks';
import Link from 'next/link';
import Image from 'next/image';
import { getFaturamentoData } from "@/lib/faturamento";

const TopBar = () => {
    const [atu, setAtu] = useState('');
    useEffect(() => {
        const getAtualizacao = async () => {
            const faturamento = await getFaturamentoData();
            setAtu(faturamento[0].Atualizacao);
        }
        getAtualizacao();
    })

    return (
        <nav className="bg-solar-blue-light border-b-2 drop-shadow-md border-white py-2 px-4 flex items-center justify-between">
            <div className="mr-2 flex-none">
                <Link href="/">
                    <Image
                        alt="Logo Lojas Solar"
                        width={100}
                        height={60}
                        src={require('@/assets/logo/logo_solar.png')}
                    />
                </Link>
            </div>
            <ul className="flex-1 flex items-center justify-start">
                <NavLinks label="Acompanhamento" href="/" />
                <NavLinks label="Vendas Dia" href="/vendasdia" />
                <NavLinks label="Vendas Mês" href="/vendasmes" />
                <NavLinks label="Vendas Ano" href="/vendasano" />
                <NavLinks label="Evolução do Mês" href="/evolucaomes" />
            </ul>

            <div className="flex-none border border-white py-1 px-4 rounded-full">
                <h1 className="text-base drop-shadow-lg text-solar-gray-light font-semibold">
                    {atu}
                </h1>
            </div>
        </nav>
    );
};

export default TopBar;
