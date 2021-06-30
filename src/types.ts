export type Courses = {
  title: string;
  descLong: string;
  descShort: string;
  instructor: string;
  image: string;
};

export type Choice = {
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
