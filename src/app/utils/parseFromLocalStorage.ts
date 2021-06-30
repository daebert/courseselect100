type Choice = {
  primary: {
    name: string;
  };
  secondary: {
    name: string;
  };
  tertiary: {
    name: string;
  };
};

function parseChoiceFromLocalStorage(): Choice {
  const json = localStorage.getItem("choiceObject");
  if (json === null) {
    return {
      primary: {
        name: "",
      },
      secondary: {
        name: "",
      },
      tertiary: {
        name: "",
      },
    };
  }
  const data = JSON.parse(json);
  return data;
}

export default parseChoiceFromLocalStorage;
