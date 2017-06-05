/**
 * Created by kege on 2017/6/5.
 */

var utils = (function () {
  return {
    //->children:获取curEle下所有的元素子节点（兼容所有的浏览器），如果传递了tagName，可以在获取的集合中进行二次筛选，把指定标签名的获取到
    children:function (curEle,tatName) {
      var ary = [];
      if(/MSIE (6|7|8)/i.test(navigator.userAgent)){
        var nodeList = curEle.childNodes;
        for(var i=0,len = nodeList.length;i<len;i++){
          var curNode = nodeList[i];
          curNode.nodeType === 1?ary[ary.length]=curNode:null;
        }
        nodeList = null;
      }else {
        ary = this.listToArray(curEle.children);
      }
      if(typeof tatName === "string"){
        for(var k=0;k<ary.length;k++){
          var curEleNode = ary[k];
          if(curEleNode.tagName.toLowerCase() !== tatName.toLowerCase()){
            ary.splice(k,1);
            k--;
          }
        }
      }
      return ary;
    }
  }
}());