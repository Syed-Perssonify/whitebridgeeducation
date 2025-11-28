declare module "react-animated-progress-bar" {
  import { Component } from "react";

  interface ProgressBarProps {
    rect?: boolean;
    width?: string;
    height?: string;
    fontColor?: string;
    fontSize?: string;
    leading?: string;
    margin?: string;
    rectBorderRadius?: string;
    fontWeight?: string;
    percentage?: string | number;
    defColor?: {
      excellent?: string;
      good?: string;
      fair?: string;
      poor?: string;
    };
    trackPathColor?: string;
    trackBorderColor?: string;
    trackPathBorderRadius?: string;
  }

  export default class ProgressBar extends Component<ProgressBarProps> {}
}

