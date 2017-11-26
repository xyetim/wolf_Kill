// pages/settingRoom/setting.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sums:[8,9,10,11,12],
    gods:[
      {name:"预言家",value:"YYJ"},
      {name:"女巫",value:"NW",checked:1},
      {name:"猎人",value:"LR",checked:1},
      {name:"守卫",value:"SW"},
      {name:"白痴",value:"BC"}
    ],
    wolves:[
      {name:"2狼",value:"2"},
      {name:"3狼",value:"3"},
      {name:"4狼",value:"4"}
    ],
    police:[
      {name:"是",value:"Y"},
      {name:"否",value:"N"}
    ],
    sumPeople:0,
    godsPeople:0,
    wolfPeople:0,
    farmerPeople:0
  },

  pickerChange: function (e) {
    var index = e.detail.value;
    var sum = this.data.sums[index];
    this.setData({
      sumPeople : sum
    });
  },

  checkboxChange: function(e){
    var god = e.detail.value;
    godsPeople = god;
    console.log(godsPeople);
  },

  formsubmit : function(e){
    var formSet = {};
    formSet = e.detail.value;
    console.log(formSet);
  }


})