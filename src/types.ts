export type NavItem = {
  displayStr: string;
  hrefStr: string;
};

export type Person = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
};
