interface ActiveButton {
  all: boolean;
  toTen: boolean;
  toTwenty: boolean;
  toThirty: boolean;
}

type PageNum = (val: number | ((val: number) => number)) => void;

type Limit = (val: number | ((val: number) => number)) => void;

type ActiveBtn = (
  val: ActiveButton | ((val: ActiveButton) => ActiveButton)
) => void;

export default (
  buttonName: string,
  setPage: PageNum,
  setLimit: Limit,
  setBtns: ActiveBtn
) => {
  switch (buttonName) {
    case "all":
      setPage((prevPage) => 1);
      setLimit((prevLimit) => 31);
      setBtns((prevBtns) => {
        return {
          all: true,
          toTen: false,
          toTwenty: false,
          toThirty: false,
        };
      });
      break;
    case "toTen":
      setPage((prevPage) => 1);
      setLimit((prevLimit) => 10);
      setBtns((prevBtns) => {
        return {
          all: false,
          toTen: true,
          toTwenty: false,
          toThirty: false,
        };
      });
      break;
    case "toTwenty":
      setPage((prevPage) => 2);
      setLimit((prevLimit) => 10);
      setBtns((prevBtns) => {
        return {
          all: false,
          toTen: false,
          toTwenty: true,
          toThirty: false,
        };
      });
      break;
    case "toThirty":
      setPage((prevPage) => 3);
      setLimit((prevLimit) => 10);
      setBtns((prevBtns) => {
        return {
          all: false,
          toTen: false,
          toTwenty: false,
          toThirty: true,
        };
      });
      break;
  }
};
