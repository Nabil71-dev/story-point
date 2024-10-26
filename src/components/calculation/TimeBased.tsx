import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';;
import { setTime, setEffort, setComplexity, setUncertainty } from '../../service/time-based/time.slice';
import Selector from '../../lib/Selector';
import { TEfforts, TTime, TComplexity, TUncertainty } from '../../utils/constant';

const TimeBasedCalculation: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { time, effort, complexity, uncertainty } = useSelector((state: RootState) => state.timeBased);

  return (
    <div>
      
      <Selector
        label="Time"
        options={TTime} 
        value={time}
        setState={(value) => dispatch(setTime(value))}
      />

      <Selector
        label="Effort"
        options={TEfforts}
        value={effort}
        setState={(value) => dispatch(setEffort(value))}
      />

      <Selector
        label="Complexity"
        options={TComplexity} 
        value={complexity}
        setState={(value) => dispatch(setComplexity(value))}
      />

      <Selector
        label="Uncertainty"
        options={TUncertainty} 
        value={uncertainty}
        setState={(value) => dispatch(setUncertainty(value))}
      />
    </div>
  );
};

export default TimeBasedCalculation;
