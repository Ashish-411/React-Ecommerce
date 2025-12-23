import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();
export const useFilterContext = () => useContext(FilterContext);
const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value:"lowest",
}

export function FilterContextProvider({children}){
    const {products} = useProductContext();
    const [state,dispatch] = useReducer(reducer,initialState);

    // set grid view
    const setGridView = () =>{
        return dispatch({type:"SET_GRIDVIEW"});
    }
    const setListView = () =>{
        return dispatch({type:"SET_LISTVIEW"});
    }
    // Sorting function
    function sorting(){
        dispatch({type:"GET_SORT_VALUE"});
    }
    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS",payload:products});
    },[state.sorting_value]);
    useEffect(() =>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products});
    },[products]);
   
    return(
        <FilterContext.Provider value ={{...state, setGridView,setListView,sorting}}>
            {children}
        </FilterContext.Provider>
    );
}