import React, {useEffect, useState} from 'react';
import { Main } from '../../styles/Component.styles';
import './storages.scss'
import Axios from "axios";

type Storage = {
    city: string,
    capacity: number,
    name: string,
    id: number,
}

const Storages = () => {
    const [storages, setStorages] = useState<Storage[]>([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/storages`)
            .then((response) => {
            console.log(response.data)
            setStorages(response.data)
        }).catch((response) => {
            console.log(`[Storage] ERROR!`);
            console.log(response)
        });
    }, [])

    return (
        <Main>
            <div className="storages">
                <h1>Storages</h1>

                <div className="storages-container">
                    {storages.map(s => <Storage key={s.id} storageInfo={s} />)}
                </div>
            </div>
        </Main>
    );
};

type StorageProps = {
    storageInfo: Storage
}

const Storage: React.FC<StorageProps> = ( {storageInfo} ) => {
    function handleShowProducts() {

    }

    return (
        <div className="storage-wrap">
            <h2>Name: {storageInfo.name}</h2>
            <h2>City: {storageInfo.city}</h2>
            <h2>Capacity: {storageInfo.capacity}</h2>

            <div className="product-info-wrap">
                <div className="title-wrap">
                    <h2>Products</h2>
                    <img className="down-arrow" src="http://assets.stickpng.com/images/58f8bcf70ed2bdaf7c128307.png" alt="arrow"
                        onClick={handleShowProducts}
                    />
                </div>


                <div className="product-container">

                </div>
            </div>

        </div>
    );
};

export default Storages;