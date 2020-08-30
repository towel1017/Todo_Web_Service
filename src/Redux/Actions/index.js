export const Todo_ADD = "Todo_ADD";
export const Todo_CHECK = "Todo_CHECK";
export const Todo_IMPORT = "Todo_IMPORT";
export const Todo_REMOVE = "Todo_REMOVE";
export const Todo_INFO = "Todo_INFO";
export const Todo_DATE = "Todo_DATE";

export const todoAdd = (text, flag) => {
  return {
    type: Todo_ADD,
    text,
    flag,
  };
};

export const todoCheck = (id) => {
  return {
    type: Todo_CHECK,
    id,
  };
};

export const todoImport = (id) => {
  return {
    type: Todo_IMPORT,
    id,
  };
};

export const todoRemove = (id) => {
  return {
    type: Todo_REMOVE,
    id,
  };
};

export const todoInfo = (id) => {
  return {
    type: Todo_INFO,
    id,
  };
};
export const todoDate = (text) => {
  return {
    type: Todo_DATE,
    text,
  };
};
