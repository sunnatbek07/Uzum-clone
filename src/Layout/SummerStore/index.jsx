import React from 'react'
import ArrowRight from './../../components/UI/Icons/ArrowRight';
import Card from './../../components/UI/Card/Card';
import useProductApi from '../../service/product/useProductApi';

const SummerStore = () => {

    return (
        <section id='summerStore' className='py-6'>
            <div className="container">
                <a href="" className='flex items-center gap-1 text-[28px] font-bold'>
                    <span>Yozgi savdo</span>
                    <ArrowRight />
                </a>
                <div className='flex flex-wrap justify-between gap-y-8'>
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default SummerStore