"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Calculator() {
  // State for the current input
  const [input, setInput] = useState<string>("");

  // Handle number and operator clicks
  const handleButtonClick = (value: string) => {
    // Prevent consecutive operators
    if (/[-+*/.]$/.test(input) && /[-+*/.]/.test(value)) return;
    setInput((prev) => prev + value);
  };

  // Calculate the result
  const calculateResult = () => {
    try {
      // Use eval safely by replacing any unsupported characters
      const sanitizedInput = input.replace(/[^0-9+\-*/.]/g, "");
      const result = eval(sanitizedInput);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Clear all input
  const clearInput = () => {
    setInput("");
  };

  // Remove the last character
  const backspace = () => {
    setInput('');
  };

  return (
    <div>
    <div className="flex justify-center max-sm:mx-5 max-sm:p-0 max-sm:m-4 sm:m-10">
      <Card className="bg-black rounded-3xl max-w-md p-6 shadow-xl m-10 text-slate-900 mt-20">
        <CardHeader>
          <CardTitle className="text-center text-5xl m-5 text-white"> Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Display the current input */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="input" className="text-xl text-center font-bold text-white">Input</Label>
            <div className="bg-yellow-400 p-4 rounded-lg text-center font-bold text-xl">{input || '0'}</div>
          </div>

          {/* Number buttons */}
          <div className="grid grid-cols-4 gap-4 m-5">
            {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
              <Button 
                key={btn} 
                variant="outline" 
                className="text-2xl font-bold border-white bg-black text-white" 
                onClick={() => btn === "=" ? calculateResult() : handleButtonClick(btn)}
              >
                {btn}
              </Button>
            ))}
          </div>

          {/* Additional control buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full" onClick={clearInput}>Clear</Button>
            <Button variant="outline" className="w-full" onClick={backspace}>Backspace</Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
