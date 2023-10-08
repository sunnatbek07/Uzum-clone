import React, { useEffect, lazy } from 'react';

const Intro = lazy(() => import('./Intro/index'));
const SummerStore = lazy(() => import('./SummerStore'));

import useProductStore from './../store/useProductStore';
import useProductApi from '../service/product/useProductApi';

const Layout = () => {
    const { isLoad, setProduct, setLoader } = useProductStore();

    useEffect(() => {
        useProductApi.getAll().then((res) => {
            setProduct(res.data);
            setLoader();
        }).then((error) => {
            alert(error.message);
        })
    }, []);

    // if (!isLoad){
    //     return <h1>Loading . . .</h1>;
    // }

    return (
        <main>
            <Intro />
            <SummerStore />
        </main>
    )
}

export default Layout