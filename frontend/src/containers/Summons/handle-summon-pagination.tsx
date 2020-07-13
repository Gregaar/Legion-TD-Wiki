interface ActiveButton {
  all: boolean;
  barracks: boolean;
  advanced: boolean;
}

type PageNum = (val: number | ((val: number) => number)) => void;

type Limit = (val: number | ((val: number) => number)) => void;

type ActiveBtn = (
  val: ActiveButton | ((val: ActiveButton) => ActiveButton)
) => void;

export default (
  buttonName: string,
  currentlyActive: ActiveButton,
  setPageNum: PageNum,
  setLimit: Limit,
  setActiveBtn: ActiveBtn
): void => {
  switch (true) {
    case buttonName === "all" && !currentlyActive.all:
      setPageNum((prevNumber) => 1);
      setLimit((prevLimit) => 24);
      setActiveBtn((prevActive) => {
        return {
          all: true,
          barracks: false,
          advanced: false,
        };
      });
      break;
    case buttonName === "barracks" && !currentlyActive.barracks:
      setPageNum((prevNumber) => 1);
      setLimit((prevLimit) => 12);
      setActiveBtn((prevActive) => {
        return {
          all: false,
          barracks: true,
          advanced: false,
        };
      });
      break;
    case buttonName === "advanced" && !currentlyActive.advanced:
      setPageNum((prevNumber) => 2);
      setLimit((prevLimit) => 12);
      setActiveBtn((prevActive) => {
        return {
          all: false,
          barracks: false,
          advanced: true,
        };
      });
      break;
      default: 
      return;
  }
};
