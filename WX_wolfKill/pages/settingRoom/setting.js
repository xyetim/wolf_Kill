// pages/settingRoom/setting.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    gods: [
      { name: '预言家', value: 'yuyanjia',checked : false},
      { name: '女巫', value: 'nvwu', checked: false},
      { name: '猎人', value: 'lieren', checked: false },
      { name: '白痴', value: 'baichi', checked: false },
      { name: '守卫', value: 'shouwei', checked: false},
      { name: '狐狸', value: 'huli', checked: false },
    ],
    wolves :[
      { name: '白狼王', value: 'bailangwang', checked: false },
      { name: '黑狼王', value: 'heilangwang', checked: false },
      { name: '恶魔', value: 'emo', checked: false }
    ]
  },
  onCustomeTap : function(e){
    var types = e.detail.types;
    var results = e.detail.results;
    this.data[types] = results;
  }
})