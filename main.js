(function (){
    Java.perform(function () {
        var NetworkSecurityConfig=Java.use("android.security.net.config.NetworkSecurityConfig");
        // @ts-ignore
        NetworkSecurityConfig.getDefaultBuilder.implementation=function (info){
            var oriVer=info.targetSdkVersion.value;
            info.targetSdkVersion.value=20;
            var ret=this.getDefaultBuilder(info);
            info.targetSdkVersion.value=oriVer;
            return ret;
        }
    });
})();
