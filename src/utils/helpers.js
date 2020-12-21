export const uniqTags = (list) => [...new Set(list.map(({ tag }) => tag))];

export const obj2arr = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);

export const isNumeric = (value) => /^-?\d+$/.test(value);
