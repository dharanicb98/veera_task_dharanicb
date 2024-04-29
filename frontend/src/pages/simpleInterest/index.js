import React, { useState } from "react";
import Input from "../../components/input";
import { calculateSimpleInterest } from "../../services/simpleInterest";
import { BUTTON_STYLE } from "../../constants";

function SimpleInterest() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [timePeriodYears, setTimePeriodYears] = useState("");
  const [timePeriodMonths, setTimePeriodMonths] = useState("");
  const [interest, setInterest] = useState("");

  const CalculateInterest = async (e) => {
    e.preventDefault();
    try {
      const response = await calculateSimpleInterest({
        principal: parseFloat(principal),
        rate: parseFloat(rate),
        time_period_months: +timePeriodMonths,
        time_period_years: +timePeriodYears,
      });
      console.log("res[omnse", response);
      setInterest(response?.result);
    } catch (e) {
      alert(e?.message);
    }
  };

  const handleClear = () => {
    setInterest("");
    setRate("");
    setTimePeriodMonths("");
    setTimePeriodYears("");
    setPrincipal("");
  };

  return (
    <div className="h-screen mx-10 mt-20">
      <h1 className="text-md md:text-2xl font-semibold my-6 text-center">Simple interest calculator </h1>

      <form onSubmit={CalculateInterest}>
        <Input
          type="number"
          labeltitle={"Principal Amount:"}
          value={principal}
          handleOnChange={(value) => setPrincipal(value)}
          inputStyle={"justify-between w-full"}
          className="w-full md:w-[70%]"
        />
        <Input
          type="number"
          labeltitle={"Interest Rate (%):"}
          value={rate}
          handleOnChange={(value) => setRate(value)}
          inputStyle={"justify-between w-full"}
          className="w-full md:w-[70%]"
        />
        <Input
          type="number"
          labeltitle={"Time Period (years):"}
          value={timePeriodYears}
          handleOnChange={(value) => setTimePeriodYears(value)}
          inputStyle={"justify-between w-full"}
          className="w-full md:w-[70%]"
        />
        <Input
          type="number"
          labeltitle={"Time Period (months):"}
          value={timePeriodMonths}
          handleOnChange={(value) => setTimePeriodMonths(value)}
          inputStyle={"justify-between w-full"}
          className="w-full md:w-[70%]"
        />
        <div className="flex gap-3 justify-end md:mr-60 my-4">
          <button className={`${BUTTON_STYLE}`} type="submit">Submit</button>
          <button className={`${BUTTON_STYLE}`}  type={"button"} onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>

      <h2>Total Interest: {interest}</h2>
    </div>
  );
}

export default SimpleInterest;
