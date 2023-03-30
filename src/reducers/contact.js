
export default (contacts=[],action)=>{
    switch(action.type){
        case 'CONTACT':
            return [...contacts, action.payload]
        default :
        return contacts;
    }
}