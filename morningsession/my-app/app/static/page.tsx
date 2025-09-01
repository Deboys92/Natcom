'user client'

import Button from "@/components/botton"

export default function  Static  (){
    return (
        <div> <Button
        name="submit"
        classN="bg-green-800 text-white p-4 w-100 m -10ncursor-pointer "
        onPress={()=> alert('Hello oned ')}
        />
        </div>
    )
}