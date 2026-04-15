// interface ViewsContainerProps {
//     currentBg?: string;
// }
//  interface RatioRowProps {
//     ratio?: [number, number]; // optional ratio [left, right], defalut is [1, 1]
// }

// export {
//     ViewsContainerProps,
//     RatioRowProps
// }

interface ViewsContainerProps {
  currentBg?: string;
}

interface RatioRowProps {
  ratio?: [number, number]; // optional ratio [left, right], default is [1, 1]
}

export type {
  ViewsContainerProps,
  RatioRowProps
};