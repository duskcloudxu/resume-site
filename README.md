# [个人简历](http://118.126.64.186:3002/#/)|Resume Site
> it is my second react application

尽管这个网站的进度慢到让我想鄙视自己的效率，但是总算还是在2月份之前堪堪完成了，在开始这个项目之前，我对于我自己这个项目要完成的点有：

- 对网络传输部分更加细致的了解 ×
  - 这个东西完全没有涉及到网络协议部分，这方面估计还是得刷书本，关于这方面的知识可能过段时间打算做一个QQ机器人的时候能够复习到吧。
- 需要更加透彻的调试工具和手段 🐶
  - 整个网站的搭建过程我都是使用Jetbrain IDEA的chorme插件进行的调试，总体来说十分舒服
  - 其[详细教程](https://www.cnblogs.com/chenglt/p/6591583.html)
- 需要更加规范的使用redux的手法🐶
  - 大概重新把redux的标准用法实践了一遍，这种把整个部件套一层然后export的思路略鬼才……
- 需要补习移动端web界面设计的知识 🐶？

  - 大概完成了一个移动端界面，还需要进一步的学习

## 问题

### hashRouter||browserRouter

由于React-router本身的设计，当使用browerRouter的时候，直接刷新非/目录的页面的时候会出现404NotFound的问题。但是如果使用hashRouter的话，会在第一个/后面出现#号痕迹，同时似乎不利于SEO查找。

具体内容讨论[见此](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually/36623117#36623117)

### 图片加载问题

在本地的时候局域网环境下图片加载当然没有问题。但是当托管到服务器的时候问题就出现了， PhotoGraphy页面下的图片基本无法加载。后知后觉，1m的小水管原来是125kb/s的下载速度啊……目前通常使用的方法是找了一个匿名图床作为内容存放了……

## 代码片段|code Snippet

```javascript
 shouldComponentUpdate(nextProps, nextState) {
        if (!nextState.imgLoaded && nextProps.isShowingImg) {
            getPhoto(this.props.imgList[nextProps.showImgIndex].name, this.renderImg);
            return false;
        }
        return true;
    }
```

- 算是一个对react lifeclycle的应用吧

在展示图片这个逻辑上我设计的使点击gallery里面的缩略图然后slider出现，但是在出现到新的图片下载完成为止这段时间内slider中的图片仍然是上一张的图片。解决方法是在slider出来前设置一个imgLoaded这样一个flag变量，默认为false, 在imgLoaded为true之前照片不显示。 在shouldComponentUpdate中若imgLoaded没有完成，则请求这次的照片数据，不然则直接展示。

> 然而当换用了图床显示图片的方法以后这个代码也删掉了233并不存在组件中imgSrc切换的问题。





