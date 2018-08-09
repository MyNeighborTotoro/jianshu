import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1533801784601'); /* IE9*/
    src: url('./iconfont.eot?t=1533801784601#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1533801784601') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1533801784601#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

