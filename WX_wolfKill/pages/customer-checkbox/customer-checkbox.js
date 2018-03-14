// pages/customer-checkbox/customer-checkbox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    xProperties : {
      type : Array
    },
    xType : {
      type : String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    chooseThis : function(e){
      var item = e.currentTarget.dataset.item;
      var index = e.currentTarget.dataset.index;
      var modifyData = "xProperties[" + index + "]";
      item.checked = !item.checked;
      this.setData({
        [modifyData] : item
      });
      var msg = {
        types : this.data.xType,
        results: this.data.xProperties
      }
      //触发外部事件以将变化传给引用者
      this.triggerEvent('custometap', msg);
    }
  }
})
