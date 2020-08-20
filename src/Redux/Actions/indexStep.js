export const Step_ADD = "Step_ADD";
export const Step_REMOVE = "Step_REMOVE";
export const Step_TOGGLE = "Step_TOGGLE";

export const addStep = (text) => {
  return {
    type: Step_ADD,
    text,
  };
};
export const removeStep = (id) => {
  return {
    type: Step_REMOVE,
    id,
  };
};
export const toggleStep = (id) => {
  return {
    type: Step_TOGGLE,
    id,
  };
};
