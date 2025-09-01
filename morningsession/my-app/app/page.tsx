'use client'
interface User{
  id:number;
  name:string;
  email?:string

}

export default function Home(){
  const my_name :string='sandy'
  const age:number=123
  const isAdmin:boolean=true
  
  function greet(name:string){

  }
  const user:User={
    id:1,
    name:"alice",
    email:'xyz@smart.dev '
  }


  return (
    <div>
    <p> Hello to my  app </p>
    <h1>My name is {my_name} and my age is</h1>
    <h1>Am i admin </h1>

    </div>
    )
}
