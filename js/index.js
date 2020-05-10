(function (){

    //初始化
    var Win = window;
    var Dom = Win.document;
    function $(element){
        return Dom.querySelector(element);
    }
    //解决兼容
    navigator.getUserMedia || (navigator.getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia);
    
    //获取Dom元素 开启相机按钮 相机音频 拍照 取消
    var btnCamera = $("#btn-camera");
    var videoCamera = $("#video-camera");
    var CameraModule = $("#CameraModule");
    var btnOk = $("#btn-ok");
    var btnCancel = $("#btn-cancel");
    var PicModule = $("#PicModule");
    var imgPic = $("#img-pic");
    var imgOk = $("#img-ok");
    var imgCancel = $('#img-cancel');








    
    btnCamera.onclick = startCamera;           //开启相机按钮
    btnCancel.onclick = outCamera;            //关闭相机按钮
    btnOk.onclick = Photograph;               //拍照


    imgOk.onclick = getPic;                //确认照片按钮
    imgCancel.onclick = againPic;         //取消照片按钮      








  
    
    //启动相机API
    function startCamera(){
        //显示
        CameraModule.style = "display: block;";
        navigator.getUserMedia(
            {
                video:true, //开启视频
            },
            function(stream){
                //指定src
                if (window.URL) {
                    videoCamera.srcObject = stream;
                } else {
                    videoCamera.src = stream;
                }
                //视频播放
                videoCamera.play();
            },
            function(error){
                console.log(error);
            }
        )
           




        /*
        navigator.mediaDevices.getUserMedia({
            //audio: true,
            //video:true,
            video: { 
                facingMode: { 
                    exact: "environment" 
            } }
        }).then(res=>{
            video.srcObject = res;
            video.play();
        })
        */


    }

    //退出相机API
    function outCamera(){

    }


    //拍照API
    function Photograph(){
        var cxt = imgPic.getContext("2d"); //获取画笔
        //图片API
        cxt.drawImage(videoCamera,0,0);
    }


    //上传照片API
    function getPic(){

    }

    //重照API
    function againPic(){

    }

































    
    /*
    var btn = document.querySelector("#btn");
    btn.onclick = function(){
        var canvas = document.createElement("canvas");
        canvas.width = 640;
        canvas.height = 480;
        var cxt = canvas.getContext("2d");
        cxt.drawImage(document.querySelector("#myvideo"), 0, 0, 640, 480);
        document.querySelector("#cam_box").appendChild(canvas);
    }
    */
    //console.log(btnCamera);
    //点击事件
    /*
    btnCamera.onclick = function(){
        console.log(1);
    };
    */
    //$("#camera").addEventListener("click",function Camera(){
        //console.log(1);
        // var video = $("#demo");
        // navigator.mediaDevices.getUserMedia({
        //     video:true
        // }).then(res=>{
        //     video.srcObject = res;
        //     video.play();
        // })
   // })
    //console.log(Win);

    
})(window)
