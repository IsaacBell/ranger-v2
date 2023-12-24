const opts = 'imxU';

const callPoliceMatcher = `(?:call|dial)\s+[\w\s+)]*(?:911|cops|police|authorities)/${opts}`;
const reportCrimeMatcher = `/\b(?:report|notify)\s+(?:a\s+)?(?:police|authorities)\b/${opts}`;

export const callPoliceRegex = new RegExp(callPoliceMatcher);
export const reportCrimeRegex = new RegExp(reportCrimeMatcher);
