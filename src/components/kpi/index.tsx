import React from 'react'

interface KpiProps {
    title: string;
    value: any;
    classTitle?: string;
    classValue?: string;
}

const Kpi = ({ title, value, classTitle, classValue }: KpiProps) => {
    return (
        <div className="p-2 bg-white shadow">
            <h1 className={`${classTitle} uppercase font-bold border-b`}>{title}</h1>
            <div className={`py-2 font-bold ${classValue} text-right text-shadow`}>
                {value}
            </div>
        </div>
    )
}

export default Kpi;