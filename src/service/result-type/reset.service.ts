import { resetResult } from "./result.slice";
import { resetInfoBased } from "../info-based/info.slice";
import { resetTimeBased } from "../time-based/time.slice";

export const resetCurrentResult = (calculationType: string | null, dispatch: Function) => {
    dispatch(resetResult());

    if (calculationType === 'info') {
        dispatch(resetInfoBased());
    } else if (calculationType === 'time') {
        dispatch(resetTimeBased());
    }
}