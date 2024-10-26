import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { setTask, setDependency, setEffort } from '../../service/info-based/info.slice';
import Selector from '../../lib/Selector';
import { Tasks, Dependencies, Efforts } from '../../utils/constant';

const InfoBasedCalculation: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { task, dependency, effort } = useSelector((state: RootState) => state.infoBased);

  return (
    <div>
  
      <Selector
        label="Task"
        options={Tasks} 
        value={task}
        setState={(value) => dispatch(setTask(value))}
      />

      <Selector
        label="Dependency"
        options={Dependencies}
        value={dependency}
        setState={(value) => dispatch(setDependency(value))}
      />

      <Selector
        label="Effort"
        options={Efforts} 
        value={effort}
        setState={(value) => dispatch(setEffort(value))}
      />
    </div>
  );
};

export default InfoBasedCalculation;
