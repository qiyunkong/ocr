(function (){
    var Win = window;
    var Dom = Win.document;
    function $(element){
        return Dom.querySelector(element);
    }
    var btnCamera = $("#camera");
    console.log(btnCamera);
    //var btnCamera = $("#camera");
    btnCamera.onclick = function(){

        Camera();
    }
    
    //调用手机摄像头
    function Camera(){
        var video = $("#demo");
        video.style="display: block;";
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
    }
    
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
