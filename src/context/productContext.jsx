//Create a Context
//use Provider
//useContext hook
import axios from "axios";
import { createContext, useContext, useReducer } from "react"
import { useEffect } from "react";
import reducer from "../reducer/productReducer";
const AppContext = createContext();

const API = "https://fakestoreapi.com/products";

const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    featureProducts : [],
    isSingleLoading: false,
    singleProduct: {},
};

export const useProductContext = () => useContext(AppContext);

export const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer,initialState);

    const getProducts = async(url) =>{
        dispatch({type:"SET_LOADING"});
        try{
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type:"SET_API_DATA", payload:products});
        }catch(error){
            dispatch({type:"API_ERROR"});
        }
    };
    //single product API call
        const getSingleProduct = async(url) =>{
            dispatch({type:"SET_SINGLE_LOADING"});

            try{
                const res = await axios.get(url);
                const singleProduct = await res.data;
                dispatch({type:"SET_SINGLE_API_DATA", payload:singleProduct});
            }catch(error){
                 dispatch({type:"API_SINGLE_ERROR"});
            }
        }

    useEffect(() => {
        getProducts(API);
    },[]);
    return <AppContext.Provider value={{...state, getSingleProduct}}>
        {children}
    </AppContext.Provider>
};

