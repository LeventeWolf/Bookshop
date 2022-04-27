import React, {useEffect, useState} from 'react';
import {Main} from '../../styles/Component.styles';
import './storages.scss'
import '../../styles/animations.scss'
import Axios from "axios";
import {Product} from "../user/Profile";
import {v4} from "uuid";
import {initialUser} from "../../model/user";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../api/userAPI";

type Storage = {
    city: string,
    capacity: number,
    name: string,
    id: number,
}

const Storages = () => {
    const [storages, setStorages] = useState<Storage[]>([]);

    const [myUser, setMyUser] = useState(initialUser);
    // @ts-ignore
    const user = useSelector(state => state.user);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/storages`)
            .then((response) => {
                setStorages(response.data)
            }).catch((response) => {
            console.log(`[Storage] ERROR!`);
            console.log(response)
        });

        getUserData(user.username)
            .then(response => {
                setMyUser(response.data);
            })
            .catch(error => {
                console.error(`[USER-DATA] Error while fetching user data`);
                console.error(error);
            });
    }, [])

    return (
        <Main>
            <div className="storages">
                <h1>Storages</h1>

                <div className="storages-container">
                    {storages.map(s => <Storage key={s.id} storageInfo={s} isAdmin={myUser.IS_ADMIN === 1}/>)}
                </div>
            </div>
        </Main>
    );
};

type StorageProps = {
    storageInfo: Storage,
    isAdmin: boolean,
}

const Storage: React.FC<StorageProps> = ({storageInfo, isAdmin}) => {
    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState(false);

    function handleShowProducts() {
        Axios.get(`http://localhost:3001/api/storages/${storageInfo.id}`)
            .then((response) => {
                setProducts(response.data)
            }).catch((response) => {
            console.log(`[Storage] ERROR!`);
            console.log(response)
        });

        setShowProducts(!showProducts);
    }

    return (
        <div className="storage-wrap">
            <h2>Name: {storageInfo.name}</h2>
            <h2>City: {storageInfo.city}</h2>
            <h2>Capacity: {storageInfo.capacity}</h2>

            <div className="product-info-wrap">
                <div className="title-wrap">
                    <h2>Products</h2>
                    <img className="down-arrow" src="http://assets.stickpng.com/images/58f8bcf70ed2bdaf7c128307.png"
                         alt="arrow"
                         onClick={handleShowProducts}
                    />
                </div>


                {
                    showProducts ?
                        <div className="product-container appear">
                            <table className="table table-light">
                                <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Genre</th>
                                    <th>Product Price</th>
                                    <th>Quantity</th>
                                </tr>
                                </thead>

                                <tbody>
                                {products.map(p => <Product key={v4()} productInfo={p}/>)}
                                </tbody>
                            </table>
                        </div>
                        : <></>
                }


            </div>

            { isAdmin ?
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
                :
                <></>
            }

        </div>
    );
};

export default Storages;