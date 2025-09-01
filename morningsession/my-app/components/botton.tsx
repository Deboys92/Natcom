'user client'
interface ButtonProps{

    name:string,classN:string,onPress:React.MouseEventHandler<HTMLButtonElement> 
}

export default function Button(
    {name,classN,onPress}:ButtonProps
       
    
){
    return(
        <button
        onClick={onPress}
        className={classN}
        >{name}</button>
    )
}