export type CourseData = {
  courseName: string;
  courseDescLong: string;
  courseDescShort: string;
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
