import React from 'react';
import Loader from "./Loader"
const WithLoading =(WrappedComponent)=>{
    const Spinner =(props)=>{
        return (props.loading?<Loader/>:<WrappedComponent{...props}/>)

    }
    return Spinner
}
export default WithLoading