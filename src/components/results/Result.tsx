import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { calculateResultInfoBased, calculateResultTimeBased } from '../../service/result-type/result.slice';
import { resetCurrentResult } from '../../service/result-type/reset.service';

const Result: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const result = useSelector((state: RootState) => state.result.result);
  const calculationType = useSelector((state: RootState) => state.calculationType.calculationType);
  const infoBase = useSelector((state: RootState) => state.infoBased);
  const timeBased = useSelector((state: RootState) => state.timeBased);

  // Automatically calculate when all fields are populated
  useEffect(() => {
    if (calculationType === 'info') {
      const { task, dependency, effort } = infoBase;
      if (task && dependency && effort) {
        dispatch(calculateResultInfoBased({ task, dependency, effort }));
      }
    } else if (calculationType === 'time') {
      const { time, effort, complexity, uncertainty } = timeBased;
      if (time && effort && complexity && uncertainty) {
        dispatch(calculateResultTimeBased({ time, effort, complexity, uncertainty }));
      }
    }
  }, [calculationType, infoBase, timeBased, dispatch]);

  const handleReset = () => {
    resetCurrentResult(calculationType, dispatch);
  };


  return (
    <div className="text-center">
      {result !== null && (
        <>
          <button
            onClick={handleReset}
            className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-md mb-4"
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default Result;
