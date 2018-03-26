/**
 * Des
 * Created by jizongquan on 2018/3/15.
 * E-mail jizongquan@jd.com
 * Update 2018/3/15
 */


var jizongquan = function(){
    this.init()
};
jizongquan.prototype = {
    init: function(){
        //在这里用this调用指定的方法
        this.setMenu();
    },
    setMenu:function(){
        //在这里写要执行的方法
    }
};
new jizongquan();

