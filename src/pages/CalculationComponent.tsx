import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { setCalculationType } from '../service/calculation-type/calculation.slice';
import InfoBasedCalculation from '../components/calculation/Infobased';
import TimeBasedCalculation from '../components/calculation/TimeBased';
import Result from '../components/results/Result';
import { ResultBgColor } from '../utils/constant';
import { resetCurrentResult } from '../service/result-type/reset.service';

const CalculationComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const calculationType = useSelector((state: RootState) => state.calculationType.calculationType);
  const calculationText=calculationType === 'info' ? "Info-based Calculation" : calculationType === 'time' ? "Time-based Calculation" : "Select Calculation Type"
  const result = useSelector((state: RootState) => state.result.result);

  const getResultColorClass = (result: number | null) => {
    if (result === null) return '';
    return ResultBgColor[result] || 'text-white';
  };

  const handleCalculationType = (type: string) => {
    resetCurrentResult(calculationType, dispatch);

    if (type === 'info') {
      dispatch(setCalculationType('info'));
    } else if (type === 'time') {
      dispatch(setCalculationType('time'));
    }
  }

  return (
    <div className="w-[92%] lg:w-1/2 md:w-[70%] py-10">
      <div className="flex items-center mb-4">
          <h1 className="text-2xl font-bold text-white">
            {calculationText} {result !== null && " : "}
          </h1>
          {
              result !== null ? <h1 className={`text-3xl font-bold px-2 ${getResultColorClass(result)}`}> {result}</h1> : 0
          }
      </div>
      
      <div className="flex space-x-4 mb-4">
        <button
          className={`p-2 text-md font-bold ${calculationType === 'info' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400 hover:text-blue-300'}`}
          onClick={() => handleCalculationType('info')}
        >
          Info-based
        </button>
        
        <button
          className={`p-2 text-md font-bold ${calculationType === 'time' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400 hover:text-blue-300'}`}
          onClick={() => handleCalculationType('time')}
        >
          Time-based
        </button>
      </div>

      {calculationType === 'info' && <InfoBasedCalculation />}
      {calculationType === 'time' && <TimeBasedCalculation />}

      <Result />
    </div>
  );
};

export default CalculationComponent;
