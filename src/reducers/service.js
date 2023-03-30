
export default (services=[],action)=>{
    switch(action.type){
        case 'SERVICE':
            return [...services, action.payload]
        default :
        return services;
    }
}

