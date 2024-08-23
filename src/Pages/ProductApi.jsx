import { useCallback, useEffect, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
const ProductApi = () => {
    const [product, setProduct] = useState([]);
    const [product2, setProduct2] = useState([]);
    const [startingProductId, setStartingProductId] = useState(3);
    const [loadall, setloadll] = useState(false);

    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products").then(response => response.json())
    //         .then((data) => setProduct(data[0].product));
    //     console.log(data);
    // }, []);
    const fetchData = useCallback(async () => {
        const response = await fetch(
            `https://fakestoreapi.com/products`
        );
        const nextData = await response.json();
        setProduct((currentData) => [...currentData, ...nextData])
    })
    const manymore = async () => {
        setloadll(!loadall)
    }
    useEffect(() => {
        fetchData();
    }, [fetchData])
    return (<>
        <div className="container mt-5">
            <MDBRow>
                {loadall ? <>{product.map((product, index) => (
                    (
                        <MDBCol md='4' className="mt-2" key={index}>
                            <Link to={"/productsdetails/" + product.id}>
                                <div class="card">
                                    <img src={product.image} alt={product.title} style={{ aspectRatio: '1/1', objectFit: 'contain' }} class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.title}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a> */}
                                        <Link to="/manymore">More Details</Link>
                                        {product.price}
                                    </div>
                                </div>
                            </Link>
                        </MDBCol>
                    )
                ))}</> : <>
                    {product.map((product, index) => (
                        index < 3 && (
                            <MDBCol md='4' key={index}>

                                <Link to={"/productsdetails/" + product.id}>
                                    <div class="card">
                                        <img src={product.image} alt={product.title} style={{ aspectRatio: '1/1', objectFit: 'contain' }} class="card-img-top" />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title}</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            {/* <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a> */}
                                            <Link to="/manymore">More Details</Link>
                                            {product.price}
                                        </div>
                                    </div>
                                </Link>
                            </MDBCol>
                        )
                    ))}
                </>}
                {/* <MDBCol md='4'>
                md="4"
                </MDBCol>
                <MDBCol md='4'>
                md="4"
            </MDBCol> */}
            </MDBRow>

            <MDBRow className="my-3">
                <MDBCol>
                    <button onClick={manymore} className="btn btn-primary">Many More</button>
                    {/* <Link className="btn btn-primary" to="/allproducts">More Details</Link> */}
                </MDBCol>
            </MDBRow>
        </div>

    </>);
}

export default ProductApi;