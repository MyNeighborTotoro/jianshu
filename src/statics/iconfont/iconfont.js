import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1534130124281'); /* IE9*/
    src: url('./iconfont.eot?t=1534130124281#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1534130124281') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1534130124281#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;






