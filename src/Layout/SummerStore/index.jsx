import React from 'react'
import ArrowRight from './../../components/UI/Icons/ArrowRight';
import Card from './../../components/UI/Card/Card';

import useProductApi from "../../service/product/useProductApi";
import useProductStore from "../../store/useProductStore";
import { useEffect } from 'react';

const SummerStore = () => {
    const { isLoad, setLoader, setProduct, product } = useProductStore();

    useEffect(() => {
        useProductApi.getAll().then((res) => {
            // console.log(res.data);
            setProduct(res.data);
            setLoader();
        });
    }, []);

    return (
        <section id='summerStore' className='py-6'>
            <div className="container">
                <a href="" className='flex items-center gap-1 text-[28px] font-bold mb-[21px]'>
                    <span>Barcha mahsulotlar</span>
                    <ArrowRight />
                </a>
                <div className='grid grid-cols-5 justify-between gap-y-8 gap-x-5'>
                    {product?.map((item) => {
                        return <Card key={item._id} state={item} />;
                    })}
                </div>
            </div>
        </section>
    )
}

export default SummerStore