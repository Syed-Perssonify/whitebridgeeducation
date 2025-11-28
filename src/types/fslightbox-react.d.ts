declare module "fslightbox-react" {
  import { Component } from "react";

  interface FsLightboxProps {
    toggler?: boolean;
    sources?: string[];
    type?: string;
    slide?: number;
    slideChangeAnimation?: string;
    exitFullscreenOnClose?: boolean;
    maxYoutubeVideoDimensions?: {
      width?: number;
      height?: number;
    };
    onOpen?: () => void;
    onClose?: () => void;
    onSlideChange?: (index: number) => void;
    [key: string]: any;
  }

  export default class FsLightbox extends Component<FsLightboxProps> {}
}
