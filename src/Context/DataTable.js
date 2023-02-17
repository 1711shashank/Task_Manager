import Context from "./Context";

const ContextData =(p)=>{
    const Dt={
        "name":"deep",
        "class":"5"
    }
    return(
        <Context.Provider value={Dt}>
            {p.children}
        </Context.Provider>
    )
}

export default ContextData;