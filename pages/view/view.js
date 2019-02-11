Page({
  data:{
    test:'测试文档'
  },
  clicktest(e){
    console.log("事件绑定test");
    console.log(e);
    this.setData({
      test:"单击事件触发，更改原始数据"
    })
  }

})