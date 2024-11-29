"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";

export default function Calculator() {
  // Step no.1
  // for num1
  const [num1, setNum1] = useState<string>("");
  // for num2
  const [num2, setNum2] = useState<string>("");
  // for result
  const [result, setResult] = useState<string>("");

//   Step no.2
// Handler for set and update the num1 value 

const handlerNum1 =(e:ChangeEvent<HTMLInputElement>)=>{
    setNum1(e.target.value)
}

// Handler for set and update the num2 value 
const handlerNum2 = (e:ChangeEvent<HTMLInputElement>)=>{
    setNum2(e.target.value)
}

// function to perform addition and set the result
const add = () : void => {
    setResult((parseFloat(num1) + parseFloat(num2)).toString())
}

// function to perform subtraction and set the result
const sub = () : void => {
    setResult((parseFloat(num1)- parseFloat(num2)).toString());
}

// function to perform multiplication and set the result
const multiple  = () :void => {
    setResult((parseFloat(num1) * parseFloat(num2)).toString())
}

// function to perform division and set the result
const division = () :void =>{

    if (parseFloat(num2) !== 0) {
        setResult((parseFloat(num1) / parseFloat(num2)).toString())
    }else{
        setResult("Error: Division by zero")
    }
} 

// Function to clear input and result
const clearResult = () : void =>
    {
        setNum1('')
        setNum2('')
        setResult('')
    }


  return (
    <div >
        <div className="flex justify-center max-sm:mx-5 max-sm:p-0">
            <Card className="bg-gradient-to-r from-[#ffbbaa] to-[#FEB47B] rounded-3xl bounce-in-top w-full max-w-md p-6 shadow-xl m-10 text-slate-900 mt-40">
                <CardHeader>
                    <CardTitle className="text-center text-5xl m-5 ">
                        Calculator
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     {/* Input fields for numbers */}
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex flex-col space-y-4 ">
                            <Label htmlFor="num1" className="text-xl text-center font-bold font-sans max-sm:text-[17px]">Number No.1</Label>
                            <Input value={num1} id="num1" type="num1" onChange={handlerNum1} className="max-sm:text-xl max-sm:font-bold "></Input>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <Label htmlFor="num1" className="text-xl text-center font-bold font-sans max-sm:text-[17px]">Number No.2</Label>
                            <Input value={num2} id="num2" type="num2" onChange={handlerNum2}  className="max-sm:text-xl max-sm:font-bold"></Input>
                        </div>
                    </div>
                    {/* Buttons for arithmetic operations */}
                    <div className="grid grid-cols-4 gap-10 m-5">
                        <Button variant={"outline"} className="text-2xl font-bold text-gray-700 dark:text-gray-300" onClick={add} >+</Button>
                        <Button variant={"outline"} className="text-2xl font-bold text-gray-700 dark:text-gray-300" onClick={sub} >-</Button>
                        <Button variant={"outline"} className="text-2xl font-bold text-gray-700 dark:text-gray-300" onClick={multiple} >*</Button>
                        <Button variant={"outline"} className="text-2xl font-bold text-gray-700 dark:text-gray-300" onClick={division} >/</Button>
                    </div>

                     {/* Display the result */}
                     <div className="flex flex-col space-y-2">
                        <Label htmlFor="result" className="text-xl text-center font-bold font-sans">Result</Label>
                        <Input value={result} id="result" type="text" placeholder="Result" className="m-4" readOnly>
                        </Input>
                     </div>
                      {/* Clear button to reset inputs and result */}
                      <Button variant="outline" className="w-full m-4" onClick={clearResult} >Clear</Button>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}
