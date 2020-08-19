export const Step_ADD = "Step_ADD";
export const Step_REMOVE = "Step_REMOVE";
export const Step_TOGGLE = "Step_TOGGLE";

export const addStep = (id, text) => {
  return {
    type: Step_ADD,
    id,
    text,
  };
};
export const removeStep = (current, id) => {
  return {
    type: Step_REMOVE,
    current,
    id,
  };
};
export const toggleStep = (current, id) => {
  return {
    type: Step_TOGGLE,
    current,
    id,
  };
};
