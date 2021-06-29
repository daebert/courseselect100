export type CourseData = {
  courseName: string;
  instructor: string;
  courseDescLong: string;
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
