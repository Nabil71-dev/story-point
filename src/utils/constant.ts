export const Tasks: Record<string, number> = {
    "Everything": 1,
    "Almost Everything": 2,
    "Something": 3,
    "Almost nothing": 5,
    "Nothing": 8,
    "Unknown": 13,
};

export const Dependencies: Record<string, number> = {
    "None": 1,
    "Almost none": 2,
    "Some": 3,
    "Few": 5,
    "More than few": 8,
    "Unknown": 13,
};

export const Efforts: Record<string, number> = {
    "Minimal": 1,
    "Low": 2,
    "Moderate": 3,
    "High": 5,
    "Very high": 8,
    "Unknown": 13,
};

export const TEfforts: Record<string, number> = {
    "Minimum Effort": 1,
    "Low Effort": 2,
    "Mild Effort": 3,
    "Moderate Effort": 5,
    "Severe Effort": 8,
    "Maximum Effort": 13,
};

export const TTime: Record<string, number> = {
    "Few Minutes": 1,
    "Few Hours": 2,
    "A Day": 3,
    "A Few Days": 5,
    "A Week": 8,
    "A Month": 13,
};

export const TComplexity: Record<string, number> = {
    "Minimum Complexity": 1,
    "Little Complexity": 2,
    "Low Complexity": 3,
    "Moderate Complexity": 5,
    "High Complexity": 8,
    "Maximum Complexity": 13,
};

export const TUncertainty: Record<string, number> = {
    "Minimum": 1,
    "Low": 2,
    "Mild": 3,
    "Moderate": 5,
    "Severe": 8,
    "High": 13,
};

export const ResultBgColor: Record<number, string> = {
    1: 'text-green-500',
    2: 'text-lime-500',
    3: 'text-yellow-500',
    5: 'text-amber-500',
    8: 'text-orange-500',
    13: 'text-red-600',
};
